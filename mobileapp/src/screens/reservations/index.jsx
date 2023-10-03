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
        const data = {
            user_id: userData.id,
            token: token,
        }

        const response = await axios.post('http://127.0.0.1:8000/api/reservations', data);
        setReservations(response.data.data)
    }

    useEffect(() => {
        fetchReservations();
    }, [])

  return (
    <View style={styles.container}>
        <Header ScreenName={'Reservations'} mainScreen={true}/>
        <View style={styles.container}>
        <ScrollView contentContainerStyle={{ paddingTop: 25 }}>
          {reservations.map((reservation, index) => (
             <View key={reservation.id} style={styles.cardContainer}>
              <ReservationCard reservations={reservation} />
            </View>
          ))}
        </ScrollView>
        </View>
    </View>
  )
}

export default Reservations;