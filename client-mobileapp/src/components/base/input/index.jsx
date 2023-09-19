import React from 'react'
import { Text, TextInput, View } from 'react-native'
import styles from './styles'
import { setReservation } from '../../../redux/reservation/reservationSlice';
import { useDispatch } from 'react-redux';

const Input = ({ styleText, text, label, type }) => {
  const dispatch = useDispatch();

  const handleInputChange = (value) => {
    if(type) {
      const replacedValue = value.replace(/[^0-9]/g, '');
      const correctedValue = parseInt(replacedValue, 10);
      dispatch(setReservation({ [label]: correctedValue }));
    } else {
      const correctedValue = value.replace(/[^a-zA-Z0-9]/g, '');
      dispatch(setReservation({ [label]: correctedValue }));
    }
  }

  const keyboardType = type ? 'numeric' : 'default';
  const maxLength = type ? 8 : 12;

  return (
    <View>
        <Text style={styleText}>{text}</Text>
        <TextInput
        style={styles.input}
        onChangeText={handleInputChange}
        maxLength={maxLength}
        keyboardType={keyboardType}
      />
    </View>
  )
}

export default Input