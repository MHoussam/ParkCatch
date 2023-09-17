import React from 'react'
import { View } from 'react-native'
import Header from '../../components/ui/header';
import Footer from '../../components/ui/footer';
import styles from './styles';
import { useSelector } from 'react-redux';

const ReservationInfo = () => {
    const selectedParking = useSelector((state) => state.selectedParking);

  return (
    <View style={styles.container}>
        <Header ScreenName={'Reservation Info'} ParkingName={selectedParking.name} />
        <Footer />
    </View>
  )
}

export default ReservationInfo;