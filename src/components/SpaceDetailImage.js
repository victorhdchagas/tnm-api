import React from 'react';
import {Pressable, View, Text, Image, Dimensions} from 'react-native';
import myStyles from '../styles/myApp';
import {useTheme} from '@react-navigation/native';
import compStyle from '../styles/components';

//@ts-ignore
// import PicAreaInterna from '../../assets/TaNaMaoProject.png';
import picAreaInterna from '../../assets/interna.png';
function BottomMenuFC({customStyle}) {
  const dimScreen = Dimensions.get('window');
  const {colors} = useTheme();
  return (
    <View
      style={[
        {flexDirection: 'row', height: dimScreen.height / 7},
        customStyle,
      ]}>
      <View style={{width: '20%', backgroundColor: '#000'}}>
        <Image
          source={picAreaInterna}
          style={{
            width: 'auto',
            height: dimScreen.height / 8,
            margin: 5,
            // border: '1px #fff solid',
          }}
          resizeMode="stretch"
        />
      </View>
      <View style={{flexDirection: 'column', width: '80%'}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: 'auto',
          }}>
          <Text style={[{color: colors.text}, compStyle.ListItemStyle.Title]}>
            Nome do Espaço
          </Text>
          <Text style={[{color: colors.text}, compStyle.ListItemStyle.Sector]}>
            Setor
          </Text>
        </View>
        <Text
          style={[{color: colors.text}, compStyle.ListItemStyle.Description]}>
          Teste
        </Text>
      </View>
    </View>
  );
}

export default BottomMenuFC;
