import React, { useEffect } from 'react'
import { View } from 'react-native'
import Header from '../../components/ui/header'
import Footer from '../../components/ui/footer'
import styles from './styles'
import Button from '../../components/base/button'
import Ticket from '../../components/ui/ticket'
import { useDispatch, useSelector } from 'react-redux'
import { setReservation } from '../../redux/reservation/reservationSlice'
import axios from 'axios'

const ReservationTicket = () => {
  const dispatch = useDispatch();
  const reservation = useSelector((state) => state.reservation)
  const selectedParking = useSelector((state) => state.selectedParking)
  const selectedSlot = useSelector((state) => state.selectedSlot)
  const user = useSelector((state) => state.user)

  const reserve = async () => {
    const currentDate = new Date();
    
    const time_reserved = currentDate.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });
    
    const date_reserved = currentDate.toLocaleDateString('en-US');

    const data = {
      'user_id': user.id,
      'parking_id': selectedParking.id,
      'spot_id': selectedSlot.id,
      'total': reservation.total,
      'duration': reservation.duration,
      'plate_number': reservation.plate_number,
      'phone_number': reservation.phone_number,
      'time_reserved': reservation.time_reserved,
      'date_reserved': reservation.date_reserved,
      'token': user.token,
    }

    try{
      const response = await axios.post('http://127.0.0.1:8000/api/reserve', data);
    dispatch(setReservation(response.data.data));

    }catch(error){
      console.log('Reservation error ' , error)
    }
  }

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