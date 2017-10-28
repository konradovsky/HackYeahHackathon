import React, { Component } from 'react';
import { withRouter } from 'react-router';
import MediaQuery from 'react-responsive';
import MobileNav from './MobileNav/MobileNav';
import DesktopNav from './DesktopNav/DesktopNav';
import { StyledAppBar, Filler } from './Nav_styles';

const IconElementRight = () => (
  <span>
    <MediaQuery minWidth={1100}><DesktopNav /></MediaQuery>
    <MediaQuery maxWidth={1099}><MobileNav /></MediaQuery>
  </span>
);

@withRouter
export default class Nav extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.location !== this.props.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return (
      <div>
        <StyledAppBar
          title="Aidly"
          showMenuIconButton={false}
          iconElementRight={<IconElementRight handleSelect={this.handleSelect} />}
        />
        <Filler />
      </div>
    );
  }
}
