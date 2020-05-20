import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  SET_LOADING,
  CLEAR_SUCCESS,
} from "../types";

export default (state, { type, payload }) => {
  switch (type) {
    case USER_LOADED:
      return {
        ...state,
        user: payload,
        loading: false,
        isAuthenticated: true,
        serverErrors: null,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        isSuccess: true,
        loading: false,
        serverErrors: null,
      };
    case LOGIN_SUCCESS:
      localStorage.setItem("token", payload);
      return {
        ...state,
        token: payload,
        isAuthenticated: true,
        isSuccess: true,
        loading: false,
        serverErrors: null,
      };
    case REGISTER_FAIL:
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case LOGOUT:
      localStorage.clear();
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        isSuccess: false,
        loading: false,
        user: null,
        serverErrors: payload,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case CLEAR_SUCCESS:
      return {
        ...state,
        isSuccess: false,
      };
    default:
      return state;
  }
};
