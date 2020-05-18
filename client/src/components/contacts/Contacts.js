import React, { Fragment, useContext } from "react";
import ContactContext from "../../context/contact/contactContext";
import ContactItem from "./ContactItem";

const Contacts = () => {
  const contactContext = useContext(ContactContext);
  const { contacts } = contactContext;

  return (
    <Fragment>
      <div className="grid-2">
        <div>{/* Contact form */}</div>
        <div>
          {contacts.map((contact) => (
            <ContactItem contact={contact} key={contact.id} />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Contacts;
