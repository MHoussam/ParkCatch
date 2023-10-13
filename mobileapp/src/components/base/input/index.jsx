import React, { useState } from 'react'
import { Text, TextInput, View } from 'react-native'
import styles from './styles'
import { setReservation } from '../../../redux/reservation/reservationSlice';
import { useDispatch } from 'react-redux';
import { DATE_FORMAT } from 'react-native-gifted-chat';

const Input = ({ styleText, text, label, type, card=false, callBack }) => {
  const dispatch = useDispatch();
  const [isPasscode, setIsPasscode] = useState(false);

  const handleInputChange = (value) => {
    let correctedValue;
    if(type==='number') {
      const replacedValue = value.replace(/[^0-9]/g, '');
      correctedValue = parseInt(replacedValue, 10);
    } else if(type==='text') {
      correctedValue = value.replace(/[^a-zA-Z0-9]/g, '');
    } else if(type==='date') {
      // dispatch(setReservation({ [label]: value }));
    } else if(type==='passcode') {
      const replacedValue = value.replace(/[^0-9]/g, '');
      correctedValue = parseInt(replacedValue, 10);
      setIsPasscode(true);
      // dispatch(setReservation({ [label]: correctedValue }));
    }

    callBack(correctedValue)
  }

  const keyboardType = type==='text' ? 'default' : 'numeric';
  const maxLength = type==='text' ? 50 : card ? 16 : 8;

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