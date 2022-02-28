import React, {createContext, useRef, useState} from 'react';
import {Alert, Button, ScrollView, View} from 'react-native';
import SpaceListDetail from '../components/SpaceDetailImage';
import myStyles from '../styles/myApp';
// @ts-ignore
// import {SafeAreaView} from 'react-native-screens';
// @ts-ignore
import ShowSpace from './ShowSpace';
import {Portal} from 'react-native-paper';
type typeSpace = {
  id: Number;
  name: String;
  qtTables: Number;
  sector: String;
  description: String;
  image: String;
};

type typeSpaceContext = {
  space?: typeSpace;
  spaces?: Array<typeSpace>;
  setSpace?: React.Dispatch<typeSpace>;
  isEditing?: Boolean;
  setIsEditing?: React.Dispatch<Boolean>;
};

export const mySpacesContext = createContext<typeSpaceContext>({});
const spacesMock = [
  {
    id: 1,
    name: 'Primeiro espaço',
    qtTables: 2,
    sector: 'fora',
    description: 'Um lugar bom pra fumar, comer e papear.',
    image: require('../../assets/externa.png'),
  },
  {
    id: 2,
    name: 'Segundo espaço',
    qtTables: 2,
    sector: 'interno',
    description: 'Um lugar para uma conversa mais reservada.',
    image: require('../../assets/interna.png'),
  },
  {
    id: 3,
    name: 'Terceiro espaço',
    qtTables: 2,
    sector: 'proximoParede',
    description: 'Um lugar pra comer rápido e ter sua privacidade preservada.',
    image: require('../../assets/interna.png'),
  },
];
const IndexView = ({navigation}) => {
  const [isEditing, setIsEditing] = useState(null);
  const [spaces, setSpaces] = useState<typeSpace[]>(spacesMock);
  const [space, setSpace] = useState<typeSpace>({
    name: '',
    id: null,
    sector: '',
    qtTables: 0,
    description: '',
    image: '',
  });
  const onOpen = spaceParam => {
    setSpace(spaceParam);
    setIsEditing(spaceParam ? true : null);
    console.log('ShowSpace');
    // navigation.navigate('ShowSpace');
    // modalizeRef.current?.open();
  };

  // useEffect(() => {
  //   const backAction = () => {
  //     navigation.navigate('MySpaces');
  //     return true;
  //   };
  //   if (isEditing !== null) {
  //     setIsEditing(null);
  //   }
  //   const backHandler = BackHandler.addEventListener(
  //     'hardwareBackPress',
  //     backAction,
  //   );

  //   return () => backHandler.remove();
  // }, []);

  return (
    <mySpacesContext.Provider
      value={{space, setSpace, isEditing, setIsEditing}}>
      <View
        style={[
          myStyles.flex1,
          myStyles.viewContainer,
          {display: isEditing !== null ? 'none' : 'flex'},
        ]}>
        <ScrollView>
          <View style={[myStyles.reverseFlex1]}>
            {spaces.map(spaceParam => (
              <SpaceListDetail
                customStyle={{margin: 5}}
                space={spaceParam}
                onPress={() => onOpen(spaceParam)}
                key={spaceParam.id.toString()}
              />
            ))}
          </View>
        </ScrollView>
        <View>
          <Button
            title="Novo espaço"
            onPress={() => navigation.navigate('ShowSpace', {Name: space})}
          />
        </View>
      </View>
    </mySpacesContext.Provider>
  );
};

export default IndexView;
