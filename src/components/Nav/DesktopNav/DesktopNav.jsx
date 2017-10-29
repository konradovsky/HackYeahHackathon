import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getCookie, deleteCookie } from '../../../utils/cookies';
import StyledFlatButton from './DesktopNav_styles';

export default class DesktopNav extends Component {
  render() {
    const type = getCookie('type');

    return (
      <span>
        <Link to={'/'}>
          <StyledFlatButton label={'Home'} />
        </Link>
        <Link to={'/about'}>
          <StyledFlatButton label={'About'} />
        </Link>
        {!type &&
          <Link to={'/login'}>
            <StyledFlatButton label={'Login'} />
          </Link>
        }
        {!type &&
          <Link to={'/register'}>
            <StyledFlatButton label={'Register'} />
          </Link>
        }
        {type === 'organization' &&
          <Link to={'/orgprofile'}>
            <StyledFlatButton label={'Profile'} />
          </Link>
        }
        {type === 'volunteer' &&
          <Link to={'/volunteer'}>
            <StyledFlatButton label={'Profile'} />
          </Link>
        }
        {type &&
          <Link to={'/'}>
            <StyledFlatButton label={'Logout'} onClick={() => { deleteCookie('type'); deleteCookie('token'); }} />
          </Link>
        }
      </span>
    );
  }
}
