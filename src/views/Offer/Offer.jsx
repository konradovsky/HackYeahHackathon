import React, { Component } from 'react';
import { withRouter } from 'react-router';
import connect from 'react-redux/lib/connect/connect';
import bindActionCreators from 'redux/lib/bindActionCreators';
import { removeDetails } from '../../actions/offers';
import { Wrapper, StyledContainer, Header, Organisation, StyledRaisedButton, Basics, Left, Type, Right, Name, Numbers, Element, Title, Number, IconsWrapper, Iconset, Icon, Description, Details, Content, Detailsimage, ButtonContainer, StyledRaisedButton2 } from './Offer_styles';

@withRouter
class Offer extends Component {
  componentWillUnmount() {
    this.props.removeDetails();
  }

  render() {
    const { name, organization, type, capacity, hours, city, when, description } = this.props.details;
    const date = `${when.getDay() + 1}.${when.getMonth() + 1}.${when.getFullYear()}`;
    const time = `${when.getHours()}:${when.getMinutes()}`;

    return (
      <Wrapper>
        <StyledContainer>
          <Header>
            <Organisation>{organization}</Organisation>
            <StyledRaisedButton label="help as volunteer" secondary />
          </Header>
          <Basics>
            <Left>
              <Type src={`/img/type_icons/${type}.svg`} />
            </Left>
            <Right>
              <Name>{name}</Name>
              <Numbers>
                <Element>
                  <Title>People</Title>
                  <Number>{capacity}</Number>
                </Element>
                <Element>
                  <Title>Hours</Title>
                  <Number>{hours}</Number>
                </Element>
              </Numbers>
            </Right>
          </Basics>
          <IconsWrapper>
            <Iconset>
              <Icon src="/img/table_icons/localization.svg" />
              <Description>{city}</Description>
            </Iconset>
            <Iconset>
              <Icon src="/img/table_icons/calendar.svg" />
              <Description>{date}</Description>
            </Iconset>
            <Iconset>
              <Icon src="/img/table_icons/stopwatch.svg" />
              <Description>{time}</Description>
            </Iconset>
          </IconsWrapper>
          <Details>
            <Content>{description}</Content>
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

function mapStateToProps(state) {
  return {
    details: state.details,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ removeDetails }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Offer);
