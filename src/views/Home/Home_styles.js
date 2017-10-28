import styled from 'styled-components';
import { navHeight } from '../../utils/constants/styles';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: calc(100vh - ${navHeight}px);
  background: url('./img/Background.png') no-repeat center/cover;
`;

export const Middle = styled.div`
  width: 600px;
`;

export const Text = styled.div`
  margin-bottom: 40px;
  text-align: center;
  font-weight: 300;
  font-size: 36px;
  color: #fff;
  text-shadow: 1px 1px 3px #888;

  > span {
    font-weight: 700;
  }
`;
