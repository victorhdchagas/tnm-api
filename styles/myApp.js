import {Dimensions, StyleSheet, StyleSheetProperties} from 'react-native';

const dimScreen = Dimensions.get('screen');

const logoStyle = {
  height: 100,
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
const defaultViewContainer = {
  alignItems: 'center',
  paddingHorizontal: 20,
  width: dimScreen.width,
};

const defaultButtonProperties = {
  backgroundColor: defaultBackgrounds.button.background,
  alignItems: 'center',
  justifyContent: 'center',
  paddingVertical: 12,
  paddingHorizontal: 32,
  borderRadius: 4,
  elevation: 3,
};

const defaultInputProperties = {
  color: '#000',
  borderColor: defaultBackgrounds.input.outline,
  borderWidth: 2,
  borderRadius: 10,
  alignSelf: 'stretch',
  padding: 20,
  backgroundColor: defaultBackgrounds.input.background,
};

const myStyles = StyleSheet.create({
  container: {flex: 1, padding: 10, backgroundColor: '#ccc'},
  inputText: defaultInputProperties,
  viewContainer: defaultViewContainer,
  button: defaultButtonProperties,
  logoStyle: {
    width: 250,
    height: logoStyle.height,
    resizeMode: 'stretch',
  },
  header: {
    flex: 1,
    minHeight: logoStyle.height + 20,
    flexWrap: 'nowrap',
    justifyContent: 'center',
  },
  flex1: {flex: 1},
  flex2: {flex: 2},
  flex3: {flex: 3},
  justifyCenter: {justifyContent: 'center'},
  buttonWidth80: {width: '80%'},
  lineHeight40: {lineHeight: 40},
});

export default myStyles;
