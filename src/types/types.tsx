import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined; // undefined because you aren't passing any params to the home screen
  Profile: undefined;
  Index: undefined;
  Login: undefined;
  Register: undefined;
  Menu: undefined;
};

export type ProfileScreenNavigationProp =
  NativeStackNavigationProp<RootStackParamList>;
export type Props = {
  navigation: ProfileScreenNavigationProp;
};
