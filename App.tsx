import React from 'react';
// https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/installation/ add to notion
// import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {NavigationContainer, DarkTheme} from '@react-navigation/native';
// import {RootStackParamList} from './src/types/types';
// import Fontisto from 'fontisto';
// const Stack = createNativeStackNavigator();
import Navigation from './src/routes';

const myTheme = {
  ...DarkTheme,
  dark: true,
  colors: {
    ...DarkTheme.colors,
    primary: 'rgb(255,45,85)',
    background: 'rgb(69, 31, 85)',
    text: 'rgb(255,182,39)',
    // color: 'rgb(255,182,39)',
  },
};

const Flex = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer theme={myTheme}>
        <Navigation />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default Flex;

// <Stack.Screen
// name="Home"
// component={Login}
// options={{title: 'Welcome'}}
// />
