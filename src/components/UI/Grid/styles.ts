import styled from 'styled-components/native';

interface ContainerProps {
  size: number;
}

export const Container = styled.View<ContainerProps>`
  flex: ${(props) => props.size};
`;

export default {};
