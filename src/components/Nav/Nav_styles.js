import styled from 'styled-components';
import AppBar from 'material-ui/AppBar';
import { colorPalette, navHeight } from '../../utils/constants/styles';

export const StyledAppBar = styled(AppBar)`
  box-sizing: border-box;
  position: fixed !important;
  top: 0;
  left: 0;
  right: 0;
  height: ${navHeight}px;
  padding: 0 50px !important;
  background-color: #fff !important;
  box-shadow: none !important;

  > h1 {
    color: ${colorPalette.primary1Color} !important;
  }

  > div:first-child {
    display: flex;
    align-items: center;
    min-height: ${navHeight}px;
  }

  > div:last-child {
    display: flex;
    align-items: center;
    min-height: ${navHeight}px;
    margin-top: 0 !important;
  }
`;

export const Logo = styled.div`
  font-size: 24px;
  color: ${colorPalette.primary1Color} !important;
`;

export const Filler = styled.div`
  width: 100vw;
  height: ${navHeight}px;
`;
