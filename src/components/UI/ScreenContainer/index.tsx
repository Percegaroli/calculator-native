import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  height: 100%;
  background-color: ${(props) => props.theme.background?.colors.primary};
  padding: 14px;
`;

const ScreenContainer: React.FC = ({ children }) => (
  <Container>
    {children}
  </Container>
);

export default ScreenContainer;
