import styled from 'styled-components/native';
import { ButtonStyleProps } from './interface';

export const Container = styled.View`
  position: relative;
`;

export const ButtonBase = styled.Pressable<ButtonStyleProps>`
  padding: 16px;
  background-color: ${(props) => props.theme.keys[props.variant].background};
  border-radius: 8px;
  position: relative;
  z-index: 2;
  align-items: center;
`;

export const ButtonElevation = styled.View<ButtonStyleProps>`
  height: 100%;
  width: 100%;
  position: absolute;
  z-index:1;
  top: 5px;
  left: 0;
  background-color: ${(props) => props.theme.keys[props.variant].shadow};
  border-radius: 8px;
`;
