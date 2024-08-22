import { Gender, Role } from "../enums";
import { Address } from "../types";

export type User = {
  id: number;
  fullName: string;
  gender: Gender;
  phoneNumber: string;
  certificate: string[];
  department: [];
  illustrator: [];
  avatar: string;
  password: string;
  role: Role;
  address: string;
  providerType: string;
  isWorker: boolean;
  recommend: boolean;
  region: [];
  description: [];
  subProfession: string;
  profession: [];
  isAvailable: boolean;
};

type Job = {
  id: string;
  title: string;
  description: string;
  createdAt: Date;
  location: string;
};
