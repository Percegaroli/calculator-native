import { Theme } from '../interface';

const primaryTheme: Theme = {
  font: {
    color: {
      light: 'hsl(0, 0%, 100%)',
      dark: 'hsl(221, 14%, 31%)',
    },
  },
  background: {
    colors: {
      primary: 'hsl(222, 26%, 31%)',
      secondary: 'hsl(223, 31%, 20%)',
      tertiary: 'hsl(224, 36%, 15%)',
    },
  },
  keys: {
    light: {
      background: '#EAE3DC',
      shadow: 'hsl(28, 16%, 65%)',
    },
    dark: {
      background: 'hsl(225, 21%, 49%)',
      shadow: 'hsl(224, 28%, 35%)',
    },
    warning: {
      background: 'hsl(6, 63%, 50%)',
      shadow: 'hsl(6, 70%, 34%)',
    },
  },
};

export default primaryTheme;
