import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Index from '../views/Index';
import Login from '../views/Login';
import Register from '../views/Register';
import Menu from '../views/Menu';
import MySpaces from '../views/MySpaces';
import ShowSpace from '../views/ShowSpace';
import GeneralSettings from '../views/GeneralSettings';
import Sandbox from '../views/Sandbox';
import {NavigationContainer} from '@react-navigation/native';
// import {RootStackParamList} from '../types/types';
const Stack = createNativeStackNavigator();

const navigatorOptions = {
  headerShown: false,
}; // Need to verify at https://reactnavigation.org/docs/native-stack-navigator/

const SpacesArea = () => {
  return (
    <Stack.Navigator
      screenOptions={navigatorOptions}
      initialRouteName="MySpaces">
      <Stack.Screen name="MySpaces" component={MySpaces} />
      <Stack.Screen name="ShowSpace" component={ShowSpace} />
    </Stack.Navigator>
  );
};

export default () => {
  return (
    <Stack.Navigator screenOptions={navigatorOptions} initialRouteName="Login">
      <Stack.Screen name="Index" component={Index} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="SpacesArea" component={SpacesArea} />
      <Stack.Screen name="Menu" component={Menu} />
      <Stack.Screen name="Sandbox" component={Sandbox} />
      <Stack.Screen name="GeneralSettings" component={GeneralSettings} />
    </Stack.Navigator>
  );
};
