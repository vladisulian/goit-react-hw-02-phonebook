import React, { Component } from 'react';
import './Form.css';
import { Formik } from 'formik';
import * as yup from 'yup';
import { nanoid } from 'nanoid';

export const Form = () => {
  // handleSubmit = e => {
  //   e.preventDefault();
  //   this.state.contacts.push(e.target.name.value);
  //   console.log(this.state.contacts);
  // };

  return (
    <form autoComplete="off" className="Phonebook__form-container">
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
  );
};
