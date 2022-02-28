import React from 'react';
// https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/installation/ add to notion
// import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {NavigationContainer, DarkTheme} from '@react-navigation/native';
// import {RootStackParamList} from './src/types/types';
// import Fontisto from 'fontisto';
// const Stack = createNativeStackNavigator();
import Navigation from './src/routes';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const myTheme = {
  ...DarkTheme,
  dark: true,
  colors: {
    ...DarkTheme.colors,
    primary: 'rgb(255, 224, 181)',
    background: 'rgb(73, 66, 108)', //49426c
    darkerBackground: 'rgb(44, 26, 80)',
    text: 'rgb(255,182,39)',
    // color: 'rgb(255,182,39)',
  },
};

const Flex = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <SafeAreaProvider>
        <NavigationContainer theme={myTheme}>
          <Navigation />
        </NavigationContainer>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

export default Flex;

// <Stack.Screen
// name="Home"
// component={Login}
// options={{title: 'Welcome'}}
// />
