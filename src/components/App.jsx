import React, { Component } from 'react';
import { ContactsList } from './Contacts/ContactsList';
import { Form } from './Form/Form';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    number: '',
  };

  formSubmitData = data => {
    console.log(data);
  };

  render() {
    return (
      <div className="Phonebook-container">
        <h1 className="Phonebook__title">Phonebook</h1>

        <Form contacts={this.state.contacts} onSubmit={this.formSubmitData} />

        <ContactsList contacts={this.state.contacts} />
      </div>
    );
  }
}
