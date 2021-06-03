import styled from 'styled-components/native';

interface ToggleContainerProps {
  themeSelected: number
}

export const Container = styled.View`
  width: 50px;
`;

export const NumbersContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 6px;
`;

export const ToggleContainer = styled.View<ToggleContainerProps>`
  flex-direction: row;
  border-radius: 32px;
  padding: 4px;
  background-color: ${(props) => props.theme.background?.colors.secondary};
  justify-content: ${(props) => {
    switch (props.themeSelected) {
      case 1:
        return 'center';
      case 2:
        return 'flex-end';
      default: return 'flex-start';
    }
  }};
`;

export const Button = styled.TouchableWithoutFeedback`
  background-color: ${(props) => props.theme.keys.warning.background};
  padding: 25px;
`;

export const Ball = styled.View`
  padding: 6px;
  background-color: ${(props) => props.theme.keys.warning.background};
  border-radius: 100%;
  border-radius: 32px;
`;
