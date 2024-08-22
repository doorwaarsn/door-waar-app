import { createContext } from "react";
import { UpdateUser, User } from "./users.models";
import { Pager, Saver } from "../../common/models";
import { Status } from "../../common/enums";

export type UsersContextState = Saver<User> & {
  editUser?: (user: UpdateUser) => void;
  removeUser?: (id: string) => Promise<void>;
  loadUser?: (id: string) => void;
  loadUsers?: () => void;
  selectUser?: (org: User) => void;
  resetStatus?: () => void;
};

export const initState: UsersContextState = {
  status: Status.idle,
};

const UsersContext = createContext<UsersContextState>(initState);

export default UsersContext;
