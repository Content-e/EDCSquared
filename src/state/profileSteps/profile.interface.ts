import { ApolloError } from "@apollo/client";
import { UnknownType } from "utils";

export interface IProfileDetails {
  id: string;
  version: number;
}

export interface IProfile {
  id?: string;
  fullName: string;
  email: string;
  phone: string;
  version: number;
  referredBy?: string | null;
  profile?: IProfileDetails | null;
}

export interface IProfileState {
  data?: UnknownType | null;
  isLoading: boolean;
  error?: ApolloError | Error;
}

export interface ProfileContextType {
  profileState: IProfileState;
  setProfileState: React.Dispatch<React.SetStateAction<IProfileState>>;
}
