import { Theme } from '../interface';

const secondaryVariant: Theme = {
  font: {
    color: {
      light: 'hsl(0, 0%, 100%)',
      dark: 'hsl(60, 10%, 19%)',
    },
  },
  background: {
    colors: {
      primary: 'hsl(0, 0%, 90%)',
      secondary: 'hsl(0, 5%, 81%)',
      tertiary: 'hsl(0, 0%, 93%)',
    },
  },
  keys: {
    dark: {
      background: 'hsl(185, 42%, 37%)',
      shadow: 'hsl(185, 58%, 25%)',
    },
    warning: {
      background: 'hsl(25, 98%, 40%)',
      shadow: 'hsl(25, 99%, 27%)',
    },
    light: {
      background: 'hsl(45, 7%, 89%)',
      shadow: 'hsl(35, 11%, 61%)',
    },
  },
};

export default secondaryVariant;
