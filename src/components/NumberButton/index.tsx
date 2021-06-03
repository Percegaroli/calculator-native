import React, { memo } from 'react';
import Button from '../UI/Button';

interface Props {
  number: number;
  onPress: (keyValue: string) => void;
}

const NumberButton = ({ number, onPress }: Props) => {
  const numberString = number.toString();
  return (
    <Button onPress={() => onPress(numberString)}>
      {number.toString()}
    </Button>
  );
};

export default memo(NumberButton);
