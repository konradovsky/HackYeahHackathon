import styled from 'styled-components';
import { Tabs } from 'material-ui/Tabs';
import { Container } from '../../utils/styledComponents';
import { colorPalette } from '../../utils/constants/styles';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: ${colorPalette.primary2Color};
`;

export const StyledContainer = Container.extend`
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledTabs = styled(Tabs)`
  width: 100%;
`;


export const Content = styled.div`
  width: 100%;
  background-color: #fff;
`;
