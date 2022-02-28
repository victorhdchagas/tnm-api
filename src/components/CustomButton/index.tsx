import React from 'react';
import { ThemeType } from '../../contexts/ThemeContext';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { withTheme } from 'styled-components';

const Wrapper = styled.View<{ theme: ThemeType }>`
  background-color: ${({ theme }) => theme.colors.buttonBackgroundColor};
  width: 100%;
  height: 36px;
  overflow: hidden;
  flex-wrap: nowrap;
  border-radius: 8px;
  justify-content: center;
  flex-direction: row;
`;
const IconWrapper = styled.View<{ theme: ThemeType }>`
  align-items: flex-end;
  justify-content: center;
  flex: 0.8;
  height: 36px;
`;

const CustomText = styled.Text<{ theme: ThemeType }>`
  color: ${({ theme }) => theme.colors.buttonTextColor};
  padding-left: 10px;
  padding-top: 10px;
  flex: 1;
  font-weight: bold;
  height: 36px;
`;

const Button = styled.TouchableOpacity<{ theme: ThemeType }>``;

const borderStyle = {
  borderBottomLeftRadius: 10,
  borderTopLeftRadius: 10,
};

const CustomButton = ({ iconProps, buttonProps, theme, children, ...rest }) => {
  return (
    <Button {...buttonProps}>
      <Wrapper style={borderStyle} {...rest}>
        <IconWrapper>
          <Icon {...iconProps} color={theme.colors.svgInputColor} />
        </IconWrapper>
        <CustomText>{children}</CustomText>
      </Wrapper>
    </Button>
  );
};
export default withTheme(CustomButton);
