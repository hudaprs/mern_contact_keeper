import React, { useReducer } from "react";
import AuthContext from "./authContext";
import AuthReducer from "./authReducer";
import {} from "../types";

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem("token"),
    user: null,
    loading: true,
    error: null,
    isAuthenticated: null,
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  const { token, user, loading, error, isAuthenticated } = state;
  return (
    <AuthContext.Provider
      value={{ token, user, loading, error, isAuthenticated }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
