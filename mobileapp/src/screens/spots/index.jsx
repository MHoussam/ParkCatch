import React, { useEffect } from 'react';
import styles from './styles';
import { Text, TouchableOpacity, View } from 'react-native';
import Slots from '../../components/ui/slots';
import Header from '../../components/ui/header';
import Footer from '../../components/ui/footer';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import Button from '../../components/base/button';
import { clearReservation } from '../../redux/reservation/reservationSlice';
import { clearSlots } from '../../redux/slots/slotSlice';

const Spots = () => {
  const slots = useSelector((state) => state.slots);
  const selectedParking = useSelector((state) => state.selectedParking);

  const dispatch = useDispatch();
  useEffect(() => {
    return () => {
      dispatch(clearSlots());
    }
  }, [])

  return (
    <View style={styles.container}>
      <Header ScreenName={'Spot Reservation'} />
      <View style={styles.spots}>
        {slots.slots.length > 0 ? (
          <Text style={styles.title}>Select a Spot</Text>
        ) : <></>}
        <Slots />
        {slots.slots.length > 0 ? (
          <Button text={'Next'} navigate={'ReservationInfo'} />
        ) : <></>}
      </View>
    </View>
  )
}

export default Spots;