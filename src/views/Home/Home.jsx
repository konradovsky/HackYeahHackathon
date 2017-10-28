import React, { Component } from 'react';
import Hero from './Hero/Hero';
import { Container } from '../../utils/styledComponents';
import { Header } from './Home_styles';
import { SearchBar }  from './SearchBar/search_bar';

export default class Home extends Component {
  render() {
    return (
      <Hero />
    );
  }
}
