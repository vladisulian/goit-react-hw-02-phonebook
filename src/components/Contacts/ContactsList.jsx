import React, { Component } from 'react';
import './ContactsList.css';

export const ContactsList = ({ contacts }) => {
  return (
    <>
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
    </>
  );
};
