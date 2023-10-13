import React, { useEffect } from 'react';
import styles from './styles';
import { Text, TouchableOpacity, View } from 'react-native';
import Slots from '../../components/ui/slots';
import Header from '../../components/ui/header';
import Footer from '../../components/ui/footer';
import { useDispatch, useSelector } from 'react-redux';
// import { useNavigation } from '@react-navigation/native';
import Button from '../../components/base/button';
import { setDuration, setReservation } from '../../redux/reservation/reservationSlice';
// import { clearReservation } from '../../redux/reservation/reservationSlice';
// import { clearSlots } from '../../redux/slots/slotSlice';

const Spots = () => {
  const slots = useSelector((state) => state.slots);
  const user = useSelector((state) => state.user);
  const selectedParking = useSelector((state) => state.selectedParking);
  const selectedSlot = useSelector((state) => state.selectedSlot);
  const reservation = useSelector((state) => state.reservation);
  const dispatch = useDispatch();

  const setReserv = () => {
    dispatch(
      setReservation({
        client: user.first_name + " " + user.last_name,
        parking: selectedParking.name,
        location: selectedParking.address,
        spotNumber: selectedSlot.name,
        total: parseInt(reservation.duration) * selectedParking.price,
      })
    );

    dispatch(
      setDuration({
        duration: reservation.duration,
        total: reservation.duration * selectedParking.price, 
      })
    );
  }

  console.log(slots)
  return (
    <View style={styles.container}>
      <Header ScreenName={'Spot Reservation'} />
      <View style={styles.spots}>
        {slots.slots.length > 0 ? (
          <Text style={styles.title}>Select a Spot</Text>
        ) : <></>}
        <Slots />
        {slots.slots.length > 0 ? (
          <Button text={'Next'} navigate={'ReservationInfo'} callBack={setReserv} />
        ) : <></>}
      </View>
    </View>
  )
}

export default Spots;