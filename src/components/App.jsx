import { nanoid } from 'nanoid';
import { Formik } from 'formik';
import * as yup from 'yup';
import React, { Component } from 'react';
import { ContactsList } from './Contacts/ContactsList';
import { FilterBar } from './Form/Filter';
import { Form } from './Form/Form';

export class App extends Component {
  state = {
    contacts: [
      { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
      { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
      { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
      { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleChange = e => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  formAddContact = data => {
    const dataContact = [
      { id: nanoid(), name: data.name, number: data.number },
    ];
    console.log(data);

    this.setState(prevState => {
      for (const contact of prevState.contacts) {
        const { name, number } = contact;

        if (name.includes(data.name) || number.includes(data.number)) {
          alert(
            `Name '${dataContact[0].name}' or number '${dataContact[0].number}' is already in contacts!`
          );
          return;
        }
      }

      return {
        contacts: prevState.contacts.concat(dataContact),
      };
    });
  };

  deleteContact = contactId => {
    // ? Instead creating new array from contacts - we just filter
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const filteredContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter)
    );

    return (
      <div className="Phonebook-container">
        <h1 className="Phonebook__title">Phonebook</h1>

        <Form onSubmit={this.formAddContact} />

        <FilterBar handleChange={this.handleChange} />

        <ContactsList
          contacts={filteredContacts}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
