import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Wrapper, StyledContainer, Left, Right, Image, Text } from './Register_styles';

@withRouter
export default class Register extends Component {
  render() {
    return (
      <Wrapper>
        <StyledContainer>
          <Left onClick={() => { this.props.history.push('/organizationregister'); }}>
            <Image src="img/register/organization.svg" />
            <Text>Organization</Text>
          </Left>
          <Right onClick={() => { this.props.history.push('/personregister'); }}>
            <Image src="img/register/volunteer.svg" />
            <Text>Volunteer</Text>
          </Right>
        </StyledContainer>
      </Wrapper>
    );
  }
}
