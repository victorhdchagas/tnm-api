import {useTheme} from '@react-navigation/native';
import React from 'react';
import {
  Pressable,
  View,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Portal} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import myStyles from '../styles/myApp';
const dimScreen = Dimensions.get('window');

const ImageControls = () => {
  return (
    <>
      <TouchableOpacity
        onPress={() => {
          console.log('tratar abrir imagem');
        }}
        style={{alignSelf: 'flex-end', marginRight: 10, marginVertical: 10}}>
        <Icon
          name="eye"
          size={30}
          style={{
            opacity: 0.57,
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {}}
        style={{alignSelf: 'flex-end', marginRight: 10, marginTop: 20}}>
        <Icon
          name="image"
          size={30}
          style={{
            opacity: 0.57,
          }}
        />
      </TouchableOpacity>
    </>
  );
};

function ImageViewer() {
  const {colors} = useTheme();
  const {width, height} = Dimensions.get('screen');

  const testImage = require('../../assets/Aspect-ratio-16x9.svg.png');
  const pageStyles = {
    header: {
      flex: 0.3,
      justifyContent: 'center' as 'center',
      borderBottomWidth: 4,
      borderBottomColor: colors.primary,
    },
    headerText: {
      textAlign: 'center' as 'center',
      fontSize: 18,
      color: colors.primary,
    },
    wrapper: {flex: 1, flexDirection: 'column' as 'column'},
    imageContainer: {
      backgroundColor: colors.darkerBackground,
      height: height * 0.15,

      // justifyContent: 'flex-end' as 'flex-end',
      // alignItems: 'center' as 'center',
    },
  };

  return (
    <>
      <View style={pageStyles.imageContainer}>
        <Portal.Host>
          <Image
            source={testImage}
            resizeMode="contain"
            style={{
              // height: '100%',
              flex: 1,
              // aspectRatio: 3,
              alignSelf: 'center',
            }}
          />
          <Portal>
            <ImageControls />
          </Portal>
        </Portal.Host>
      </View>
    </>
  );
}

export default ImageViewer;
