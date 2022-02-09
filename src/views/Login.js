import React, {useState, useEffect} from 'react';
import {
  View,
  Image,
  Text,
  SafeAreaView,
  TextInput,
  Pressable,
} from 'react-native';
import myStyles from '../styles/myApp';
import logo from '../../assets/TaNaMaoProject.png';
function LoginView({navigation}) {
  const [countPress, setCount] = useState(0);
  useEffect(() => {
    return () => {
      setCount(0);
    };
  }, []);
  const handleLogoPress = () => {
    countPress < 4 ? setCount(countPress + 1) : navigation.navigate('Sandbox');
  };
  return (
    <SafeAreaView style={[{flex: 1}, myStyles.viewContainer]}>
      <View style={{flex: 3, justifyContent: 'center'}}>
        <Pressable onPress={handleLogoPress}>
          <Image
            source={logo}
            style={{
              width: 250,
              height: 100,
              resizeMode: 'stretch',
            }}
          />
        </Pressable>
      </View>
      <View style={[{flex: 3}, myStyles.viewContainer]}>
        <TextInput style={myStyles.inputText} placeholder="Login" />
        <TextInput
          style={[myStyles.inputText, {marginTop: 10}]}
          placeholder="Senha"
        />
        <Pressable
          title="Entrar"
          style={[myStyles.button, {marginTop: 20}]}
          onPress={() => navigation.navigate('Menu')}>
          <Text style={{color: '#fff'}}>Entrar</Text>
        </Pressable>
        <Pressable
          title="Entrar"
          style={{marginTop: 20}}
          onPress={() => navigation.navigate('Register')}>
          <Text style={{color: '#fff'}}>Me registra aê!</Text>
        </Pressable>
        <Pressable title="Entrar" style={{marginTop: 20}}>
          <Text style={{color: '#fff'}}>Putz, esqueci a senha!</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

export default LoginView;
