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
import Icon from 'react-native-vector-icons/FontAwesome';
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
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: 100,
          }}>
          <Text>
            <Icon.Button
              name="facebook"
              backgroundColor="#3b5998"
              onPress={this.loginWithFacebook}>
              Login with Facebook
            </Icon.Button>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default IndexView;
