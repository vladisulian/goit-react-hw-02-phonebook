import React from 'react';
import './ContactsList.css';

export const ContactsList = ({ contacts }) => {
  return (
    <div className="Contacts-list-container">
      <h1>Contacts</h1>

      <ul className="Contacts-list">
        {contacts.map(({ name, id, number }) => {
          return (
            <li key={id}>
              {name}: {number}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
