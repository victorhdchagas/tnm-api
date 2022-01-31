import React from 'react';
// https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/installation/ add to notion
// import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {NavigationContainer, DarkTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './src/types/types';
// import Fontisto from 'fontisto';
// const Stack = createNativeStackNavigator();

import Index from './src/views/Index';
import Login from './src/views/Login';
import Register from './src/views/Register';
import Menu from './src/views/Menu';

const myTheme = {
  ...DarkTheme,
  dark: true,
  colors: {
    ...DarkTheme.colors,
    primary: 'rgb(255,45,85)',
    background: 'rgb(69, 31, 85)',
    text: 'rgb(251, 176, 52)',
  },
};

const navigatorOptions = {
  headerShown: false,
}; // Need to verify at https://reactnavigation.org/docs/native-stack-navigator/

const Stack = createNativeStackNavigator<RootStackParamList>();

const Flex = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer theme={myTheme}>
        <Stack.Navigator screenOptions={navigatorOptions}>
          <Stack.Screen name="Index" component={Index} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Menu" component={Menu} />
        </Stack.Navigator>
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
