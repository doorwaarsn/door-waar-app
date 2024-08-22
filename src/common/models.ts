import { Actions, Status } from "./enums";

export type Pager<T> = {
  status: Status;
  data: T[];
  error?: string | null;
  currentPage: number;
  totalPages: number;
};

export type Saver<T> = {
  data?: T | null;
  status: Status;
  error?: string | null;
};

export type Action = {
  type: Actions;
  payload?: any;
};
