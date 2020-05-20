import React, { Fragment, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import AlertContext from "../../context/alert/alertContext";
import ContactContext from "../../context/contact/contactContext";

const ContactItem = ({ contact }) => {
  const alertContext = useContext(AlertContext);
  const contactContext = useContext(ContactContext);

  const { setAlert } = alertContext;
  const {
    deleteContact,
    setCurrent,
    clearCurrent,
    isSuccess,
    clearSuccess,
    message,
  } = contactContext;
  const { _id, name, email, phone, type } = contact;

  const onDelete = () => {
    if (window.confirm(`Delete ${name}?`)) {
      deleteContact(_id);
      clearCurrent();
    }
  };

  useEffect(() => {
    if (isSuccess) {
      setAlert(message, "success");
      clearSuccess();
    }
    // eslint-disable-next-line
  }, [clearSuccess]);

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
