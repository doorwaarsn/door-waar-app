export enum AuthActions {
  LOGGING,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  SAVE,
  SAVE_SUCCESS,
  SAVE_ERROR,
  LOAD_ORGANIZATION,
  LOAD_ORGANIZATION_SUCCESS,
  LOAD_ORGANIZATION_ERROR,
  LOGOFF,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  SIGNUP,
}

export interface AuthAction {
  type: AuthActions;
  payload?: any;
}

export type IAuth = {
  phoneNumber?: string;
  password?: string;
};

export enum AuthStatus {
  logging,
  error,
  idle,
  logged,
}

export type IAuthRegister = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  password: string;
  gender: string;
  companyName: string;
  street: string;
  country: string;
  city: string;
  postalCode: string;
};
