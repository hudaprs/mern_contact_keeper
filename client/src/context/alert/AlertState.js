import React, { useReducer } from "react";
import AlertContext from "./alertContext";
import AlertReducer from "./alertReducer";
import { SET_ALERT, REMOVE_ALERT } from "../types";

const AlertState = (props) => {
  const initialState = {
    alert: null,
  };

  const [state, dispatch] = useReducer(AlertReducer, initialState);

  const setAlert = (message, type, timeout = 5000) => {
    dispatch({ type: SET_ALERT, payload: { message, type } });

    setTimeout(() => dispatch({ type: REMOVE_ALERT }), timeout);
  };

  const { alert } = state;
  return (
    <AlertContext.Provider value={{ alert, setAlert }}>
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
