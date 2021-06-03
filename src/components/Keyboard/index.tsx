import React from 'react';
import { OperatorsEnum } from '../../Enums/operations';
import NumberButton from '../NumberButton';
import Button from '../UI/Button';
import Typography from '../UI/Typography';
import { Container, KeysRow } from './styles';

interface Props {
  onValuePress: (keyValue: string) => void
  onOperatorPress: (operator: OperatorsEnum) => void
}

const Keyboard = ({ onValuePress, onOperatorPress }: Props) => {
  const renderNumberButton = (number: number) => (
    <NumberButton
      number={number}
      onPress={onValuePress}
    />
  );

  return (
    <Container>
      <KeysRow
        itens={[
          renderNumberButton(7),
          renderNumberButton(8),
          renderNumberButton(9),
          <Button
            onPress={() => onOperatorPress(OperatorsEnum.Delete)}
            variant="dark"
          >
            <Typography
              size="medium"
              color="light"
            >
              del
            </Typography>
          </Button>,
        ]}
      />

      <KeysRow
        itens={[
          renderNumberButton(4),
          renderNumberButton(5),
          renderNumberButton(6),
          <Button onPress={() => onOperatorPress(OperatorsEnum.Addition)}>
            +
          </Button>,
        ]}
      />

      <KeysRow
        itens={[
          renderNumberButton(1),
          renderNumberButton(2),
          renderNumberButton(3),
          <Button onPress={() => onOperatorPress(OperatorsEnum.Subtracition)}>
            -
          </Button>,
        ]}
      />

      <KeysRow
        itens={[
          <Button onPress={() => onValuePress('.')}>
            .
          </Button>,
          renderNumberButton(0),
          <Button onPress={() => onOperatorPress(OperatorsEnum.Division)}>
            /
          </Button>,
          <Button onPress={() => onOperatorPress(OperatorsEnum.Multiplication)}>
            x
          </Button>,
        ]}
      />

      <KeysRow
        itens={[
          <Button
            onPress={() => onOperatorPress(OperatorsEnum.Reset)}
            variant="dark"
          >
            <Typography
              size="medium"
              color="light"
            >
              reset
            </Typography>
          </Button>,
          <Button
            onPress={() => onOperatorPress(OperatorsEnum.Equality)}
            variant="warning"
          >
            <Typography
              size="medium"
              color="light"
            >
              =
            </Typography>
          </Button>,
        ]}
      />

    </Container>
  );
};

export default Keyboard;
