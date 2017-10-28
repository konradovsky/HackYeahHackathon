import styled from 'styled-components';
import RaisedButton from 'material-ui/RaisedButton';
import { colorPalette, navHeight } from '../../utils/constants/styles';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: calc(100vh - ${navHeight}px);
  background-color: ${colorPalette.primary1Color};
`;

export const Form = styled.form`
  box-sizing: border-box;
  width: 800px;
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
  margin: 40px 0 10px auto;
  width: 150px !important;
`;
