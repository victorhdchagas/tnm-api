import React from 'react';
import {View, Image, Text, Pressable} from 'react-native';
import myStyles from '../styles/myApp';
// @ts-ignore
import logo from '../assets/TaNaMaoProject.png';
// import {SafeAreaView} from 'react-native-screens';
// @ts-ignore
import {SafeAreaView} from 'react-native-safe-area-context';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../types/types';
type ProfileScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Index'
>;
type Props = {
  navigation: ProfileScreenNavigationProp;
};
function IndexView({navigation}: Props) {
  console.log(typeof navigation, navigation);
  return (
    <SafeAreaView style={[{flex: 1}, myStyles.viewContainer]}>
      <View style={{flex: 3, justifyContent: 'center'}}>
        <Image
          source={logo}
          style={{
            width: 250,
            height: 100,
            resizeMode: 'stretch',
          }}
        />
      </View>
      <View style={[{flex: 3}, myStyles.viewContainer]}>
        <Pressable
          style={[myStyles.button, {width: '80%'}]}
          onPress={() => navigation.navigate('Register')}>
          <Text style={{color: '#fff', lineHeight: 40}}>Registrar</Text>
        </Pressable>
        <Pressable
          style={[myStyles.button, {marginTop: 20, width: '80%'}]}
          onPress={() => navigation.navigate('Login')}>
          <Text style={{color: '#fff', lineHeight: 40}}>Entrar</Text>
        </Pressable>
      </View>
      <View style={{flex: 1}} />
    </SafeAreaView>
  );
}

export default IndexView;
