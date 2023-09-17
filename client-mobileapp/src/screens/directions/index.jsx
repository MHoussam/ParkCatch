import React from 'react';
// import style from './styles';
import Map from '../../components/ui/map';
import { View } from 'react-native';
import Header from '../../components/ui/header';
import { useSelector } from 'react-redux';

const Directions = () => {
    const selectedParking = useSelector((state) => state.selectedParking);

  return (
    <View>
        <Header ScreenName={'Directions'} ParkingName={selectedParking.name}/>
        <Map />
        <Footer />
    </View>
  )
}

export default Directions;