import { User } from "./users/users.models";

export const loadToken = (): string | undefined | null => {
  const token = localStorage.getItem("token");
  if (token) {
    const decodedJwt = _parseJwt(token);
    if (decodedJwt.exp * 1000 < Date.now()) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      return undefined;
    }
    return token;
  }
  return localStorage.getItem("token");
};

function _parseJwt(token: string) {
  try {
    return JSON.parse(atob(token.split(".")[1]));
  } catch (e) {
    return null;
  }
}

export const loadLocalUser = (): User | undefined => {
  const user = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user")!)
    : undefined;
  if (user) {
    return user;
  }

  return undefined;
};
