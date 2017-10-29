import styled from 'styled-components';
import { Container } from '../../utils/styledComponents';
import { colorPalette } from '../../utils/constants/styles';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: ${colorPalette.primary1Color};
`;

export const StyledContainer = Container.extend`
  display: flex;
  height: 80%;
  box-shadow: rgba(0, 0, 0, 0.16) 0 3px 10px, rgba(0, 0, 0, 0.23) 0 3px 10px;
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  background-color: #fff;
  border-radius: 2px 0 0 2px;
  color: ${colorPalette.primary1Color};
  box-shadow: rgba(0, 0, 0, 0) 0 1px 5px, rgba(0, 0, 0, 0) 0 1px 5px;
  transition: all 0.3s;

  &:hover {
    cursor: pointer;
    position: relative;
    z-index: 2;
    transform: scale(1.05);
    box-shadow: rgba(0, 0, 0, 0.16) 0 3px 10px, rgba(0, 0, 0, 0.23) 0 3px 10px;
  }
`;

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  background-color: ${colorPalette.primary2Color};
  border-radius: 0 2px 2px 0;
  color: #fff;
  box-shadow: rgba(0, 0, 0, 0) 0 1px 5px, rgba(0, 0, 0, 0) 0 1px 5px;
  transition: all 0.3s;

  &:hover {
    cursor: pointer;
    position: relative;
    z-index: 2;
    transform: scale(1.05);
    box-shadow: rgba(0, 0, 0, 0.16) 0 3px 10px, rgba(0, 0, 0, 0.23) 0 3px 10px;
  }
`;

export const Image = styled.div`
  height: 50%;
  width: 50%;
  max-height: 230px;
  max-width: 260px;
  margin-bottom: 30px;
  background: url('${props => props.src}') no-repeat center/contain;
`;

export const Text = styled.div`
  font-size: 48px;
  text-align: center;
  font-weight: 300;
`;
