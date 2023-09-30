import React from 'react';
import styles from './styles';
import { Image, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

const Header = ({ ScreenName, mainScreen=false }) => {
  const navigation = useNavigation();
  const selectedParking = useSelector((state) => state.selectedParking)

  const back = () => {
    navigation.pop();
  }

  return (
    <View style={[styles.container , mainScreen===true? {alignItems: 'center'} : {}]}>
        <View style={[styles.content , mainScreen===true? {marginLeft: 0} : {marginLeft: 20}]}>
          {mainScreen === false ? (
          <TouchableOpacity onPress={back} >
            <Image source={require('../../../../assets/images/back.png')} />
          </TouchableOpacity>
          ) : <></>}
          <View style={styles.text}>
            <Text style={[styles.title , mainScreen===true? {fontSize: 19} : {}]}>
              {ScreenName}
            </Text>
            {mainScreen === false ? (
            <Text style={styles.subtitle}>{selectedParking.name}</Text>
            ) : <></>}
          </View>
        </View>
    </View>
  )
}

export default Header;