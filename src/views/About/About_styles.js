import styled from 'styled-components';
import { colorPalette , navHeight} from '../../utils/constants/styles';

export const Header = styled.h1`
  margin-top: 30px;
  font-size: 30px;
  color: ${colorPalette.textColor};
`;

export const Holder = styled.div`
  background-color: ${colorPalette.primary1Color};
  height: calc(100vh - ${navHeight}px);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AboutSec = styled.div`
  background-color: white;
  width: 100%;
  border-radius: 2px;
  box-shadow: rgba(0, 0, 0, 0.19) 0 10px 30px, rgba(0, 0, 0, 0.23) 0 6px 10px;
  height: 500px;
`;

export const LeftHolder = styled.div`
  background-color: ${colorPalette.primary2Color};
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  float: left;
`;

export const RightHolder = styled.div`
  width: 70%;
  float: left;
`;

export const HappyImage = styled.div`
  background-image: url('./img/Happy.svg');
  background-repeat: no-repeat;
  height: 60%;
  width: 90%;
  text-align: center;
`;
export const MainText = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AboutText = styled.div`
  background-color: white;
  width: 80%;
  height: 100%;
  p {
    color: ${colorPalette.textColor};
    font-size: 18px;
  }
  p:first-child {
    font-weight: 400;
  }
`;
export const AboutHeader = styled.div`
  color: ${colorPalette.primary1Color};
  font-size: 40px;
  text-align: center;
  padding: 5px;
  font-weight: 300;
  margin-top: 30px;
  margin-bottom: 30px;
`;


