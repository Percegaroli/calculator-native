import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 24px;
  display: flex;
  justify-content: flex-end;
  background-color: ${(props) => props.theme.background?.colors.secondary};
  border-radius: 16px;
  align-items: flex-end;
`;

export default {};
