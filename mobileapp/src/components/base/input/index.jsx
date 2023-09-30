import React, { useState } from 'react'
import { Text, TextInput, View } from 'react-native'
import styles from './styles'
import { setReservation } from '../../../redux/reservation/reservationSlice';
import { useDispatch } from 'react-redux';
import { DATE_FORMAT } from 'react-native-gifted-chat';

const Input = ({ styleText, text, label, type }) => {
  const dispatch = useDispatch();
  const [isPasscode, setIsPasscode] = useState(false);

  const handleInputChange = (value) => {
    if(type==='number') {
      const replacedValue = value.replace(/[^0-9]/g, '');
      const correctedValue = parseInt(replacedValue, 10);
      dispatch(setReservation({ [label]: correctedValue }));
    } else if(type==='text') {
      const correctedValue = value.replace(/[^a-zA-Z0-9]/g, '');
      dispatch(setReservation({ [label]: correctedValue }));
    } else if(type==='date') {
      dispatch(setReservation({ [label]: value }));
    } else if(type==='passcode') {
      const replacedValue = value.replace(/[^0-9]/g, '');
      const correctedValue = parseInt(replacedValue, 10);
      setIsPasscode(true);
      dispatch(setReservation({ [label]: correctedValue }));
    }
  }

  const keyboardType = type==='text' ? 'default' : 'numeric';
  const maxLength = type ? 8 : 12;

  return (
    <View>
        <Text style={styleText}>{text}</Text>
        <TextInput
        style={styles.input}
        onChangeText={handleInputChange}
        maxLength={maxLength}
        keyboardType={keyboardType}
        secureTextEntry={isPasscode}
        />
    </View>
  )
}

export default Input