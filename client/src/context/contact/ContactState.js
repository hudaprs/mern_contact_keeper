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
        type: "personal",
      },
      {
        id: "2",
        name: "Raihan",
        email: "raihan@gmail.com",
        type: "professional",
      },
      {
        id: "3",
        name: "Haura",
        email: "haura@gmail.com",
        type: "personal",
      },
    ],
  };

  const [state, dispatch] = useReducer(ContactReducer, initialState);

  const { contacts } = state;
  return (
    <ContactContext.Provider value={{ contacts }}>
      {props.chilldren}
    </ContactContext.Provider>
  );
};

export default ContactState;
