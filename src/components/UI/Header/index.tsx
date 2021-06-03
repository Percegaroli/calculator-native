import React from 'react';
import ThemeToggler from '../ThemeToggler';
import Typography from '../Typography';
import { Container, StyledTypography, ToggleContainer } from './styles';

interface Props {
  style?: any;
}

const Header: React.FC<Props> = ({ style }) => (
  <Container style={style}>
    <Typography
      uppercase={false}
      color="light"
    >
      Calc
    </Typography>
    <ToggleContainer>
      <StyledTypography
        size="small"
        color="light"
      >
        Theme
      </StyledTypography>
      <ThemeToggler />
    </ToggleContainer>
  </Container>
);

export default Header;
