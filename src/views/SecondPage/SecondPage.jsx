import React from 'react';
import { Container } from '../../utils/styledComponents';
import { Header, Image } from './SecondPage_styles';

export default () => (
  <Container>
    <Header key="header">This is a second page - with an image</Header>
    <Image key="image" src="/img/image.jpg" alt="Building" />
  </Container>
);
