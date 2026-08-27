import React from "react";

const ContactItem = ({ contact, dispatch, setEditingContact }) => {
  const { id, name, email, phone, favorite } = contact;
  return (
    <div>
      <li style={{ marginBottom: "10px" }}>
        <strong>{name}</strong> {favorite && "★"}
        <p>email:{email}</p>
        <p>phone:{phone}</p>
        <button
          onClick={() => dispatch({ type: "toggleFavorite", payload: id })}
        >
          {favorite ? "unfavorite" : "Favorite"}
        </button>
        <button onClick={() => setEditingContact(contact)}>Edit</button>
        <button onClick={() => dispatch({ type: "delete", payload: id })}>
          Delete
        </button>
      </li>
    </div>
  );
};
export default ContactItem;
