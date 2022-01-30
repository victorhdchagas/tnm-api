import {
  Dimensions,
  StyleSheet,
  // StyleSheetProperties,
  ImageStyle,
  ViewStyle,
  // FlexStyle,
  TextStyle,
  StyleProp,
} from 'react-native';

const dimScreen = Dimensions.get('screen');

const logoStyle: StyleProp<ImageStyle> = {
  height: 100,
  width: 250,
  resizeMode: 'stretch',
};

const defaultBackgrounds = {
  input: {
    background: '#B2ACFA',
    outline: '#6558F4',
  },
  button: {
    background: '#6558F4',
  },
};
const defaultViewContainer: StyleProp<ViewStyle> = {
  alignItems: 'center',
  width: dimScreen.width,
};

const defaultMenuIcons: StyleProp<Text> = {
  color: 'rgb(251, 176, 52)',
  margin: 10,
  fontSize: 24,
};
const defaultButtonProperties: StyleProp<ViewStyle> = {
  backgroundColor: defaultBackgrounds.button.background,
  alignItems: 'center',
  justifyContent: 'center',
  paddingVertical: 12,
  paddingHorizontal: 32,
  borderRadius: 4,
  elevation: 3,
};

const defaultInputProperties: StyleProp<TextStyle> = {
  color: '#000',
  borderColor: defaultBackgrounds.input.outline,
  borderWidth: 2,
  borderRadius: 10,
  alignSelf: 'stretch',
  padding: 20,
  backgroundColor: defaultBackgrounds.input.background,
};
// const imageStyle = StyleSheet.create();

const myStyles = StyleSheet.create({
  container: {flex: 1, padding: 10, backgroundColor: '#ccc'},
  inputText: defaultInputProperties,
  viewContainer: defaultViewContainer,
  button: defaultButtonProperties,
  logoStyle: logoStyle,
  header: {
    flex: 1,
    minHeight: logoStyle.height,
    flexWrap: 'nowrap',
    justifyContent: 'center',
  },
  flex1: {flex: 1},
  flex2: {flex: 2},
  flex3: {flex: 3},
  justifyCenter: {justifyContent: 'center'},
  buttonWidth80: {width: '80%'},
  lineHeight40: {lineHeight: 40},
  menuButton: defaultMenuIcons,
});

export default myStyles;
