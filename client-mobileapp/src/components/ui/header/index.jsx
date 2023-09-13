import React from 'react';
import styles from './styles';
import { Text, View } from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Spot Reservation</Text>
    </View>
  )
}

export default Header;