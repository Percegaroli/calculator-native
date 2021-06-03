import React, { ReactNode } from 'react';
import Typography from '../Typography';
import { ButtonVariants } from './interface';
import { ButtonBase, ButtonElevation, Container } from './styles';

interface Props {
  onPress: () => void,
  variant?: ButtonVariants
  children: ReactNode
}

const Button: React.FC<Props> = ({ children, onPress, variant = 'light' }: Props) => (
  <Container style={{ position: 'relative' }}>
    <ButtonBase
      onPress={onPress}
      variant={variant}
    >
      {typeof children === 'string' ? <Typography>{children}</Typography> : children}
    </ButtonBase>
    <ButtonElevation variant={variant} />
  </Container>
);

export default Button;
