import { SET_ALERT, REMOVE_ALERT } from "../types";

export default (state, { type, payload }) => {
  switch (type) {
    case SET_ALERT:
      return {
        ...state,
        alert: payload,
      };
    case REMOVE_ALERT:
      return {
        ...state,
        alert: null,
      };
    default:
      return state;
  }
};
