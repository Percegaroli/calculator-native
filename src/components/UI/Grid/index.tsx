import React, { ReactNode } from 'react';
import { Container } from './styles';

interface Props {
  size?: number;
  children: ReactNode;
  style?: any
}

const Grid = ({ size = 1, children, style }: Props) => (
  <Container
    size={size}
    style={style}
  >
    {children}
  </Container>
);

export default Grid;
