import React, { Fragment, useContext } from "react";
import ContactContext from "../../context/contact/contactContext";
import ContactItem from "./ContactItem";
import ContactForm from "./ContactForm";
import ContactFilter from "./ContactFilter";

const Contacts = () => {
  const contactContext = useContext(ContactContext);
  const { contacts, filtered } = contactContext;

  return (
    <Fragment>
      <div className="grid-2">
        <div>
          <ContactForm />
        </div>
        <div>
          <ContactFilter />
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
        </div>
      </div>
    </Fragment>
  );
};

export default Contacts;
