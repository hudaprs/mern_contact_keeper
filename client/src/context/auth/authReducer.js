import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  CLEAR_ERRORS,
  USER_LOADED,
  AUTH_ERROR,
} from "../types";

export default (state, { type, payload }) => {
  switch (type) {
    case USER_LOADED:
      return {
        ...state,
        user: payload,
        loading: false,
        isAuthenticated: true,
        error: null,
      };
    case REGISTER_SUCCESS:
      localStorage.setItem("token", payload);
      return {
        ...state,
        token: payload,
        isAuthenticated: true,
        loading: false,
        error: null,
      };
    case REGISTER_FAIL:
    case AUTH_ERROR:
      localStorage.clear();
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
        error: payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
