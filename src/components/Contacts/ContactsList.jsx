import React, { Component } from 'react';
import './ContactsList.css';

export const ContactsList = ({ contacts }) => {
  return (
    <div className="Contacts-list-container">
      <h1>Contacts</h1>
      <ul className="Contacts-list">
        <h3>Find your contacts by name</h3>
        <input type="text" />
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
