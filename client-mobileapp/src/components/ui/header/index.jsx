import React from 'react';
import styles from './styles';
import { Image, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const Header = ({ ScreenName, ParkingName }) => {
  const navigation = useNavigation();

  const back = () => {
    navigation.pop();
  }

  return (
    <View style={styles.container}>
        <View style={styles.content}>
          <TouchableOpacity onPress={back} >
            <Image source={require('../../../../assets/images/back.png')} />
          </TouchableOpacity>
          <View style={styles.text}>
            <Text style={styles.title}>{ScreenName}</Text>
            <Text style={styles.subtitle}>{ParkingName}</Text>
          </View>
        </View>
    </View>
  )
}

export default Header;