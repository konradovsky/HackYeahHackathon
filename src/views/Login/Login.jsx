import React, { Component } from 'react';
import valuesConfig from './valuesConfig';
import { initializeForm } from '../../utils/formHelpers';
import { renderTextField } from '../../utils/renderHelpers';
import { Container, Text, Form, StyledRaisedButton } from './Login_styles';

export default class Register extends Component {
  componentWillMount() {
    initializeForm(this, valuesConfig);
  }

  render() {
    return (
      <Container>
        <Text>Login</Text>
        <Form>
          {renderTextField(this, 'E-mail', 'email', { fullWidth: true })}
          {renderTextField(this, 'Password', 'password', { fullWidth: true })}
          <StyledRaisedButton label="Submit" primary onClick={this.handleSubmit} />
        </Form>
      </Container>
    );
  }
}
