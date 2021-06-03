import React, {
  createContext, useState,
} from 'react';
import { ThemeProvider } from 'styled-components';
import { Theme } from './interface';
import primaryTheme from './Variants/primaryTheme';
import { commonTheme } from './Variants/commonTheme';

type ChangeTheme = (newTheme: Theme) => void

export const ChangeThemeContext = createContext<ChangeTheme>(() => {});

const AppThemeProvider: React.FC = ({ children }) => {
  const mergeThemeWithCommonValues = (newTheme: Theme): Theme => ({
    ...newTheme,
    font: {
      ...newTheme.font,
      size: commonTheme.font.size,
    },
  });
  const [theme, setTheme] = useState(mergeThemeWithCommonValues(primaryTheme));

  const changeTheme = (newTheme: Theme) => {
    setTheme(mergeThemeWithCommonValues(newTheme));
  };

  return (
    <ChangeThemeContext.Provider value={changeTheme}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ChangeThemeContext.Provider>

  );
};

export default AppThemeProvider;
