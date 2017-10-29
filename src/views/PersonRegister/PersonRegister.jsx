import React, { Component } from 'react';
import axios from 'axios';
import valuesConfig from './valuesConfig';
import { initializeForm } from '../../utils/formHelpers';
import { renderTextField } from '../../utils/renderHelpers';
import { Container, Form, Text, StyledRaisedButton } from './PersonRegister_styles';

export default class PersonRegister extends Component {
  componentWillMount() {
    initializeForm(this, valuesConfig);
  }

  submit = (values) => {
    console.log(values);
    const url = `${__ROOT_URL__}api/userVolunteer/register`;
    axios.post(url, values).then((data) => {
      console.log(data);
    }, (res) => { console.log(res); });
  }

  render() {
    return (
      <Container>
        <Text>Register as a volunteer</Text>
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
