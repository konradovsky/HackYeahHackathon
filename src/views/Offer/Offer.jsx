import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Wrapper, StyledContainer, Header, Organisation, StyledRaisedButton, Basics, Left, Type, Right, Name, Numbers, Element, Title, Number, IconsWrapper, Iconset, Icon, Description, Details, Content, Detailsimage, ButtonContainer, StyledRaisedButton2 } from './Offer_styles';

@withRouter
export default class Offer extends Component {
  render() {
    return (
      <Wrapper>
        <StyledContainer>
          <Header>
            <Organisation>Unicef</Organisation>
            <StyledRaisedButton label="help as volunteer" secondary />
          </Header>
          <Basics>
            <Left>
              <Type src={`/img/type_icons/couple.svg`} />
            </Left>
            <Right>
              <Name>American veterans foundation</Name>
              <Numbers>
                <Element>
                  <Title>People</Title>
                  <Number>7</Number>
                </Element>
                <Element>
                  <Title>Hours</Title>
                  <Number>4</Number>
                </Element>
              </Numbers>
            </Right>
          </Basics>
          <IconsWrapper>
            <Iconset>
              <Icon src="/img/table_icons/localization.svg" />
              <Description>Wrocław</Description>
            </Iconset>
            <Iconset>
              <Icon src="/img/table_icons/calendar.svg" />
              <Description>21.07.2018</Description>
            </Iconset>
            <Iconset>
              <Icon src="/img/table_icons/stopwatch.svg" />
              <Description>8:00</Description>
            </Iconset>
          </IconsWrapper>
          <Details>
            <Content>
              Jesteśmy jednym z najmłodszych kół działających na Uniwersytecie Ekonomicznym we Wrocławiu.
              Powstaliśmy, aby połączyć pasje i umiejętności
              studentów związane z tworzeniem stron i aplikacji internetowych, a następnie wykorzystywać je do
              realizacji wartościowych idei. Łącząc siły pragniemy stworzyć miejsce, w którym każda osoba
              zainteresowana tematyką koła będzie mogła rozwijać swoje umiejętności poprzez praktyczne projekty,
              szkolenia oraz wymianę wiedzy z pozostałymi
              członkami.
            </Content>
            <Detailsimage src="/img/archive.svg" />
          </Details>
          <ButtonContainer>
            <StyledRaisedButton2 label="help as volunteer" secondary />
          </ButtonContainer>
        </StyledContainer>
      </Wrapper>
    );
  }
}
