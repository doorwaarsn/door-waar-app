import { useReducer } from "react";
import { AuthActions, IAuth, IAuthRegister } from "./auth.model";
import reducer from "./auth.reducer";
import AuthContext, { initState } from "./auth.context";
import { User } from "../../common/users/users.models";
import { Role } from "../../common/enums";
import { postRequest, putRequest } from "../../common/request";
import { API_URL } from "../../env";
import axios from "axios";

export const USERS_BASE_URL = "admin/users";

export const AuthProvider = ({ children }: { children: any }) => {
  const [state, dispatch] = useReducer(reducer, initState);

  async function updateUser(user: User, roles: Role) {
    dispatch({ type: AuthActions.SAVE });
    try {
      const response = await putRequest(
        `${USERS_BASE_URL}/edit/${user.id}`,
        user
      );
      const data = response.data;
      if (data.code === 200 || data.code === 201) {
        const updated: User = { ...response.data, role: roles };
        localStorage.setItem("user", JSON.stringify(updated));
        dispatch({ type: AuthActions.SAVE_SUCCESS, payload: updated });
      } else {
        dispatch({ type: AuthActions.SAVE_ERROR, payload: data.message });
      }
    } catch (error: any) {
      dispatch({ type: AuthActions.SAVE_ERROR, payload: error.message });
    }
  }

  async function login(phoneNumber: any, password: any) {
    try {
      const response = await axios.post(`${API_URL}/auth/authentication`, {
        phoneNumber,
        password,
      });
      console.log(response);

      const user = response.data;
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", JSON.stringify(user.token));

      dispatch({
        type: AuthActions.LOGIN_SUCCESS,
        payload: { user: user, token: user.token },
      });
    } catch (error: any) {
      throw error.response.data.message;
    }
    // dispatch({ type: AuthActions.LOGGING });
    // try {
    //   const res = await postRequest("auth/authentication", dto);
    //   console.log(res);

    //   if (res.code === 200) {
    //     const data = res.data.user;
    //     localStorage.setItem("token", res.data.accessToken);
    //     localStorage.setItem("user", JSON.stringify(data));
    //     dispatch({
    //       type: AuthActions.LOGIN_SUCCESS,
    //       payload: { user: data, token: res.data.accessToken },
    //     });
    //   } else {
    //     dispatch({
    //       type: AuthActions.LOGIN_ERROR,
    //       payload: res.message,
    //     });
    //   }
    // } catch (error: any) {
    //   dispatch({ type: AuthActions.LOGIN_ERROR, payload: error.message });
    // }
  }

  async function register(dto: IAuthRegister) {
    dispatch({ type: AuthActions.SIGNUP });
    try {
      const res = await postRequest("admin/auth/sign-up", dto);

      if (res.code === 200 || res.code === 201) {
        const data = res.user;
        dispatch({
          type: AuthActions.SIGNUP_SUCCESS,
          payload: { user: data },
        });
        return res;
      } else {
        dispatch({
          type: AuthActions.SIGNUP_ERROR,
          payload: res.message,
        });
      }
    } catch (error: any) {
      dispatch({ type: AuthActions.SIGNUP_ERROR, payload: error.message });
    }
  }

  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("lastLoginTime");

    dispatch({ type: AuthActions.LOGOFF });
    return {};
  }

  return (
    <AuthContext.Provider
      value={{
        ...state,
        login,
        register,
        logout,
        updateUser,
        hasRole: (roles: Role[]) => {
          const user = JSON.parse(localStorage.getItem("user") || "{}");
          return user && roles.includes(user.role);
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
