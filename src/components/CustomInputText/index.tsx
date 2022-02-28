import React from 'react';
import { ThemeType } from '../../contexts/ThemeContext';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { withTheme } from 'styled-components';

const Wrapper = styled.View<{ theme: ThemeType }>`
  width: 100%;
  height: 28px;
  overflow: hidden;
  flex-wrap: nowrap;
  flex-direction: row;
`;
const IconWrapper = styled.View<{ theme: ThemeType }>`
  background-color: ${({ theme }) => theme.colors.svgInputBackground};
  flex-shrink: 1;
  flex-grow: 0.6;
  flex-basis: 20%;
  align-items: center;
  justify-content: center;
  height: 28px;
`;

const InputText = styled.TextInput<{ theme: ThemeType }>`
  background-color: ${({ theme }) => theme.colors.backgroundInput};
  color: ${({ theme }) => theme.colors.inputTextColor};
  padding: 5px;
  padding-left: 10px;
  flex-grow: 2;
  flex-basis: 80%;
  flex-shrink: 1;
  height: 28px;
`;

const borderStyle = {
  borderBottomLeftRadius: 10,
  borderTopLeftRadius: 10,
};

const CustomInputText = ({ iconProps, inputProps, theme, ...rest }) => {
  return (
    <Wrapper style={borderStyle} {...rest}>
      <IconWrapper>
        <Icon {...iconProps} color={theme.colors.svgInputColor} />
      </IconWrapper>
      <InputText {...inputProps} />
    </Wrapper>
  );
};
export default withTheme(CustomInputText);
