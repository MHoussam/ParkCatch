import React from 'react'
import { View } from 'react-native'
import Duration from '../../base/duration';
import styles from './styles'
import Input from '../../base/input';
import { setDuration, setPhone, setPlate } from '../../../redux/reservation/reservationSlice';
import { useDispatch, useSelector } from 'react-redux';

const InfoForm = () => {
  const selectedParking = useSelector((state) => state.selectedParking);
  const dispatch = useDispatch();

  const plate = (value) => {
    dispatch(
      setPlate({
        plateNumber: value,
      })
    );
  }

  const phone = (value) => {
    dispatch(
      setPhone({
        phone: value,
      })
    );
  }
  
  const duration = (value) => {
    dispatch(
      setDuration({
        duration: value,
        total: value * selectedParking.price,
      })
    );
  }

  return (
    <View style={styles.container}>
        <Duration styleText={styles.title} callBack={(value) => duration(value)} />
        <Input styleText={styles.title} text={'License Plate Number'} callBack={(value) => plate(value)} type='text'/>
        <Input styleText={styles.title} text={'Phone Number'} callBack={(value) => phone(value)} type='number'/>
    </View>
  )
}

export default InfoForm;