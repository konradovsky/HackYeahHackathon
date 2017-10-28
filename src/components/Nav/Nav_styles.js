import styled from 'styled-components';
import AppBar from 'material-ui/AppBar';
import { colorPalette, navHeight } from '../../utils/constants/styles';

export const StyledAppBar = styled(AppBar)`
  position: fixed !important;
  top: 0;
  left: 0;
  right: 0;
  height: ${navHeight}px;
  background-color: ${colorPalette.primary1Color} !important;
  box-shadow: none !important;

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

export const Filler = styled.div`
  width: 100vw;
  height: ${navHeight}px;
`;
