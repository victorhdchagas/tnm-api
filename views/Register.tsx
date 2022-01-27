import React, {useEffect, useState} from 'react';
import {View, Image, Text, Pressable, KeyboardAvoidingView} from 'react-native';
import myStyles from '../styles/myApp';
// @ts-ignore
import logo from '../assets/TaNaMaoProject.png';
import {SafeAreaView} from 'react-native-safe-area-context';
// @ts-ignore
import {FloatingLabelInput} from 'react-native-floating-label-input';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../types/types';

type ProfileScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Register'
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};

// class IndexView extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = {keyboardHeight:0};
//   }
//   componentDidMount(){

//   }
//   ComponentWillUnmount(){

//   }

//   render(){

//   }
// }

function IndexView({navigation}: Props) {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [login, setLogin] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [Phone, setPhone] = useState('');

  useEffect(() => {
    // const timeout = setTimeout(() => {
    //   setShowPassword(!showPassword);
    // }, 5000);
    // console.log(timeout);
    // return () => clearTimeout(timeout);
  }, [showPassword]);

  return (
    <SafeAreaView style={[myStyles.flex1, myStyles.viewContainer]}>
      <View style={[myStyles.header]}>
        <Image source={logo} style={myStyles.logoStyle} />
      </View>
      <View style={[myStyles.flex3, {width: '100%'}]}>
        <KeyboardAvoidingView behavior="position">
          <FloatingLabelInput
            label={'Login'}
            value={login}
            onChangeText={value => setLogin(value)}
          />
          <FloatingLabelInput
            label={'Senha'}
            isPassword
            togglePassword={showPassword}
            // style={{width: '100%'}}
            value={password}
            onChangeText={value => setPassword(value)}
            customShowPasswordComponent={<Text>Show</Text>}
            customHidePasswordComponent={<Text>Hide</Text>}
          />
          <FloatingLabelInput
            label={'Nome completo'}
            value={fullName}
            onChangeText={value => setEmail(value)}
          />
          <FloatingLabelInput
            label={'E-mail'}
            value={email}
            onChangeText={value => setEmail(value)}
          />
          <FloatingLabelInput
            label={'Telefone Celular'}
            value={Phone}
            onChangeText={value => setPhone(value)}
          />
          <View
            style={[
              myStyles.viewContainer,
              {
                justifyContent: 'space-around',
                flexDirection: 'row',
                width: '100%',
                paddingBottom: 20,
              },
            ]}>
            <Pressable
              style={[myStyles.button]}
              onPress={() => navigation.navigate('Login')}>
              <Text style={[{color: '#fff'}, myStyles.lineHeight40]}>
                Confirmar
              </Text>
            </Pressable>
            <Pressable
              style={[myStyles.button]}
              onPress={() => navigation.goBack()}>
              <Text style={[{color: '#fff'}, myStyles.lineHeight40]}>
                Cancelar
              </Text>
            </Pressable>
          </View>
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  );
}

export default IndexView;
