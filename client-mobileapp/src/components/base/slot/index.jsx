import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const Slot = ({ number, styleContainer, styleTitle, onPress, isSelected }) => {

  // console.log('is selected? ' + isSelected)
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styleContainer, isSelected ? styles.slotContainer : null]}>
        <Text style={[styleTitle, isSelected ? styles.slotTitle : null]}>
          {number}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Slot;