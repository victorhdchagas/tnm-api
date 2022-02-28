import React from 'react';
import { ThemeType } from '../../contexts/ThemeContext';
import styled, { ThemeProvider } from 'styled-components/native';
import Logo from '../../assets/logo';
import { ThemeSelector } from '../ThemeSelector';
import { Portal } from 'react-native-paper';

const Wrapper = styled.View<{ theme: ThemeType }>`
  flex: 0.6;
  align-self: flex-end;
  flex-direction: column;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  overflow: hidden;
`;
const Tnm = styled.Text<{ theme: ThemeType }>`
  color: ${({ theme }) => theme.colors.logoTextColor};
  align-self: center;
  margin-top: 15%;
  margin-left: 38%;
  font-weight: bold;
  font-size: 48px;
`;
const logoStyle = {
  height: '350px',
  width: '210px',
  marginLeft: 0,
  alignSelf: 'flex-start',
};

export const GreaterLogoView = ({ theme, ...rest }) => {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper {...rest}>
        <Portal.Host>
          <ThemeSelector />
          <Logo style={logoStyle} />
          <Portal>
            <Tnm>Ta na mão</Tnm>
          </Portal>
        </Portal.Host>
      </Wrapper>
    </ThemeProvider>
  );
};
