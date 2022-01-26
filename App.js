import React from 'react';
// https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/installation/ add to notion
// import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const navigatorOptions = {
  headerShown: false,
}; // Need to verify at https://reactnavigation.org/docs/native-stack-navigator/

import Index from './views/Index';
import Login from './views/Login';
import Register from './views/Register';
const Flex = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={navigatorOptions}>
          <Stack.Screen name="Index" component={Index} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
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
