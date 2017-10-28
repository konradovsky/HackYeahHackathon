import React, { Component } from 'react';
import connect from 'react-redux/lib/connect/connect';
import { Container } from '../../utils/styledComponents';
import SearchBar from '../../components/SearchBar/SearchBar';
import { SearchWrapper, Offer, Type, Icon, Name, Capacity, City, Date, Hours, Action, StyledRaisedButton } from './Offers_styles';


class Offers extends Component {
  renderOffer = (offer, index) => {
    const { type, name, capacity, city, when } = offer;
    const date = `${when.getDay() + 1}.${when.getMonth() + 1}.${when.getFullYear()}`;
    const time = `${when.getHours()}:${when.getMinutes()}`;
    return (
      <Offer key={index}>
        <Type src={`img/type_icons/${type}.svg`} />
        <Name>{name}</Name>
        <Capacity><Icon src="img/table_icons/user.svg" />{capacity}</Capacity>
        <City><Icon src="img/table_icons/localization.svg" />{city}</City>
        <Date><Icon src="img/table_icons/calendar.svg" />{date}</Date>
        <Hours><Icon src="img/table_icons/stopwatch.svg" />{time}</Hours>
        <Action>
          <StyledRaisedButton label="Details" primary />
        </Action>
      </Offer>
    );
  }

  render() {
    return [
      <SearchWrapper key="search">
        <SearchBar />
      </SearchWrapper>,
      <Container key="offers">
        {this.props.offers &&
          this.props.offers.map(this.renderOffer)
        }
      </Container>,
    ];
  }
}

function mapStateToProps(state) {
  return {
    offers: state.offers,
  };
}

export default connect(mapStateToProps)(Offers);
