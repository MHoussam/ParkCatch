import React, { useEffect } from 'react'
import { View } from 'react-native'
import Header from '../../components/ui/header'
import Footer from '../../components/ui/footer'
import styles from './styles'
import Button from '../../components/base/button'
import Ticket from '../../components/ui/ticket'
import { useDispatch } from 'react-redux'
import { setReservation } from '../../redux/reservation/reservationSlice'

const ReservationTicket = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const currentDate = new Date();
    
    const time_reserved = currentDate.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });
    
    const date_reserved = currentDate.toLocaleDateString('en-US');

    dispatch(setReservation({ time_reserved: time_reserved, date_reserved: date_reserved }));
  }, []);

  return (
    <View style={styles.container}>
        <Header ScreenName={'Reservation Ticket'} />
        <View style={styles.ticket}>
          <Ticket />
          <Button text={'Get Directions'} navigate={'Directions'} />
        </View>
    </View>
  )
}

export default ReservationTicket