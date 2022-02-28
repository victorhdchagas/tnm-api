import React, { useState, useEffect } from 'react';
import { View, SafeAreaView, ViewStyle, Alert, ScrollView } from 'react-native';
import myStyles from '../styles/myApp';

import { GreaterLogoView } from '../components/GreaterLogoView';
import { ThemeContext } from '../contexts/ThemeContext';
import CustomInputText from '../components/CustomInputText';
import { ThemeProvider } from 'styled-components';
import CustomButton from '../components/CustomButton';
import CustomTextButton from '../components/CustomTextButton';

function LoginView({ navigation }) {
  const styles = {
    container: {
      flex: 1,
      paddingHorizontal: '10%',
      alignItems: 'center',
      paddingTop: '10%',
      paddingBottom: '40%',
      justifyContent: 'space-around',
    } as ViewStyle,
    button: {
      width: '50%',
    },
  };
  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
        <ThemeProvider theme={theme}>
          <SafeAreaView style={myStyles.flex1}>
            <GreaterLogoView theme={theme} />
            <View
              style={[
                myStyles.flex1,
                { backgroundColor: theme.colors.background },
              ]}>
              <View style={styles.container}>
                <CustomInputText
                  iconProps={{ name: 'at', size: 25 }}
                  inputProps={{
                    placeholder: 'Login',
                    placeholderTextColor: theme.colors.inputTextColor,
                  }}
                />
                <CustomInputText
                  iconProps={{ name: 'lock', size: 25 }}
                  inputProps={{
                    placeholder: 'Senha',
                    secureTextEntry: true,
                    placeholderTextColor: theme.colors.inputTextColor,
                  }}
                />

                <CustomButton
                  iconProps={{ name: 'user', size: 25 }}
                  buttonProps={{
                    onPress: () => {
                      Alert.alert('test');
                    },
                  }}
                  style={styles.button}>
                  Logar
                </CustomButton>
                <View>
                  <CustomTextButton
                    textProps={{}}
                    onPress={() => {
                      Alert.alert('aaaa');
                    }}>
                    Putz, esqueci a senha
                  </CustomTextButton>
                  <CustomTextButton
                    textProps={{}}
                    onPress={() => {
                      Alert.alert('aaaa');
                    }}>
                    Sou novo aqui, quero me cadastrar
                  </CustomTextButton>
                </View>
              </View>
            </View>
            {/*
          <View style={myStyles.flex1}>
            <TextInput style={myStyles.inputText} placeholder="Login" />
            <TextInput
              style={[myStyles.inputText, { marginTop: 10 }]}
              placeholder="Senha"
            />
            <Pressable
              title="Entrar"
              style={[myStyles.button, { marginTop: 20 }]}
              onPress={() => navigation.navigate('Menu')}>
              <Text style={{ color: '#fff' }}>Entrar</Text>
            </Pressable>
            <Pressable
              title="Entrar"
              style={{ marginTop: 20 }}
              onPress={() => navigation.navigate('Register')}>
              <Text style={{ color: '#fff' }}>Me registra aê!</Text>
            </Pressable>
            <Pressable title="Entrar" style={{ marginTop: 20 }}>
              <Text style={{ color: '#fff' }}>Putz, esqueci a senha!</Text>
            </Pressable>
          </View> */}
          </SafeAreaView>
        </ThemeProvider>
      )}
    </ThemeContext.Consumer>
  );
}

export default LoginView;
