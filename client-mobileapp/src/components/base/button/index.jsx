import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import styles from './styles'
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

const Button = ({ text, navigate }) => {
  const selectedSlot = useSelector((state) => state.selectedSlot);
  const navigation = useNavigation();

    const navigateTo = () => {
        if(selectedSlot.id !== null) {
          navigation.navigate(`${navigate}`);
        }
    }

  return (
    <TouchableOpacity style={styles.nextButton} onPress={navigateTo} >
        <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  )
}

export default Button