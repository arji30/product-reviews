import { useFetchUserInfoQuery } from "@/lib/hooks/use-fetch-user-info-query";

export function useAuthentication() {
  const { data, status } = useFetchUserInfoQuery();
  console.log(`data collected is: ${data}`);
  console.dir(data);
  console.log(`status is ${status}`);

  return {
    isLoading: status === "loading",
    isAuthenticated: status === "success",
    userId: data?.userId,
    user: data?.user,
  };
}
