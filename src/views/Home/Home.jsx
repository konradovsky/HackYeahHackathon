import React, { Component } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import { Container, Middle, Text } from './Home_styles';

export default class Home extends Component {
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
