import { Theme } from '../interface';

const tertiaryTheme: Theme = {
  font: {
    color: {
      light: 'hsl(0, 0%, 100%)',
      dark: 'hsl(198, 20%, 13%)',
    },
  },
  background: {
    colors: {
      primary: ' hsl(268, 75%, 9%)',
      secondary: 'hsl(268, 71%, 12%)',
      tertiary: 'hsl(268, 71%, 12%)',
    },
  },
  keys: {
    dark: {
      background: 'hsl(281, 89%, 26%)',
      shadow: 'hsl(285, 91%, 52%)',
    },
    warning: {
      background: 'hsl(176, 100%, 44%)',
      shadow: 'hsl(177, 92%, 70%)',
    },
    light: {
      background: 'hsl(268, 47%, 21%)',
      shadow: 'hsl(290, 70%, 36%)',
    },
  },
};

export default tertiaryTheme;
