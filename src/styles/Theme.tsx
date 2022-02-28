import { Dimensions } from 'react-native';

const dimScreen = Dimensions.get('screen');

const Themes = {
  light: {
    id: 1,
    dimScreen,
    colors: {
      textPrimary: '#ffffff',
      textPrimarySmooth: '#ffffff',
      textSecondary: '#ffffff',
      background: '#000000',
      backgroundSmooth: '#000000',
      backgroundInput: '#000000',
      backgroundPanel: '#000000',
      backgroundSecondary: '#000000',
      logoTextColor: '#ffffff',
      logoSvgColor: '#FF6900',
      buttonBackgroundColor: '#ffffff',
      buttonTextColor: '#ffffff',
      svgFrontColor: '#000000',
      svgForegroundColor: '#000000',
      inputTextColor: '#FF0000',
      svgInputColor: '#ffffff',
      svgInputBackground: '#ffffff',
    },
  },
  dark: {
    id: 0,
    dimScreen,
    colors: {
      textPrimary: '#ffffff',
      textPrimarySmooth: '#ffffff',
      textSecondary: '#ffffff',
      background: '#19162D',
      backgroundSmooth: '#000000',
      backgroundInput: '#27212B',
      backgroundPanel: '#000000',
      backgroundSecondary: '#231F3D',
      logoTextColor: '#D4600A',
      logoSvgColor: '#FF6900',
      buttonBackgroundColor: '#D95A11',
      buttonTextColor: '#ffffff',
      svgFrontColor: '#000000',
      svgForegroundColor: '#000000',
      inputTextColor: '#FFFFFF',
      svgInputColor: '#ffffff',
      svgInputBackground: '#4E2661',
    },
  },
};
export type ThemeType = typeof Themes.light;

export default () => Themes;
