import React, {useEffect} from 'react';
import {View, Dimensions} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import myStyles from '../styles/myApp';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import ImageViewer from '../components/ImageViewer';
import {TextInput} from 'react-native-paper';
const ShowSpace = ({route, navigation}) => {
  console.log('showSpace', route.params.Name);
  const {colors} = useTheme();
  const {height} = Dimensions.get('screen');
  // useEffect(() => {
  //   const backAction = () => {
  //     setIsEditing(null);
  //     return true;
  //   };
  //   const backHandler = BackHandler.addEventListener(
  //     'hardwareBackPress',
  //     backAction,
  //   );

  //   return () => backHandler.remove();
  // }, []);
  // return (
  //   <SafeAreaView>
  //     <Text>
  //       Olá mundo {ctx.space.name} {ctx.isEditing}
  //     </Text>
  //   </SafeAreaView>
  // );
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
      backgroundColor: 'red',
      height: height * 0.15,
      justifyContent: 'flex-end' as 'flex-end',
      alignItems: 'flex-end' as 'flex-end',
    },
  };

  return (
    <SafeAreaView style={pageStyles.wrapper}>
      <View style={{flex: 1, marginBottom: 5}}>
        <ImageViewer />
      </View>
      <ScrollView>
        <View style={{flexDirection: 'column', backgroundColor: 'red'}}>
          <TextInput placeholder="Nome" />
          <TextInput placeholder="Nome" />
          <TextInput placeholder="Nome" />
          <TextInput placeholder="Nome" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ShowSpace;
