import React from 'react';
import { TextProps } from 'react-native';
import { TypographyColorVariant, TypographySize } from './interface';
import { Text } from './styles';

interface Props {
  uppercase?: boolean
  style?: any
  color?: TypographyColorVariant
  size?: TypographySize
}

const Typography: React.FC<Props & TextProps> = ({
  children, uppercase = true, style, color = 'dark', size = 'big', numberOfLines, ellipsizeMode,
}) => (
  <Text
    uppercase={uppercase}
    style={style}
    color={color}
    size={size}
    numberOfLines={numberOfLines}
    ellipsizeMode={ellipsizeMode}
  >
    {children}
  </Text>
);

export default Typography;
