import React from 'react'
import { Text, TextInput, View } from 'react-native'
import styles from './styles'
import { setReservation } from '../../../redux/reservation/reservationSlice';
import { useDispatch } from 'react-redux';

const Input = ({ styleText, text, label, type }) => {
  const dispatch = useDispatch();

  const handleInputChange = (value) => {
    console.log('show: ' + value)
    dispatch(setReservation({[label]: value}));
  }

  const keyboardType = type ? 'numeric' : 'default';
  

  return (
    <View>
        <Text style={styleText}>{text}</Text>
        <TextInput
        style={styles.input}
        onChangeText={handleInputChange}
        maxLength={8}
        keyboardType={keyboardType}
      />
    </View>
  )
}

export default Input