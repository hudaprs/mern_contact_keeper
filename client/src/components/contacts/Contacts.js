import React, { Fragment, useContext, useEffect } from "react";
import ContactContext from "../../context/contact/contactContext";
import ContactItem from "./ContactItem";

const Contacts = () => {
  const contactContext = useContext(ContactContext);
  const { contacts, filtered, getContacts, loading } = contactContext;

  useEffect(() => {
    getContacts();

    // eslint-disable-next-line
  }, []);

  if (loading) {
    return (
      <div
        className="fa-3x text-center"
        style={{ margin: "auto", display: "block" }}
      >
        <em className="fas fa-circle-notch fa-spin"></em>
      </div>
    );
  }

  return (
    <Fragment>
      {filtered !== null ? (
        filtered.map((contact) => (
          <ContactItem contact={contact} key={contact._id} />
        ))
      ) : contacts.length === 0 ? (
        <Fragment>
          <p className="text-left">No Contact Found</p>{" "}
        </Fragment>
      ) : (
        contacts.map((contact) => (
          <ContactItem contact={contact} key={contact._id} />
        ))
      )}
    </Fragment>
  );
};

export default Contacts;
