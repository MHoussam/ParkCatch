import React, { useEffect, useState } from 'react'
import { ScrollView, Text, View } from 'react-native'
import Header from '../../components/ui/header';
import Footer from '../../components/ui/footer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import ReservationCard from '../../components/base/reservationCard';
import styles from './styles'

const Reservations = () => {
  const [ reservations, setReservations ] = useState([]);

    const fetchReservations = async () => {
        const token = await AsyncStorage.getItem('userToken');
        const user = await AsyncStorage.getItem('userData');
        const userData = JSON.parse(user);
console.log(userData.id)
        const data = {
            user_id: userData.id,
            token: token,
        }
        console.log('ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo')

        const response = await axios.post('http://127.0.0.1:8000/api/reservations', data);
        console.log('mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm')
        console.log(response.data.data)
        setReservations(response.data.data)
    }

    useEffect(() => {
        fetchReservations();
    }, [])
  return (
    <View style={{flex:1}}>
        <Header ScreenName={'Reservations'}/>
        <View style={{flex:1}}>
        <ScrollView>
          {reservations.map((reservation, index) => (
            <ReservationCard key={index} reservations={reservation} setReservations={setReservations} />
          ))}
        </ScrollView>
        </View>
    </View>
  )
}

export default Reservations;