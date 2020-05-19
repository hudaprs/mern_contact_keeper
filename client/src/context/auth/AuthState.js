import React, { useReducer } from "react";
import AuthContext from "./authContext";
import AuthReducer from "./authReducer";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  CLEAR_ERRORS,
  AUTH_ERROR,
  USER_LOADED,
} from "../types";
import axios from "axios";
import setAuthToken from "../../utils/setAuthToken";

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem("token"),
    user: null,
    loading: true,
    error: null,
    isAuthenticated: null,
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  // Load user
  const loadUser = async () => {
    // Set token
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }

    try {
      const getLoggedUser = await axios.get("/api/auth");
      const { user } = getLoggedUser.data.results;

      dispatch({ type: USER_LOADED, payload: user });
    } catch (err) {
      dispatch({ type: AUTH_ERROR });
    }
  };

  // Register user
  const register = async (formData) => {
    try {
      const newUser = await axios.post("/api/users", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const { token } = newUser.data.results;

      dispatch({ type: REGISTER_SUCCESS, payload: token });

      loadUser();
    } catch (err) {
      const { message } = err.response.data;
      dispatch({ type: REGISTER_FAIL, payload: message });
    }
  };

  // Clear errors
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
        loadUser,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
