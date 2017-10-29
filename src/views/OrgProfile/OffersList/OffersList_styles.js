import styled from 'styled-components';
import RaisedButton from 'material-ui/RaisedButton';
import { colorPalette } from '../../../utils/constants/styles';

export const Container = styled.div`
  width: 95%;
  margin-left: 2.5%;
`;

export const Offer = styled.div`
  box-sizing: border-box;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100px !important;
  border-bottom: 1px solid #eee;
  background-color: #fff;

  > div {
    display: flex;
    align-items: center;
  }
`;
export const Type = styled.div`
  width: 30px;
  height: 30px;
  background: url('${props => props.src}') no-repeat center/contain;
`;
export const Icon = styled.div`
  width: 30px;
  height: 20px;
  margin-right: 5px;
  background: url('${props => props.src}') no-repeat center/contain;
`;
export const Name = styled.div`
  width: calc(100% - 630px);
  display: flex;
  line-height: 1.3;
  font-weight: 700;
`;
export const Capacity = styled.div`
  width: 50px;
`;
export const City = styled.div`
  width: 130px;
`;
export const Date = styled.div`
  width: 100px;
`;
export const Hours = styled.div`
  width: 100px;
`;
export const Action = styled.div`
  width: 80px;
`;
