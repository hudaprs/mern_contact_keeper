import React, { Fragment, useContext } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import ContactContext from "../../context/contact/contactContext";
import ContactItem from "./ContactItem";

const Contacts = () => {
  const contactContext = useContext(ContactContext);
  const { contacts, filtered } = contactContext;

  return (
    <Fragment>
      {filtered !== null ? (
        filtered.map((contact) => (
          <ContactItem contact={contact} key={contact.id} />
        ))
      ) : contacts.length === 0 ? (
        <Fragment>
          <h1 className="text-center" style={{ color: "#dc3545" }}>
            No Contact Found
          </h1>{" "}
        </Fragment>
      ) : (
        contacts.map((contact) => (
          <ContactItem contact={contact} key={contact.id} />
        ))
      )}
    </Fragment>
  );
};

export default Contacts;
