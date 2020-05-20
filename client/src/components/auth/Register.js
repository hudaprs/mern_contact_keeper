import React, { useState, useContext, useEffect } from "react";
import AlertContext from "../../context/alert/alertContext";
import AuthContext from "../../context/auth/authContext";

const Register = (props) => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;
  const {
    register,
    serverErrors,
    isAuthenticated,
    loading,
    isSuccess,
    clearSuccess,
  } = authContext;

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || password === "") {
      setAlert("Please fill all forms", "danger");
    } else if (password !== password2) {
      setAlert("Password confirmation did not match", "danger");
    } else {
      register({
        name,
        email,
        password,
      });
    }
  };

  useEffect(() => {
    if (isAuthenticated) props.history.push("/");

    if (serverErrors) {
      if (serverErrors.message === "Email already exists") {
        setAlert(serverErrors.message, "danger");
      }
    }

    if (isSuccess) {
      props.history.push("/login");
      setAlert("Register Successfully", "success");
      setUser({
        name: "",
        email: "",
        password: "",
        password2: "",
      });
      clearSuccess();
    }
    // eslint-disable-next-line
  }, [serverErrors, isSuccess, props.history]);

  const { name, email, password, password2 } = user;

  return (
    <div className="form-container">
      <h1 className="text-primary">Register</h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" value={name} onChange={onChange} />
        </div>
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
        <div className="form-group">
          <label htmlFor="password2">Password Confirmation</label>
          <input
            type="password"
            name="password2"
            value={password2}
            onChange={onChange}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary btn-block"
          disabled={loading}
        >
          {loading && <em className="fas fa-circle-notch fa-spin"></em>}{" "}
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
