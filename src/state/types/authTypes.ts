import React from "react";

export type AuthStateType = {
  isLoggedIn: boolean | null;
  email: string | null;
  isVerified: null | boolean;
  userId: string | null;
  isLoading: boolean;
  tempPasswd: string | null;
};

export interface AuthContextType {
  setAuthState: React.Dispatch<React.SetStateAction<AuthStateType>>;
  authState: AuthStateType;
}

export interface IUnAuthUserName {
  setFullName: React.Dispatch<React.SetStateAction<string>>;
  fullName: string;
}

export interface IRegisterCommonProps {
  onClick: () => void;
  animationClass: string;
}
