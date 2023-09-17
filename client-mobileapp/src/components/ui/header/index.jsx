import React from 'react';
import styles from './styles';
import { Image, Text, View } from 'react-native';

const Header = ({ ScreenName, ParkingName }) => {
  return (
    <View style={styles.container}>
        <View style={styles.content}>
          <Image source={require('../../../../assets/images/back.png')} />
          <View style={styles.text}>
            <Text style={styles.title}>{ScreenName}</Text>
            <Text style={styles.subtitle}>{ParkingName}</Text>
          </View>
        </View>
    </View>
  )
}

export default Header;