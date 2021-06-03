import React, { ReactNode } from 'react';
import Grid from '../Grid';
import { Container } from './style';

interface Props {
  itens: Array<ReactNode>
  style?: any
}

const GridRow = ({ itens, style }: Props) => (
  <Container style={style}>
    {itens.map((child, index) => (
      <Grid style={{ marginLeft: index === 0 ? 0 : 10 }}>
        {child}
      </Grid>

    ))}
  </Container>
);

export default GridRow;
