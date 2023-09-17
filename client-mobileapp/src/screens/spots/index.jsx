import React from 'react';
import styles from './styles';
import { Text, TouchableOpacity, View } from 'react-native';
import Slots from '../../components/ui/slots';
import Header from '../../components/ui/header';
import Footer from '../../components/ui/footer';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

const Spots = () => {
  const navigation = useNavigation();
  const selectedSlot = useSelector((state) => state.selectedSlot);
  const selectedParking = useSelector((state) => state.selectedParking);

  const navigateToReservationInfo = () => {
    console.log('next: ' + selectedSlot);
    console.log(selectedSlot);
    if(selectedSlot !== null) {
      navigation.navigate('ReservationInfo');
    }
  }

  return (
    <View style={styles.container}>
      <Header ScreenName={'Spot Reservation'} ParkingName={selectedParking.name} />
      <Text style={styles.title}>Select a Spot</Text>
      <Slots />
      <TouchableOpacity style={styles.nextButton} onPress={navigateToReservationInfo}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
      <Footer />
    </View>
  )
}

export default Spots;