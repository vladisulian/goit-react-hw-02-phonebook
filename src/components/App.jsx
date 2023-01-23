import React, { Component } from 'react';
import { ContactsList } from './Contacts/ContactsList';
import { Form } from './Form/Form';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  formSubmitData = data => {
    console.log(data);
  };

  render() {
    return (
      <div className="Phonebook-container">
        <h1 className="Phonebook__title">Phonebook</h1>

        <Form contacts={this.state.contacts} onSubmit={this.formSubmitData} />

        <ContactsList />
      </div>
    );
  }
}
