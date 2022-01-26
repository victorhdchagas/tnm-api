import React from 'react';
import {
  View,
  Image,
  Text,
  SafeAreaView,
  TextInput,
  Pressable,
} from 'react-native';
import myStyles from '../styles/myApp';
import logo from '../assets/TaNaMaoProject.png';

function LoginView() {
  console.log(myStyles.inputText);
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
        <TextInput style={myStyles.inputText} placeholder="Login" />
        <TextInput
          style={[myStyles.inputText, {marginTop: 10}]}
          placeholder="Senha"
        />
        <Pressable title="Entrar" style={[myStyles.button, {marginTop: 20}]}>
          <Text style={{color: '#fff'}}>Entrar</Text>
        </Pressable>
      </View>
      <View style={{flex: 1}}>
        <Pressable title="Entrar" style={{marginTop: 20}}>
          <Text style={{color: '#000'}}>Putz, esqueci a senha!</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

export default LoginView;
