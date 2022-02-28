import React, {useEffect, useRef, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Modalize} from 'react-native-modalize';

export const ModalSpaces = React.forwardRef((props, ref) => {
  const [isEditing, setIsEditing] = useState(false);
  useEffect(() => {
    setIsEditing(!!props.isEditing);
  }, [ref]);
  // const modalizeRef = useRef(null);
  return (
    <>
      <Modalize ref={ref} snapPoint={400}>
        <Text> Texto </Text>
      </Modalize>
    </>
  );
});
