import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

const Slot = ({ number, style }) => {

  // console.log(style)
  return (
    <View style={style}>
        <Text style={styles.title}>{number}</Text>
    </View>
  )
}

export default Slot;