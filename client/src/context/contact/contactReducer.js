import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACT,
  CLEAR_FILTER,
  SET_LOADING,
  CONTACT_ERROR,
  CLEAR_SUCCESS,
  GET_CONTACT,
} from "../types";

export default (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_CONTACT:
      return {
        ...state,
        contacts: payload,
        loading: false,
      };
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [payload.results, ...state.contacts],
        loading: false,
        isSuccess: true,
        message: payload.message,
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact._id !== payload.results._id
        ),
        loading: false,
        isSuccess: true,
        message: payload.message,
      };
    case SET_CURRENT:
      return {
        ...state,
        current: payload,
        loading: false,
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
        loading: false,
      };
    case UPDATE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map((contact) =>
          contact.id === payload.id ? payload : contact
        ),
        loading: false,
      };
    case FILTER_CONTACT:
      return {
        ...state,
        filtered: state.contacts.filter((contact) => {
          const regex = new RegExp(`${payload}`, "gi");
          return contact.name.match(regex) || contact.email.match(regex);
        }),
        loading: false,
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null,
      };
    case CONTACT_ERROR:
      return {
        ...state,
        loading: false,
        isSuccess: false,
        error: payload,
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
