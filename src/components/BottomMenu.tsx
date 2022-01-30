import React from 'react';
import {Component, ReactNode} from 'react';
import {Pressable, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import myStyles from '../../styles/myApp';
class BottomMenu extends Component {
  render(): ReactNode {
    return (
      <>
        <View
          style={{
            flex: 1,
            justifyContent: 'space-around',
            flexDirection: 'row',
            width: '100%',
            position: 'absolute',
            bottom: 0,
            left: 0,
          }}>
          <Pressable>
            <Text style={myStyles.menuButton}>
              <Icon name="home" size={44} />
            </Text>
          </Pressable>
          <Pressable>
            <Text style={myStyles.menuButton}>
              <Icon name="qrcode" size={44} />
            </Text>
          </Pressable>
          <Pressable>
            <Text style={myStyles.menuButton}>
              <Icon name="bars" size={44} />
            </Text>
          </Pressable>
        </View>
      </>
    );
  }
}

export default BottomMenu;
