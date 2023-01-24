import React, { Component } from 'react';
import './Form.css';
import { Formik } from 'formik';
import * as yup from 'yup';
import { nanoid } from 'nanoid';
import { FilterBar } from './Filter';

export class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  render() {
    return (
      <>
        <form autoComplete="off" className="Phonebook__form-container">
          <label htmlFor="name">
            Name <br />
            <input
              type="text"
              name="name"
              className="Phonebook__form-input"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="number">
            Number <br />
            <input
              type="tel"
              name="number"
              className="Phonebook__form-input"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={this.handleChange}
            />
          </label>
          <button type="submit" className="Phonebook__form-submit-button">
            Add contact
          </button>
        </form>

        <FilterBar handleChange={this.handleChange} />
      </>
    );
  }
}
