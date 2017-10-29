import styled from 'styled-components';
import RaisedButton from 'material-ui/RaisedButton';
import { Container } from '../../utils/styledComponents';
import { colorPalette } from '../../utils/constants/styles';

export const Wrapper = styled.div`
  overflow-y: auto;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: ${colorPalette.primary1Color};
`;

export const StyledContainer = Container.extend`
  display: flex;
  flex-direction: column;
  margin-top: 80px;
  box-shadow: rgba(0, 0, 0, 0.16) 0 3px 10px, rgba(0, 0, 0, 0.23) 0 3px 10px;
  background-color: #fff;
`;

export const Header = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  min-height: 100px;
  padding: 30px;
  background-color: ${colorPalette.primary2Color};
`;

export const Organisation = styled.div`
  font-size: 36px;
  font-weight: 300;
  color: #fff;
`;

export const StyledRaisedButton = styled(RaisedButton)`
  > button {
    display: flex;
    align-items: center;
    justify-content: center;
    max-height: 43px;

    > div > div {
      display: flex;
      align-items: center;
      justify-content: center;
      max-height: 43px;

      span {
        font-weight: 400 !important;
      }
    }
  }
`;

export const Basics = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  min-height: 400px !important;
  padding: 60px;
  background-color: ${colorPalette.primary1Color};
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45%;
`;

export const Type = styled.div`
  width: 90%;
  height: 90%;
  background: url('${props => props.src}') no-repeat center/contain;
`;

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 45%;
`;

export const Name = styled.div`
  margin-bottom: 45px;
  font-size: 30px;
  text-align: center;
  font-weight: 400;
  color: #fff;
`;

export const Numbers = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70%;
`;

export const Element = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.div`
  margin-bottom: 15px;
  font-size: 24px;
  font-weight: 300;
  text-align: center;
  color: #fff;
`;

export const Number = styled.div`
  font-size: 92px;
  text-align: center;
  color: #fff;
`;

export const IconsWrapper = styled.div`
  display: flex;
  font-weight: wrap;
  justify-content: center;
  align-items: center;
  padding: 80px 50px;
  background-color: ${colorPalette.primary3Color};
`;

export const Iconset = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 200px;
`;

export const Icon = styled.div`
  width: 35px;
  height: 35px;
  margin-bottom: 15px;
  background: url('${props => props.src}') no-repeat center/contain;
`;

export const Description = styled.div`
  font-size: 18px;
  text-align: center;
  color: ${colorPalette.textColor};
`;

export const Details = styled.div`
  min-height: 150px;
  padding: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  font-weight: 300;
  color: ${colorPalette.textColor};
  line-height: 1.5;
  background-color: #fff;
`;

export const Content = styled.div`
  width: calc(100% - 250px);
`;

export const Detailsimage = styled.div`
  width: 175px;
  height: 175px;
  background: url('${props => props.src}') no-repeat center/contain;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100px;
  background-color: #fff;
`;

export const StyledRaisedButton2 = styled(RaisedButton)`
  margin: 60px auto 120px;

  > button {
    display: flex;
    align-items: center;
    justify-content: center;
    max-height: 43px;
    min-width: 400px;

    > div > div {
      display: flex;
      align-items: center;
      justify-content: center;
      max-height: 43px;

      span {
        font-weight: 400 !important;
      }
    }
  }
`;
