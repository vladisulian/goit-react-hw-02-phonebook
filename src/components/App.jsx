import React, { Component } from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
// import { Phonebook } from './Phonebook/Phonebook';
import './Phonebook/Phonebook.css';
import { nanoid } from 'nanoid';
export const App = () => {
  return <Contacts />;
};

class Contacts extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    const newContact = {
      name: e.target.name.value,
      id: nanoid(),
    };

    this.state.contacts.push(newContact);
    console.log('Contacts now', this.state.contacts);
  };

  render() {
    return (
      <div className="Phonebook-container">
        <h1 className="Phonebook__title">Phonebook</h1>
        <form
          autoComplete="off"
          className="Phonebook__form-container"
          onSubmit={this.handleSubmit}
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
  }
}
