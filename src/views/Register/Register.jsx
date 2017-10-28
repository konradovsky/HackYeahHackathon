import React, { Component } from 'react';
import valuesConfig from './valuesConfig';
import { initializeForm } from '../../utils/formHelpers';
import { renderTextField } from '../../utils/renderHelpers';
import { Container, Form, Text, StyledRaisedButton } from './Register_styles';

export default class Register extends Component {
  componentWillMount() {
    initializeForm(this, valuesConfig);
  }

  render() {
    return (
      <Container>
        <Text>Rejestracja</Text>
        <Form>
          {renderTextField(this, 'First Name', 'firstname')}
          {renderTextField(this, 'Last Name', 'lastname')}
          {renderTextField(this, 'Address', 'address')}
          {renderTextField(this, 'ZIP Code', 'zipcode')}
          {renderTextField(this, 'City', 'city')}
          {renderTextField(this, 'PESEL', 'pesel')}
          {renderTextField(this, 'Phone', 'phone')}
          {renderTextField(this, 'E-mail', 'email')}
          {renderTextField(this, 'Password', 'password', { type: 'password' })}
          {renderTextField(this, 'Repeat password', 'password2', { type: 'password' })}
          <StyledRaisedButton label="Submit" primary onClick={this.handleSubmit} />
        </Form>
      </Container>
    );
  }
}
