import styled from 'styled-components/native';
import { TypographyColorVariant, TypographySize } from './interface';

interface TextProps {
  uppercase: boolean;
  color: TypographyColorVariant;
  size: TypographySize;
}

export const Text = styled.Text<TextProps>`
  font-family: "Spartan_700Bold";
  font-size: ${(props) => (props.theme.font.size && props.theme.font.size[props.size])};
  text-transform: ${(props) => (props.uppercase ? 'uppercase' : 'lowercase')};
  color: ${(props) => (props.theme.font.color ? props.theme.font.color[props.color] : 'dark')};
`;

export default {};
