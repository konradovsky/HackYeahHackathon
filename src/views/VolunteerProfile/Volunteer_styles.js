import styled from 'styled-components';
import { Container } from '../../utils/styledComponents';
import { colorPalette } from '../../utils/constants/styles';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: ${colorPalette.primary1Color};
`;

export const StyledContainer = Container.extend`
  margin-top: 60px;
  box-shadow: rgba(0, 0, 0, 0.16) 0 3px 10px, rgba(0, 0, 0, 0.23) 0 3px 10px;
`;
export const Header = styled.div`
  width: 100%;
  height: 185px;
  background-color: red;
  position: relative;
`;
export const Profile = styled.div`
  height: 100%;
  width: 30%;
  float: left;
  text-align: center;
  background-color: ${colorPalette.primary2Color};
  img {
    margin-top: 60px;
    margin-bottom: 10px;
    width: 50px;
    height: 50px;
  }
  p {
    color: white;
    font-size: 20px;
  }
`;

export const Name = styled.div`
  width: 70%;
  height: 100%;
  float: left;
  background-color: ${colorPalette.primary2Color};
  color: white;
  text-align: center;
  h1 {
    font-size: 40px;
    padding: 5px;
    font-weight: 200;
    margin-top: 55px;
    margin-bottom: 10px;
  }
`;
export const GameSection = styled.div`
  width: 100%;
  height: 265px;
  background-color: white;
  color: ${colorPalette.primary2Color};
  position: relative;
`;
export const UpdateSection = styled.div`
  width: 100%;
  height: 370px;
  background-color: ${colorPalette.primary1Color};
  color: white;
`;
