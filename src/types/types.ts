export type ErrorResponse = {
  code: string;
  message?: string;
  issues?: { message: string }[];
};

export type UserInfo = {
  email?: string;
  country?: string;
  givenName?: string;
  postalCode?: string;
  familyName?: string;
  phoneNumber?: string;
};
