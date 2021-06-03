/*
export interface Theme {
  primary: ThemeVariant,
  secondary: ThemeVariant,
  tertiary: ThemeVariant,
  common: CommonTheme,
  selectedTheme: 'primary' | 'secondary' | 'tertiary'
}
*/

export interface CommonTheme {
  font: FontTheme
}

export interface Theme {
  font: FontTheme
  background?: BackgroundTheme,
  keys: KeysTheme
}

export interface BackgroundTheme {
  colors: BackgroundColors
}

export interface BackgroundColors {
  primary: string,
  secondary: string,
  tertiary: string
}

export interface FontTheme {
  color?: FontThemeColor,
  size?: FontThemeSize
}

export interface FontThemeColor {
  light: string;
  dark: string;
}

export interface FontThemeSize {
  small: string,
  medium: string,
  big: string
}

export interface KeysTheme {
  light: KeysColors
  dark: KeysColors
  warning: KeysColors
}

export interface KeysColors {
  background: string;
  shadow: string;
}
