import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ThemeContext, ThemeType } from '../../contexts/ThemeContext';
import styled, { ThemeProvider } from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Wrapper = styled.View<{ theme: ThemeType }>`
  height: 32px;
  width: 32px;
  align-self: flex-end;
  justify-self: flex-end;
`;

const Button = styled.TouchableOpacity<{ theme: ThemeType }>`
  padding: 3px;
  color: ${({ theme }) => theme.colors.inputTextColor};
`;

export const ThemeSelector = () => {
  return (
    <ThemeContext.Consumer>
      {({ theme, toggleTheme }) => (
        <ThemeProvider theme={theme}>
          <TouchableOpacity onPress={toggleTheme}>
            <Wrapper>
              <Button>
                <Icon
                  name={theme.id ? 'moon-o' : 'sun-o'}
                  size={20}
                  style={{ color: theme.colors.inputTextColor }}
                />
              </Button>
            </Wrapper>
          </TouchableOpacity>
        </ThemeProvider>
      )}
    </ThemeContext.Consumer>
  );
};
