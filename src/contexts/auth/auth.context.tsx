import { createContext } from "react";
import { AuthStatus, IAuth, IAuthRegister } from "./auth.model";
import { Role, Status } from "../../common/enums";
import { User } from "../../common/users/users.models";
import { loadLocalUser, loadToken } from "../../common/utils.context";

export type AuthContextSate = {
  status: AuthStatus;
  error?: any;
  profile?: User;
  saveStatus: Status;
  token?: string | null;
  login?: (phoneNumbe: any, password: any) => void;
  register?: (dto: IAuthRegister) => void;
  logout?: () => void;
  updateUser?: (user: User, role: Role) => void;
  loadOrganization?: (id: string) => void;
  isGranted?: (
    module: string,
    feature?: string,
    permission?: string
  ) => boolean;
  hasRole?: (roles: Role[]) => boolean | undefined;
};

export const initState: AuthContextSate = {
  status: loadToken() ? AuthStatus.logged : AuthStatus.idle,
  token: loadToken(),
  saveStatus: Status.idle,
  error: null,
  profile: loadLocalUser(),
  hasRole: (roles: Role[]) => {
    const user = loadLocalUser();
    return user && roles.includes(user.role);
  },
};

const AuthContext = createContext<AuthContextSate>(initState);

export default AuthContext;
function getAccess(arg0: User) {
  throw new Error("Function not implemented.");
}
