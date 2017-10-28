import React, { Component } from 'react';
import { Container } from '../../utils/styledComponents';
import { Header } from './Home_styles';
import { SearchBar }  from './SearchBar/search_bar';

export default class Home extends Component {
  render() {
    return (
      <Container>
        <Header>Home pagee</Header>
        <SearchBar/>
      </Container>
    );
  }
}
