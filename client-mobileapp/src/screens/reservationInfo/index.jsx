import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import Header from '../../components/ui/header';
import Footer from '../../components/ui/footer';
import styles from './styles';
import { useSelector } from 'react-redux';
import Map from '../../components/ui/map';
import Button from '../../components/base/button';

const ReservationInfo = () => {
    const selectedParking = useSelector((state) => state.selectedParking);

  return (
    <View style={styles.container}>
        <Header ScreenName={'Reservation Info'} ParkingName={selectedParking.name} />
        <InfoForm />
        <Button text={'Proceed to Payment'} navigate={'Directions'}/>
        <Footer />
    </View>
  )
}

export default ReservationInfo;