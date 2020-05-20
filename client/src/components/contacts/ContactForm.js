import React, { useState, useContext, useEffect } from "react";
import AlertContext from "../../context/alert/alertContext";
import ContactContext from "../../context/contact/contactContext";

const ContactForm = () => {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    type: "personal",
  });

  const alertContext = useContext(AlertContext);
  const contactContext = useContext(ContactContext);

  const { setAlert } = alertContext;
  const {
    addContact,
    current,
    clearCurrent,
    updateContact,
    loading,
    isSuccess,
    clearSuccess,
    message,
  } = contactContext;

  const { name, email, phone, type } = contact;

  const onChange = (e) =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const clearAll = () => {
    setContact({
      name: "",
      email: "",
      phone: "",
      type: "personal",
    });
    clearCurrent();
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (name === "") {
      setAlert("Name is required", "danger");
    } else {
      if (current !== null) {
        updateContact(contact);
      } else {
        addContact(contact);
      }
    }
  };

  useEffect(() => {
    if (current !== null) {
      setContact(current);
    }

    if (isSuccess) {
      setAlert(message, "success");
      setContact({
        name: "",
        email: "",
        phone: "",
        type: "personal",
      });
      clearSuccess();
    }
    // eslint-disable-next-line
  }, [contactContext, current, clearSuccess]);

  return (
    <form onSubmit={onSubmit}>
      <h2 className="text-primary">
        {current ? "Edit Contact" : "Add Contact"}
      </h2>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={name}
        onChange={onChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={email}
        onChange={onChange}
      />
      <input
        type="text"
        name="phone"
        placeholder="Phone"
        value={phone}
        onChange={onChange}
      />
      <h5>Contact Type</h5>
      <input
        type="radio"
        name="type"
        value="personal"
        checked={type === "personal"}
        onChange={onChange}
      />{" "}
      Personal{" "}
      <input
        type="radio"
        name="type"
        value="professional"
        checked={type === "professional"}
        onChange={onChange}
      />
      Professional
      <div>
        <button
          type="submit"
          className="btn btn-primary btn-block"
          disabled={loading}
        >
          {loading && <em className="fas fa-circle-notch fa-spin"></em>}{" "}
          {current ? "Update Contact" : "Add Contact"}
        </button>
      </div>
      {current && (
        <div>
          <button
            type="button"
            className="btn btn-light btn-block my-1"
            onClick={clearAll}
          >
            Clear
          </button>
        </div>
      )}
    </form>
  );
};

export default ContactForm;
