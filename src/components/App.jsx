import React, { Component } from 'react';
// import { Phonebook } from './Phonebook/Phonebook';
import './Phonebook/Phonebook.css';
import { nanoid } from 'nanoid';
export const App = () => {
  return <Contacts />;
};
console.log();

class Contacts extends Component {
  state = {
    contacts: [],
    name: '',
  };

  addContact = () => {
    this.state.contacts.push();
  };

  render() {
    return (
      <div className="Phonebook-container">
        <h1 className="Phonebook__title">Phonebook</h1>
        <p>Nanoid libr generates unique id's</p>
        <p>It's: {nanoid()}</p>
        <div className="Phonebook__form-container">
          <input
            type="text"
            name="name"
            className="Phonebook__form-input"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <button type="button" className="Phonebook__form-submit-button">
            Add contact
          </button>
        </div>
      </div>
    );
  }
}