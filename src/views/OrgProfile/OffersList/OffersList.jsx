import React, { Component } from 'react';
import connect from 'react-redux/lib/connect/connect';
import bindActionCreators from 'redux/lib/bindActionCreators';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import { Container, Offer, Type, Icon, Name, Capacity, City, Date, Hours, Action } from './OffersList_styles';


class OffersList extends Component {
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
          <IconMenu
            iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
            anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
            targetOrigin={{ horizontal: 'right', vertical: 'top' }}
          >
            <MenuItem primaryText="Check volunteers" />
            <MenuItem primaryText="Edit offer" />
            <MenuItem primaryText="Remove offer" />
          </IconMenu>
        </Action>
      </Offer>
    );
  }

  render() {
    return (
      <Container key="offers">
        {this.props.offers
          ? this.props.offers.map(this.renderOffer)
          : 'Brak wyników dla wyszukiwanej frazy'
        }
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    offers: state.offers,
  };
}

export default connect(mapStateToProps)(OffersList);
