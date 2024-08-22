import { Actions, Status } from "../../common/enums";
import { Action } from "../../common/models";
import { UsersContextState } from "./users.context";

export default function reducer(
  state: UsersContextState,
  action: Action
): UsersContextState {
  switch (action.type) {
    case Actions.SAVE:
      return {
        ...state,
        status: Status.loading,
        error: null,
      };
    case Actions.SAVE_SUCCESS:
    case Actions.ARCHIVE_SUCCESS:
      return {
        ...state,
        status: Status.success,
      };
    case Actions.SAVE_ERROR:
      return {
        ...state,
        status: Status.failed,
        error: action.payload,
      };
    case Actions.DELETE:
      return {
        ...state,
        status: Status.loading,
      };
    case Actions.DELETE_SUCCESS:
      return {
        ...state,
        status: Status.success,
      };
    case Actions.DELETE_ERROR:
      return {
        ...state,
        status: Status.failed,
        error: action.payload,
      };
    case Actions.RESET:
      return {
        ...state,
        status: Status.idle,
        error: null,
      };
    default:
      return state;
  }
}
