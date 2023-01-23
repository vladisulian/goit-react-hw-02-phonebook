import React, { Component } from 'react';
import { Form } from './Form/Form';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  render() {
    return (
      <>
        <Form contacts={this.state.contacts} />
      </>
    );
  }
}
