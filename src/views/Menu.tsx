import React, {useEffect} from 'react';
import {View, Image, BackHandler} from 'react-native';
import myStyles from '../styles/myApp';
// @ts-ignore
import logo from '../../assets/TaNaMaoProject.png';
// import {SafeAreaView} from 'react-native-screens';
// @ts-ignore
import {SafeAreaView} from 'react-native-safe-area-context';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../types/types';
import BottomMenu from '../components/BottomMenu';
type ProfileScreenNavigationProp =
  NativeStackNavigationProp<RootStackParamList>;
type Props = {
  navigation: ProfileScreenNavigationProp;
};
function IndexView({navigation}: Props) {
  useEffect(() => {
    const backAction = () => {
      navigation.navigate('Menu');
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);
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
      <View
        style={[
          {
            flex: 3,
            width: '100%',
            padding: 0,
            margin: 0,
          },
        ]}>
        <BottomMenu />
      </View>
    </SafeAreaView>
  );
}

export default IndexView;
