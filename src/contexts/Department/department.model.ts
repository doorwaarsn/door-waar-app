import { User } from "../users/users.models";

export type createDepartment = {
  name?: string;
  description?: string;
  banner?: string;
};

export type Department = {
  name: string;
  description: string;
  headUser: string;
  banner: string;
  users: User[];
};
