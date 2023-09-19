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

const Spots = () => {
  const selectedSlot = useSelector((state) => state.selectedSlot);
  const selectedParking = useSelector((state) => state.selectedParking);
  const dispatch = useDispatch();
  const reservation = useSelector((state) => state.reservation);

  // console.log(reservation)

// useEffect(() => {
//   dispatch(clearReservation);
// }, []);

  return (
    <View style={styles.container}>
      <Header ScreenName={'Spot Reservation'} ParkingName={selectedParking.name} />
      <Text style={styles.title}>Select a Spot</Text>
      <Slots />
      <Button text={'Next'} navigate={'ReservationInfo'} />
      <Footer />
    </View>
  )
}

export default Spots;