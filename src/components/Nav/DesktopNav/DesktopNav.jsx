import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import navigation from '../../../utils/content/navigation';
import StyledFlatButton from './DesktopNav_styles';

export default class DesktopNav extends Component {
  render() {
    return (
      <span>
        {navigation.map(item => (
          <Link key={item.path} to={item.path}>
            <StyledFlatButton label={item.name} />
          </Link>
        ))}
      </span>
    );
  }
}
