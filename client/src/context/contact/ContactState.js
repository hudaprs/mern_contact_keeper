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
  SET_LOADING,
  CONTACT_ERROR,
  CLEAR_SUCCESS,
  GET_CONTACT,
} from "../types";
import axios from "axios";

const ContactState = (props) => {
  const initialState = {
    contacts: [],
    current: null,
    filtered: null,
    loading: false,
    isSuccess: false,
    message: "",
  };

  const [state, dispatch] = useReducer(ContactReducer, initialState);

  // Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  // Clear Success
  const clearSuccess = () => dispatch({ type: CLEAR_SUCCESS });

  // Get Contacts
  const getContacts = async () => {
    setLoading();
    try {
      const contacts = await axios.get("/api/contacts");

      dispatch({ type: GET_CONTACT, payload: contacts.data.results });
    } catch (err) {
      dispatch({ type: CONTACT_ERROR });
    }
  };

  // Add Contact
  const addContact = async (contact) => {
    setLoading();

    try {
      const newContact = await axios.post("/api/contacts", contact);

      dispatch({ type: ADD_CONTACT, payload: newContact.data });
    } catch (err) {
      dispatch({ type: CONTACT_ERROR, payload: err.response.data });
    }
  };

  // Delete contact
  const deleteContact = async (id) => {
    setLoading();
    try {
      const delContact = await axios.delete(`/api/contacts/${id}`);

      dispatch({ type: DELETE_CONTACT, payload: delContact.data });
    } catch (err) {
      dispatch({ type: CONTACT_ERROR, payload: err.response.data });
    }
  };

  // Set current
  const setCurrent = (contact) => {
    dispatch({ type: SET_CURRENT, payload: contact });
  };

  // Clear current
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  // Update contact
  const updateContact = async (contact) => {
    setLoading();

    try {
      const upContact = await axios.put(
        `/api/contacts/${contact._id}`,
        contact
      );

      dispatch({ type: UPDATE_CONTACT, payload: upContact.data });
    } catch (err) {
      dispatch({ type: CONTACT_ERROR, payload: err.response.data });
    }
  };

  // Filter contacts
  const filterContacts = (text) => {
    dispatch({ type: FILTER_CONTACT, payload: text });
  };

  // Clear filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  const { contacts, current, filtered, isSuccess, loading, message } = state;
  return (
    <ContactContext.Provider
      value={{
        contacts,
        current,
        filtered,
        loading,
        isSuccess,
        message,
        addContact,
        deleteContact,
        setCurrent,
        clearCurrent,
        updateContact,
        filterContacts,
        clearFilter,
        clearSuccess,
        getContacts,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
