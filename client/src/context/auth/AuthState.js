import React, { useReducer } from "react";
import AuthContext from "./authContext";
import AuthReducer from "./authReducer";
import { REGISTER_SUCCESS, REGISTER_FAIL, CLEAR_ERRORS } from "../types";
import axios from "axios";

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem("token"),
    user: null,
    loading: true,
    error: null,
    isAuthenticated: null,
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  const register = async (formData) => {
    try {
      const newUser = await axios.post("/api/users", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const { token } = newUser.data.results;

      dispatch({ type: REGISTER_SUCCESS, payload: token });
    } catch (err) {
      const { message } = err.response.data;
      dispatch({ type: REGISTER_FAIL, payload: message });
    }
  };

  const clearErrors = () => dispatch({ type: CLEAR_ERRORS });

  const { token, user, loading, error, isAuthenticated } = state;
  return (
    <AuthContext.Provider
      value={{
        token,
        user,
        loading,
        error,
        isAuthenticated,
        register,
        clearErrors,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
