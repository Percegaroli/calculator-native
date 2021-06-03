import React, { useContext, useState } from 'react';
import { StyleProp } from 'react-native';
import { ChangeThemeContext } from '../../../styles/AppThemeProvider';
import primaryTheme from '../../../styles/Variants/primaryTheme';
import secondaryVariant from '../../../styles/Variants/secondaryTheme';
import tertiaryTheme from '../../../styles/Variants/tertiaryTheme';
import Typography from '../Typography';
import {
  Ball, Button, Container, NumbersContainer, ToggleContainer,
} from './styles';

interface Props {
  style? : StyleProp<any>
}

const ThemeToggler = ({ style }: Props) => {
  const [themeSelected, setThemeSelected] = useState(0);
  const changeTheme = useContext(ChangeThemeContext);

  const changeContextTheme = (nextTheme: number) => {
    let theme = primaryTheme;
    if (nextTheme === 1) theme = secondaryVariant;
    else if (nextTheme === 2) theme = tertiaryTheme;
    changeTheme(theme);
  };

  const onChangeTheme = () => {
    const nextTheme = themeSelected === 2 ? 0 : themeSelected + 1;
    setThemeSelected(nextTheme);
    changeContextTheme(nextTheme);
  };

  return (
    <Container style={style}>
      <NumbersContainer>
        {[1, 2, 3].map((number, index) => (
          <Typography
            color="light"
            key={`themeToggler-theme-${index + 1}`}
            size="small"
          >
            {number}
          </Typography>
        ))}
      </NumbersContainer>
      <ToggleContainer themeSelected={themeSelected}>
        <Button onPressIn={onChangeTheme}>
          <Ball />
        </Button>
      </ToggleContainer>
    </Container>
  );
};

export default ThemeToggler;
