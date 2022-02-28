import {useTheme} from '@react-navigation/native';
import React, {useReducer} from 'react';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Modalize} from 'react-native-modalize';
// import Modalize from 'react-native-modalize';
import {ModalSpaces} from '../components/modalSpaces';
import myStyles from '../styles/myApp';
const Sandbox = () => {
  // const onOpen = ()=>{
  const reducerFN = (state, action) => {
    switch (action.type) {
      case 'DEV':
        return 'DEV AREA';
      case 'PROD':
        return 'PRODUCTION';
      default:
        return 'DEV';
    }
  };
  const [env, setEnv] = useReducer(reducerFN, 'DEV');
  const {colors} = useTheme();

  const ref = React.createRef<Modalize>();

  // }
  const onOpen = () => {
    ref.current?.open();
  };
  return (
    <>
      <View
        style={[
          myStyles.flex1,
          // myStyles.alignAllCenter,
          myStyles.directionCol,
          {
            justifyContent: 'flex-start',
            alignItems: 'stretch',
          },
        ]}>
        <View
          style={{
            flex: 1,
            // height: 120,
            backgroundColor: colors.darkerBackground,
            justifyContent: 'flex-start',
            alignContent: 'stretch',
          }}>
          <Text>Teste</Text>
          {/* <Image
          source={space.image}
          resizeMode="contain"
          style={{
            width: '50%',
            backgroundColor: '#fff',
            alignSelf: 'center',
          }}
        /> */}
        </View>
        <View style={{flex: 4}}>
          <Text>Texto</Text>
          <Text>Texto</Text>
          <Text>Texto</Text>
          <Text>Texto</Text>
          <Text>Texto</Text>
          <Text>Texto</Text>
          <Text>Texto</Text>
          <Text>Texto</Text>
          <Text>Texto</Text>
          <Text>Texto</Text>
          <Text>Texto</Text>
          <Text>Texto</Text>
        </View>{' '}
        <Modalize
          ref={modalizeRef}
          snapPoint={400}
          scrollViewProps={{contentContainerStyle: {height: '100%'}}}
          modalStyle={{backgroundColor: colors.background}}>
          <View
            style={[
              myStyles.flex1,
              // myStyles.alignAllCenter,
              myStyles.directionCol,
              {
                justifyContent: 'flex-start',
                alignItems: 'stretch',
              },
            ]}>
            <View
              style={{
                flex: 1,
                // height: 120,
                backgroundColor: colors.darkerBackground,
                // justifyContent: 'flex-start',
                // alignContent: 'stretch',
              }}>
              <Image
                source={space.image}
                resizeMode="contain"
                style={{
                  width: '50%',
                  backgroundColor: '#fff',
                  alignSelf: 'center',
                }}
              />
            </View>
            <View style={{flex: 4}}>
              <Text>Texto</Text>
              <Text>Texto</Text>
              <Text>Texto</Text>
              <Text>Texto</Text>
              <Text>Texto</Text>
              <Text>Texto</Text>
              <Text>Texto</Text>
              <Text>Texto</Text>
              <Text>Texto</Text>
              <Text>Texto</Text>
              <Text>Texto</Text>
              <Text>Texto</Text>
            </View>
          </View>
        </Modalize>
      </View>
    </>
  );
};
export default Sandbox;
