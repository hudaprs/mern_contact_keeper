import React, { useState, useContext, useEffect } from "react";
import AlertContext from "../../context/alert/alertContext";
import AuthContext from "../../context/auth/authContext";

const Login = (props) => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;
  const { login, serverErrors, isAuthenticated, loading } = authContext;

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      setAlert("Please fill all forms", "danger");
    } else {
      login(user);
    }
  };

  useEffect(() => {
    if (isAuthenticated) props.history.push("/");

    if (serverErrors) {
      if (
        serverErrors.message === "Email doesn't exists" ||
        serverErrors.message === "Password doesn't match"
      ) {
        setAlert(serverErrors.message, "danger");
      }
    }

    // eslint-disable-next-line
  }, [serverErrors]);

  const { email, password } = user;

  return (
    <div className="form-container">
      <h1 className="text-primary">Login</h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" value={email} onChange={onChange} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={onChange}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary btn-block"
          disabled={loading}
        >
          {loading && <em className="fas fa-circle-notch fa-spin"></em>} Login
        </button>
      </form>
    </div>
  );
};

export default Login;
