import { NextAuthOptions } from "next-auth";
import { PROVIDER_ATTRIBUTES_KEY, provider } from "@/lib/auth/auth-provider";
import { UserInfo } from "@/types/types";

export const authOptions: NextAuthOptions = {
  debug: false,
  session: { strategy: "jwt" },
  providers: [provider],
  callbacks: {
    // checks whether user is allowed to sign in
    async signIn({ account }) {
      return Boolean(
        account?.provider === provider.id &&
          account?.access_token &&
          account?.id_token
      );
    },
    // "account" and "profile" are only passed the first time this callback is called on a new session, after the user signs in
    // this defines how JWT is generated and is then used in session() callback as "token"
    async jwt({ token, account, profile }) {
      const profileItems = (profile as any)?.[PROVIDER_ATTRIBUTES_KEY];
      if (profile && profileItems) {
        let userDID: string;
        let user: UserInfo = {};
        console.log("ProfileItems are");
        console.dir(profileItems);
        userDID = profileItems.find(
          (item: any) => typeof item.did === "string"
        )?.did;
        user.email = profileItems.find(
          (item: any) => typeof item.email === "string"
        )?.email;
        console.log("new email", user.email);
        user.country = profileItems.find(
          (item: any) => typeof item.country === "string"
        )?.country;
        console.log("new country", user.country);
        user.givenName = profileItems.find(
          (item: any) => typeof item.givenName === "string"
        )?.givenName;
        console.log("new name", user.givenName);
        user.familyName = profileItems.find(
          (item: any) => typeof item.familyName === "string"
        )?.familyName;
        user.postalCode = profileItems.find(
          (item: any) => typeof item.postalCode === "string"
        )?.postalCode;
        user.phoneNumber = profileItems.find(
          (item: any) => typeof item.phoneNumber === "string"
        )?.phoneNumber;    

        token = {
          ...token,
          user,
          ...(userDID && { userId: userDID }),
        };
      }

      if (account) {
        token = {
          ...token,
          ...(account?.access_token && { accessToken: account.access_token }),
          ...(account?.id_token && { idToken: account.id_token }),
        };
      }

      return token;
    },
    // session is persisted as an HttpOnly cookie
    async session({ session, token }) {
      return {
        ...session,
        ...(token.user && { user: { ...session.user, ...token.user } }),
        ...(token.accessToken && { accessToken: token.accessToken }),
        ...(token.idToken && { idToken: token.idToken }),
        ...(token.userId && { userId: token.userId }),
      };
    },
  },
};
