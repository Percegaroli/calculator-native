import styled from 'styled-components/native';
import Typography from '../Typography';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ToggleContainer = styled.View`
  flex-direction: row;
  align-items: flex-end;
`;

export const StyledTypography = styled(Typography)`
  margin-right: 20px;
`;
