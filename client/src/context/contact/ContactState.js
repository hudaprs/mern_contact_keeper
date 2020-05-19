import React, { useReducer } from "react";
import ContactReducer from "./contactReducer";
import ContactContext from "./contactContext";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACT,
  CLEAR_FILTER,
} from "../types";

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: "1",
        name: "Huda Prasetyo",
        email: "huda.prs2002@gmail.com",
        phone: "1111-1111-1111",
        type: "personal",
      },
      {
        id: "2",
        name: "Raihan",
        email: "raihan@gmail.com",
        phone: "2222-2222-2222",
        type: "professional",
      },
      {
        id: "3",
        name: "Haura",
        email: "haura@gmail.com",
        phone: "3333-3333-3333",
        type: "personal",
      },
    ],
    current: null,
  };

  const [state, dispatch] = useReducer(ContactReducer, initialState);

  // Add Contact
  const addContact = (contact) => {
    contact.id = state.contacts.length + 1;
    dispatch({ type: ADD_CONTACT, payload: contact });
  };

  const deleteContact = (id) => {
    dispatch({ type: DELETE_CONTACT, payload: id });
  };

  const setCurrent = (contact) => {
    dispatch({ type: SET_CURRENT, payload: contact });
  };

  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  const { contacts, current } = state;
  return (
    <ContactContext.Provider
      value={{
        contacts,
        current,
        addContact,
        deleteContact,
        setCurrent,
        clearCurrent,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
