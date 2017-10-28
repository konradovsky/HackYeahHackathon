import React, { Component } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import { Container, Middle, Text } from './Hero_styles';

export default class Hero extends Component {
  render() {
    return (
      <Container>
        <Middle>
          <Text>Find opportunities to <span>help</span></Text>
          <SearchBar />
        </Middle>
      </Container>
    );
  }
}
