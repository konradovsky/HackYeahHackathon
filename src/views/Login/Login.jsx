import React, { Component } from 'react';
import axios from 'axios';
import { setCookie } from '../../utils/cookies';
import valuesConfig from './valuesConfig';
import { initializeForm } from '../../utils/formHelpers';
import { renderTextField } from '../../utils/renderHelpers';
import { Container, Text, Form, StyledRaisedButton } from './Login_styles';

export default class Register extends Component {
  componentWillMount() {
    initializeForm(this, valuesConfig);
  }

  submit = (values) => {
    console.log(values);
    const url = `${__ROOT_URL__}api/userVolunteer/login`;
    axios.post(url, values).then((data) => {
      if (data.data.token) {
        setCookie('token', data.data.token);
        setCookie('type', data.data.user.type);
        this.props.history.push('/orgprofile');
      }
    });
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
