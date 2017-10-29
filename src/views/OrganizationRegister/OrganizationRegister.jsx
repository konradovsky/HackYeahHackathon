import React, { Component } from 'react';
import axios from 'axios';
import valuesConfig from './valuesConfig';
import { initializeForm } from '../../utils/formHelpers';
import { renderTextField } from '../../utils/renderHelpers';
import { Container, Form, Text, StyledRaisedButton } from './OrganizationRegister_styles';

export default class OrganizationRegister extends Component {
  componentWillMount() {
    initializeForm(this, valuesConfig);
  }

  submit = (values) => {
    console.log(values);
    const url = `${__ROOT_URL__}api/userOrganisation/register`;
    axios.post(url, values).then((data) => {
      console.log(data);
    }, (res) => { console.log(res); });
  }

  render() {
    return (
      <Container>
        <Text>Register organization</Text>
        <Form>
          {renderTextField(this, 'Organization Name', 'name')}
          {renderTextField(this, 'Name and surname of contact person', 'personname')}
          {renderTextField(this, 'Address', 'address')}
          {renderTextField(this, 'ZIP Code', 'zipcode')}
          {renderTextField(this, 'City', 'city')}
          {renderTextField(this, 'NIP', 'nip')}
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
