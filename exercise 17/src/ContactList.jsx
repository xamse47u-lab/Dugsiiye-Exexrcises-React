import React from "react";
import ContactItem from "./ContactItem";

export const ContactList = ({ contacts, dispatch, setEditingContact }) => {
  return (
    <div>
      <h3>Contacts</h3>
      {contacts.length > 0 ? (
        <ul>
          {contacts.map((contact) => (
            <ContactItem
              key={contact.id}
              contact={contact}
              dispatch={dispatch}
              setEditingContact={setEditingContact}
            />
          ))}
        </ul>
      ) : (
        <p>No contacts avaliable</p>
      )}
    </div>
  );
};
