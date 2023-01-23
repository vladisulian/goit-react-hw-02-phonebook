import React, { Component } from 'react';
import './Form.css';
import { Formik } from 'formik';
import * as yup from 'yup';
import { nanoid } from 'nanoid';

export const Form = contacts => {
  const handleSubmit = e => {
    e.preventDefault();
    console.log(contacts);
  };

  return (
    <div className="Phonebook-container">
      <h1 className="Phonebook__title">Phonebook</h1>
      <form
        autoComplete="off"
        className="Phonebook__form-container"
        onSubmit={handleSubmit}
      >
        <label htmlFor="name">
          Name
          <input
            type="text"
            name="name"
            className="Phonebook__form-input"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <button type="submit" className="Phonebook__form-submit-button">
          Add contact
        </button>
      </form>

      <h1>Contacts</h1>
      <ul></ul>
    </div>
  );
};
