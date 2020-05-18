import React, { Fragment } from "react";
import PropTypes from "prop-types";

const ContactItem = ({ contact }) => {
  const { id, name, email, phone, type } = contact;

  return (
    <div className="card bg-light">
      <h3 className="text-primary text-left">
        {name}
        <em
          style={{ float: "right" }}
          className={`badge badge-${
            type == "professional" ? "danger" : "primary"
          }`}
        >
          {`${type.charAt(0).toUpperCase()}${type.slice(1)}`}
        </em>
      </h3>
      <ul className="list">
        <li>
          {email && (
            <Fragment>
              <em className="fas fa-envelope-open"></em> {email}
            </Fragment>
          )}
        </li>
        <li>
          {phone && (
            <Fragment>
              <em className="fas fa-phone"></em> {phone}
            </Fragment>
          )}
        </li>
      </ul>
      <p>
        <button type="button" className="btn btn-dark btn-sm">
          Edit
        </button>
        <button type="button" className="btn btn-danger btn-sm">
          Delete
        </button>
      </p>
    </div>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default ContactItem;
