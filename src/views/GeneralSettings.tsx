import React from 'react';
import {View, Text} from 'react-native';
import myStyles from '../styles/myApp';
// @ts-ignore
// import {SafeAreaView} from 'react-native-screens';
// @ts-ignore
import {SafeAreaView} from 'react-native-safe-area-context';
import {Props} from '../types/types';

//Parear QRCode
//Configurações de usuário
//Deslogar
//Versão

function IndexView({}: Props) {
  return (
    <SafeAreaView style={[{flex: 1}, myStyles.viewContainer]}>
      <View>
        <Text>Olá</Text>
      </View>
    </SafeAreaView>
  );
}

export default IndexView;
