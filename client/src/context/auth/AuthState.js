import React, { useReducer } from "react";
import AuthContext from "./authContext";
import AuthReducer from "./authReducer";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  AUTH_ERROR,
  USER_LOADED,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  SET_LOADING,
  CLEAR_SUCCESS,
} from "../types";
import axios from "axios";
import setAuthToken from "../../utils/setAuthToken";

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    isSuccess: false,
    user: null,
    loading: false,
    serverErrors: [],
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  const setLoading = () => dispatch({ type: SET_LOADING });

  const loadUser = async () => {
    setAuthToken(localStorage.token);

    setLoading();
    try {
      const getLoggedUser = await axios.get("/api/auth");

      const { user } = getLoggedUser.data.results;

      dispatch({ type: USER_LOADED, payload: user });
    } catch (err) {
      dispatch({ type: AUTH_ERROR });
    }
  };

  const register = async (formData) => {
    setLoading();
    try {
      const registerUser = await axios.post("/api/users", formData);

      const { results } = registerUser.data;

      dispatch({ type: REGISTER_SUCCESS, payload: results });
    } catch (err) {
      dispatch({ type: REGISTER_FAIL, payload: err.response.data });
    }
  };

  const login = async (formData) => {
    setLoading();
    try {
      const loggingIn = await axios.post("/api/auth", formData);

      const { token } = loggingIn.data.results;

      dispatch({ type: LOGIN_SUCCESS, payload: token });
      loadUser();
    } catch (err) {
      dispatch({ type: LOGIN_FAIL, payload: err.response.data });
    }
  };

  const logout = () => dispatch({ type: LOGOUT });

  const clearSuccess = () => dispatch({ type: CLEAR_SUCCESS });

  const {
    token,
    user,
    loading,
    serverErrors,
    isAuthenticated,
    isSuccess,
  } = state;
  return (
    <AuthContext.Provider
      value={{
        token,
        user,
        loading,
        serverErrors,
        isAuthenticated,
        isSuccess,
        register,
        login,
        clearSuccess,
        loadUser,
        logout,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
