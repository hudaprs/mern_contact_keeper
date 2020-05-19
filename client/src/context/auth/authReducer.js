import { REGISTER_SUCCESS, REGISTER_FAIL, CLEAR_ERRORS } from "../types";
export default (state, { type, payload }) => {
  switch (type) {
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
      localStorage.clear();
      return {
        ...state,
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
