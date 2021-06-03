import React from 'react';
import Typography from '../UI/Typography';
import { Container } from './styles';

interface Props {
  value: string;
  history: Array<string>
}

const Display: React.FC<Props> = ({ value, history, style }: Props) => {
  const formatHistory = () => (history.length ? history.reduce(
    (prev, current) => `${prev} ${current}`,
  ) : '');

  return (
    <Container style={style}>
      <Typography
        size="small"
        color="light"
        numberOfLines={1}
        ellipsizeMode="head"
      >
        {formatHistory()}
      </Typography>
      <Typography color="light">
        {value}
      </Typography>
    </Container>
  );
};

export default Display;
