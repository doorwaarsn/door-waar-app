import { Gender, Role, UserType } from "../../common/enums";

export type GetDataDto = {
  organizationId: string;
  page: number;
};

export type UpdateUser = {
  id: string;
  user: {
    referenceID: string;
    firstName: string;
    lastName: string;
    email: string;
    gender: Gender;
    phoneNumber: string;
    avatar: string;
    password: string;
    role: Role[];
    departId: string;
    birthday: string;
    street: string;
    city: string;
    country: string;
    workPhone: string;
    workEmail: string;
  };
};

export declare type getUserByRole = {
  firstName: string;
  lastName: string;
  email: string;
  gender: Gender;
  organizationId: string;
  webSite: string;
  phoneNumber: string;
  avatar: string;
  password: string;
  role: {
    id: string;
  };
};

export type User = {
  id: number;
  fullName: string;
  gender: Gender;
  phoneNumber: string;
  certificate: string[];
  illustrator: [];
  avatar: { 0: { image: string } };
  password: string;
  role: string;
  address: string;
  providerType: "ENTITY" | "INDIVIDUAL";
  createdAt: string;
  isWorker: boolean;
  recommend: boolean;
  region: [];
  description: [];
  cni: [];
  subProfession: string;
  profession?: { name: string };
  isAvailable: boolean;
};

export type CreateUser = {
  id: string;
  referenceID: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  jobId: string;
  confirmPassword: string;
  gender: string;
  type: string;
  role: string;
  // departId: string;
  street: string;
  city: string;
  phoneNumber: string;
  country: string;
};
