import styled from 'styled-components';
import FlatButton from 'material-ui/FlatButton';
import { appBarHeight } from '../../../utils/constants/styles';

export default styled(FlatButton)`
  min-height: ${appBarHeight}px;
  color: #fff !important;
`;
