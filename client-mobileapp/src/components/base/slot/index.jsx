import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

const Slot = ({ number, styleContainer, styleTitle }) => {

  // console.log(style)
  return (
    <View style={styleContainer}>
        <Text style={styleTitle}>{number}</Text>
    </View>
  )
}

export default Slot;