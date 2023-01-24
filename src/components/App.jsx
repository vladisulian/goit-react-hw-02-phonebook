import { nanoid } from 'nanoid';
import React, { Component } from 'react';
import { ContactsList } from './Contacts/ContactsList';
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
    name: '',
    number: '',
  };

  formSubmitData = (data, e) => {
    e.preventDefault();
    console.log(data);
  };

  render() {
    return (
      <div className="Phonebook-container">
        <h1 className="Phonebook__title">Phonebook</h1>

        <Form onSubmit={this.formSubmitData} />

        <ContactsList contacts={this.state.contacts} />
      </div>
    );
  }
}
