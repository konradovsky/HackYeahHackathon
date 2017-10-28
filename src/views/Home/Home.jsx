import React, { Component } from 'react';
import Hero from './Hero/Hero';
import { Container } from '../../utils/styledComponents';
import { Header } from './Home_styles';
import { SearchBar }  from './SearchBar/search_bar';

export default class Home extends Component {
  render() {
    return (
<<<<<<< HEAD
      <Container>
        <Header>Home pagee</Header>
        <SearchBar/>
      </Container>
=======
      <Hero />
>>>>>>> 5ea343ce1d2a615656d9e04d906ff8074cccc92c
    );
  }
}
