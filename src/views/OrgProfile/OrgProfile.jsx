import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Tab } from 'material-ui/Tabs';
import MapsPersonPin from 'material-ui/svg-icons/maps/person-pin';
import OffersList from './OffersList/OffersList';
import AddOffer from './AddOffer/AddOffer';
import { Wrapper, StyledContainer, StyledTabs, Content } from './OrgProfile_styles';

@withRouter
export default class OrgProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabIndex: 0,
    };
  }

  changeTab = (e) => {
    this.setState({ tabIndex: e.props.index });
  }

  renderContent = (index) => {
    let MainComponent;

    switch (index) {
      case 0:
        MainComponent = OffersList;
        break;
      case 1:
        MainComponent = AddOffer;
        break;
      case 2:
        MainComponent = OffersList;
        break;
    }

    return <MainComponent />;
  }

  render() {
    return (
      <Wrapper>
        <StyledContainer>
          <StyledTabs>
            <Tab
              icon={<MapsPersonPin />}
              label="LIST OF OFFERS"
              onActive={this.changeTab}
            />
            <Tab
              icon={<MapsPersonPin />}
              label="ADD OFFER"
              onActive={this.changeTab}
            />
            <Tab
              icon={<MapsPersonPin />}
              label="SETINGS"
              onActive={this.changeTab}
            />
          </StyledTabs>
          <Content>
            {this.renderContent(this.state.tabIndex)}
          </Content>
        </StyledContainer>
      </Wrapper>
    );
  }
}
