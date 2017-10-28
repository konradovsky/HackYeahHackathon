import React, { Component } from 'react';
import { withRouter } from 'react-router';
import MenuItem from 'material-ui/MenuItem';
import navigation from '../../../utils/content/navigation';
import { StyledIconMenu, StyledIconButton } from './MobileNav_styles';

@withRouter
export default class MobileNav extends Component {
  handleSelect = (e, child) => {
    this.props.history.push(child.props.value);
  }

  render() {
    const origin = { horizontal: 'right', vertical: 'top' };
    const iconButtonElement = (
      <StyledIconButton>
        <i className="fa fa-bars" aria-hidden="true" />
      </StyledIconButton>
    );

    return (
      <StyledIconMenu
        iconButtonElement={iconButtonElement}
        anchorOrigin={origin}
        targetOrigin={origin}
        onItemTouchTap={this.handleSelect}
      >
        {navigation.map(item => <MenuItem key={item.path} value={item.path} primaryText={item.name} />)}
      </StyledIconMenu>
    );
  }
}
