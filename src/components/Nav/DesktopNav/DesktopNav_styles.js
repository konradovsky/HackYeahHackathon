import styled from 'styled-components';
import FlatButton from 'material-ui/FlatButton';
import { colorPalette, navHeight } from '../../../utils/constants/styles';

export default styled(FlatButton)`
  min-height: ${navHeight}px;
  color: ${colorPalette.primary1Color} !important;
`;
