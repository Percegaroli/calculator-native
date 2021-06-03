import styled from 'styled-components/native';
import GridRow from '../UI/GridRow';

export const Container = styled.View`
  padding: 16px;
  background-color: ${(props) => props.theme.background?.colors.secondary};
  border-radius: 16px;
`;

export const KeysRow = styled(GridRow)`
  margin-bottom: 16px;
`;
