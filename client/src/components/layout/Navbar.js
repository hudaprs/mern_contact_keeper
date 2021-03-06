import React, { Fragment, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";

const Navbar = ({ title, icon }) => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, user, logout, loadUser } = authContext;

  const onLogout = () => {
    logout();
  };

  useEffect(() => {
    loadUser();
    // eslint-disable-next-line
  }, []);

  const guestLinks = (
    <Fragment>
      <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to="/register">Register</Link>
      </li>
    </Fragment>
  );

  const authenticatedLinks = (
    <Fragment>
      <li>
        <p>Hello {user && user.name}</p>
      </li>
      <li>
        <a href="#!" onClick={onLogout}>
          <em className="fas fa-sign-out-alt"></em>
          <span className="hide-sm">Logout</span>
        </a>
      </li>
    </Fragment>
  );

  return (
    <div className="navbar bg-primary">
      <h1>
        <em className={icon}></em> {title}
      </h1>

      <ul>{isAuthenticated ? authenticatedLinks : guestLinks}</ul>
    </div>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "Contact Keeper",
  icon: "fas fa-id-card-alt",
};

export default Navbar;
