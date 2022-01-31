import React from 'react';
import {Pressable, View, Text, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import myStyles from '../styles/myApp';
import useCustomNav from '../components/goTo';
const dimScreen = Dimensions.get('window');

function BottomMenuFC() {
  const navigator = useCustomNav();

  const handleNavIndex = () => {
    console.log('clicked');
    navigator.goTo('Index');
  };

  return (
    <>
      <Text>{dimScreen.width}</Text>
      <View style={myStyles.FooterMenuWrapper}>
        <Pressable onPress={handleNavIndex}>
          <View
            style={[
              myStyles.menuButton,
              myStyles.directionCol,
              {minWidth: dimScreen.width / 3},
            ]}>
            <Icon name="home" size={44} style={myStyles.buttomIcon} />
            <Text style={myStyles.menuButtonText}>Meus Espaços</Text>
          </View>
        </Pressable>
        <Pressable onPress={handleNavIndex}>
          <View
            style={[
              myStyles.menuButton,
              myStyles.directionCol,
              {minWidth: dimScreen.width / 3},
            ]}>
            <Icon name="qrcode" size={44} style={myStyles.buttomIcon} />
            <Text style={myStyles.menuButtonText}>Parear</Text>
          </View>
        </Pressable>
        <Pressable onPress={handleNavIndex}>
          <View
            style={[
              myStyles.menuButton,
              myStyles.directionCol,
              {minWidth: dimScreen.width / 3},
            ]}>
            <Icon name="bars" size={44} style={myStyles.buttomIcon} />
            <Text style={myStyles.menuButtonText}>Seilá</Text>
          </View>
        </Pressable>
      </View>
    </>
  );
}

export default BottomMenuFC;
