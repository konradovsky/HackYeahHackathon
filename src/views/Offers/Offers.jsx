import React, { Component } from 'react';
import connect from 'react-redux/lib/connect/connect';
import bindActionCreators from 'redux/lib/bindActionCreators';
import { Container } from '../../utils/styledComponents';
import SearchBar from '../../components/SearchBar/SearchBar';
import { getDetails } from '../../actions/offers';
import { SearchWrapper, Offer, Type, Icon, Name, Capacity, City, Date, Hours, Action, StyledRaisedButton } from './Offers_styles';


class Offers extends Component {
  getDetails = (id) => {
    this.props.getDetails(id);
    this.props.history.push(`/offers/${id}`);
  }

  renderOffer = (offer, index) => {
    const { type, name, capacity, city, when, id } = offer;
    const date = `${when.getDay() + 1}.${when.getMonth() + 1}.${when.getFullYear()}`;
    const time = `${when.getHours()}:${when.getMinutes()}`;
    return (
      <Offer key={index}>
        <Type src={`/img/type_icons/${type}.svg`} />
        <Name>{name}</Name>
        <Capacity><Icon src="/img/table_icons/user.svg" />{capacity}</Capacity>
        <City><Icon src="/img/table_icons/localization.svg" />{city}</City>
        <Date><Icon src="/img/table_icons/calendar.svg" />{date}</Date>
        <Hours><Icon src="/img/table_icons/stopwatch.svg" />{time}</Hours>
        <Action>
          <StyledRaisedButton label="Details" primary onClick={() => { this.getDetails(id); }} />
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
        {this.props.offers
          ? this.props.offers.map(this.renderOffer)
          : 'Brak wyników dla wyszukiwanej frazy'
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getDetails }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Offers);
