import React from 'react';
import { ThemeType } from '../../contexts/ThemeContext';
import styled from 'styled-components/native';
import { withTheme } from 'styled-components';

const CustomText = styled.Text<{ theme: ThemeType }>`
  color: ${({ theme }) => theme.colors.buttonTextColor};
  text-align: center;
  font-weight: bold;
`;

const Button = styled.TouchableOpacity<{ theme: ThemeType }>``;

const CustomTextButton = ({ textProps, children, ...rest }) => {
  return (
    <Button {...rest}>
      <CustomText {...textProps}>{children}</CustomText>
    </Button>
  );
};
export default withTheme(CustomTextButton);
