
import { AuthContextSate } from "./auth.context";
import { AuthAction, AuthActions, AuthStatus } from "./auth.model";

export default function reducer(
    state: AuthContextSate,
    action: AuthAction
): AuthContextSate {
    switch (action.type) {
        case AuthActions.LOGGING:
            return {
                ...state,
                status: AuthStatus.logging,
                error: null,
            };
        case AuthActions.LOGIN_SUCCESS:
            return {
                ...state,
                status: AuthStatus.logged,
                profile: action.payload.user,
                error: null,
            };
        case AuthActions.LOGIN_ERROR:
            return {
                ...state,
                status: AuthStatus.error,
                error: action.payload,
            };
        case AuthActions.LOGOFF:
            return {
                ...state,
                status: AuthStatus.idle,
                error: null,
                profile: undefined,
            };

        default:
            return state;
    }
}
