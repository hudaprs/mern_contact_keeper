import React, { Fragment, useContext } from "react";
import PropTypes from "prop-types";
import ContactContext from "../../context/contact/contactContext";

const ContactItem = ({ contact }) => {
  const contactContext = useContext(ContactContext);
  const { deleteContact, setCurrent, clearCurrent } = contactContext;

  const { id, name, email, phone, type } = contact;

  const onDelete = () => {
    if (window.confirm(`Delete ${name}?`)) {
      deleteContact(id);
      clearCurrent();
    }
  };

  return (
    <div className="card bg-light">
      <h3 className="text-primary text-left">
        {name}{" "}
        <em
          style={{ float: "right" }}
          className={`badge badge-${
            type === "professional" ? "success" : "primary"
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
        <button
          type="button"
          className="btn btn-dark btn-sm"
          onClick={() => setCurrent(contact)}
        >
          Edit
        </button>
        <button
          type="button"
          className="btn btn-danger btn-sm"
          onClick={onDelete}
        >
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
