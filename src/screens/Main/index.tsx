import React, { useContext, useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ThemeContext } from 'styled-components';
import { StyledDisplay, StyledHeader } from './styles';
import { OperatorsEnum } from '../../Enums/operations';
import ScreenContainer from '../../components/UI/ScreenContainer';
import Keyboard from '../../components/Keyboard';

type Operations = {
  [key in OperatorsEnum]: () => void;
};

const Main = () => {
  const [total, setTotal] = useState(0);
  const [displayValue, setDisplayValue] = useState('0');
  const [operationStack, setOperationStack] = useState<Array<string>>([]);
  const themeContext = useContext(ThemeContext);
  const [nextOperation, setNextOperation] = useState<null | OperatorsEnum>(null);
  const [justMadeOperation, setJustMadeOperation] = useState(false);

  useEffect(() => {
    setDisplayValue(total.toString());
    setJustMadeOperation(true);
  }, [total]);

  const onValueKeyPress = (keyValue: string) => {
    if (justMadeOperation && keyValue !== '.') {
      setJustMadeOperation(false);
      setDisplayValue(keyValue);
    } else {
      readValueInput(keyValue);
    }
  };

  const readValueInput = (value: string) => {
    if (value === '.' && !displayValue.includes('.')) {
      setDisplayValue(concat(displayValue, value));
    } else {
      setDisplayValue(displayValue === '0' ? value : concat(displayValue, value));
    }
  };

  const onOperatorPress = (operator: OperatorsEnum) => {
    if (operator === OperatorsEnum.Reset
      || operator === OperatorsEnum.Equality
      || operator === OperatorsEnum.Delete
    ) {
      operations[operator]();
    } else if (!operationStack.length) {
      setOperationStack([displayValue, operator]);
      setTotal(Number(displayValue));
      setNextOperation(operator);
    } else if (nextOperation) {
      operations[nextOperation]();
      setOperationStack([...operationStack, displayValue, nextOperation]);
      setNextOperation(operator);
    }
  };

  const addValue = () => {
    const result = total + Number(displayValue);
    setTotal(result);
  };

  const subtractValue = () => {
    const result = total - Number(displayValue);
    setTotal(result);
  };

  const multiplyValues = () => {
    const result = total * Number(displayValue);
    setTotal(result);
  };

  const divideValues = () => {
    if (total === 0) {
      setDisplayValue('Can\'t divide by 0');
    } else {
      const result = total / Number(displayValue);
      setTotal(result);
    }
  };

  const deleteValue = () => {
    if (displayValue.length === 1) {
      setDisplayValue('0');
    } else {
      setDisplayValue(displayValue.slice(0, displayValue.length - 1));
    }
  };

  const resetValues = () => {
    setTotal(0);
    setDisplayValue('0');
    setOperationStack([]);
    setNextOperation(null);
  };

  const calculateEquality = () => {
    if (justMadeOperation) {
      setDisplayValue(total.toString());
      setOperationStack([]);
      setNextOperation(null);
      setJustMadeOperation(true);
    } else if (nextOperation) {
      operations[nextOperation]();
      setOperationStack([]);
      setNextOperation(null);
      setJustMadeOperation(true);
    }
  };

  const operations: Operations = {
    reset: resetValues,
    '+': addValue,
    '-': subtractValue,
    x: multiplyValues,
    '/': divideValues,
    del: deleteValue,
    '=': calculateEquality,
  };

  const concat = (char1: string, char2: string) => `${char1}${char2}`;

  return (
    <>
      <StatusBar
        backgroundColor={themeContext.background?.colors.primary}
        animated
      />
      <ScreenContainer>
        <StyledHeader />
        <StyledDisplay
          value={displayValue}
          history={operationStack}
        />
        <Keyboard
          onValuePress={onValueKeyPress}
          onOperatorPress={onOperatorPress}
        />
      </ScreenContainer>
    </>
  );
};

export default Main;
