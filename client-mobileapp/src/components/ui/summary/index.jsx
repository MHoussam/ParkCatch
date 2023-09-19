import React from 'react'
import { Text, View } from 'react-native'
import Info from '../../base/info'
import styles from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { setReservation } from '../../../redux/reservation/reservationSlice'

const Summary = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);
    const selectedParking = useSelector((state) => state.selectedParking);
    const selectedSlot = useSelector((state) => state.selectedSlot);
    const reservation = useSelector((state) => state.reservation);

    console.log(reservation)
    console.log(reservation.duration)

    dispatch(setReservation({client: user.firstname + ' ' + user.lastname, parking: selectedParking.name, location: selectedParking.address, spotNumber: selectedSlot.name, total: parseInt(reservation.duration) * 2}));

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Summary</Text>
        <View style={styles.row}>
            <View style={styles.leftContent}>
                <Info styleText={styles.subtitle} text={'Client'} />
                <Info styleText={styles.info} text={reservation.client} />
            </View>
            <View>
                <Info styleText={styles.subtitle} text={'Phone Number'} />
                <Info styleText={styles.info} text={'+96171218886'} />
            </View>
        </View>
        
        <View style={styles.row}>
            <View style={styles.leftContent}>
                <Info styleText={styles.subtitle} text={'Parking'} />
                <Info styleText={styles.info} text={reservation.parking} />
            </View>
            <View>
                <Info styleText={styles.subtitle} text={'Location'} />
                <Info styleText={styles.info} text={reservation.location} />
            </View>
        </View>
        
        <View style={styles.row}>
            <View style={styles.leftContent}>
                <Info styleText={styles.subtitle} text={'Duration'} />
                <Info styleText={styles.info} text={reservation.duration} />
            </View>
            <View>
                <Info styleText={styles.subtitle} text={'Spot Number'} />
                <Info styleText={styles.info} text={reservation.spotName} />
            </View>
        </View>
        <View style={styles.row}>
            <View style={styles.leftContent}>
                <Info styleText={styles.subtitle} text={'Plate Number'} />
                <Info styleText={styles.info} text={'2'} />
            </View>
            <View>
                <Info styleText={styles.subtitle} text={'Total'} />
                <Info styleText={styles.info} text={reservation.total} />
            </View>
        </View>
    </View>
  )
}

export default Summary