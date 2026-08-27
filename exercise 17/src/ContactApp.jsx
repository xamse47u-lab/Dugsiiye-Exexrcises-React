import React, { useReducer, useState } from "react";
import { initialState, reducer } from "./reducer";
import ContactForm from "./ContactForm";
import { ContactList } from "./ContactList";

const ContactApp = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [editingContact, setEditingContact] = useState(null);
  return (
    <div>
      <h2>Conatct Management App</h2>
      <ContactForm
        dispatch={dispatch}
        editingContact={editingContact}
        setEditingContact={setEditingContact}
      />
      <ContactList
        contacts={state}
        dispatch={dispatch}
        setEditingContact={setEditingContact}
      />
    </div>
  );
};

export default ContactApp;
