import React from 'react';
import styles from './styles';
import Map from '../../components/ui/map';
import { View } from 'react-native';
import Header from '../../components/ui/header';
import { useSelector } from 'react-redux';
import Footer from '../../components/ui/footer';
import MapDirections from '../../components/ui/mapDirection';

const Directions = () => {
    const selectedParking = useSelector((state) => state.selectedParking);

  return (
    <View style={styles.container}>
        <Header ScreenName={'Directions'} ParkingName={selectedParking.name}/>
        <MapDirections />
        <Footer />
    </View>
  )
}

export default Directions;