import React from 'react';
import {Alert, Button, Dimensions, ScrollView, View} from 'react-native';
import SpaceListDetail from '../components/SpaceDetailImage';
import myStyles from '../styles/myApp';
// @ts-ignore
// import {SafeAreaView} from 'react-native-screens';
// @ts-ignore
import {SafeAreaView} from 'react-native-safe-area-context';
const IndexView = ({navigation}) => {
  const dimScreen = Dimensions.get('window');
  return (
    <SafeAreaView style={[myStyles.flex1, myStyles.viewContainer]}>
      <ScrollView>
        <View
          style={{
            flex: 1,
            flexDirection: 'column-reverse',
            height: dimScreen.height,
          }}>
          <SpaceListDetail customStyle={{margin: 5}} />
          <SpaceListDetail customStyle={{margin: 5}} />
          <SpaceListDetail customStyle={{margin: 5}} />
          <SpaceListDetail customStyle={{margin: 5}} />
          <SpaceListDetail customStyle={{margin: 5}} />
          <SpaceListDetail customStyle={{margin: 5}} />
          <SpaceListDetail customStyle={{margin: 5}} />
        </View>
      </ScrollView>
      <View>
        <Button
          title="Novo espaço"
          onPress={() => Alert.alert('Novo espaço')}
        />
      </View>
    </SafeAreaView>
  );
};

export default IndexView;
