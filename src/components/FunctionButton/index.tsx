import React from 'react';
import Button from '../UI/Button';

interface Props {
  onPress: () => {}
  label: string
}

const FunctionButton = ({ onPress, label }: Props) => (
  <Button
    onPress={onPress}
    label={label}
  />
);

export default FunctionButton;
