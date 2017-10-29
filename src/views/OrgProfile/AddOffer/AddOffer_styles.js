import styled from 'styled-components';
import RaisedButton from 'material-ui/RaisedButton';
import { colorPalette, navHeight } from '../../../utils/constants/styles';

export const Form = styled.form`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 15px 30px 30px;
  border-radius: 2px;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.16) 0 3px 10px, rgba(0, 0, 0, 0.23) 0 3px 10px;

  > div:not(:last-child) {
    width: 320px !important;
  }
`;

export const StyledRaisedButton = styled(RaisedButton)`
  margin: 40px auto 10px;
  width: 150px !important;
`;
