import React from 'react'
import { Image, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import styles from './styles'
import { useSelector } from 'react-redux'

const ReservationCard = ({ reservations}) => {
  // const reservations = useSelector((state) => state.reservations)
  console.log('sssssssssssssssssssssssssssssss')
  console.log(reservations.parking.photo)
  const navigateToDirection = () => {

  }

  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.reservationCard} onPress={navigateToDirection}>
           <Image
                style={styles.parkingPhoto}
                source={{
                  uri: `http://127.0.0.1:8000/images/parkings/${reservations.parking.photo}`,
                }}
              />
                <View style={styles.cardInfo} >
                  <Text style={[styles.bold, styles.size16]}>{reservations.parking.name}</Text>
                  <View style={styles.cardInfoRow} >
                    <Text style={[styles.bold, styles.size13, styles.address]}>{reservations.parking.address}</Text>
                    <Text style={[styles.bold, styles.size15, styles.status]}>Completed</Text>
                  </View>
                  <View style={styles.cardInfoRow} >
                    <Text style={[styles.bold, styles.size13 ]}>{reservations.duration} hrs</Text>
                    <Text style={[styles.bold, styles.size13 ]}>Spot A-3</Text>
                  </View>
                  <View style={styles.cardInfoRow} >
                    <Text style={[styles.bold, styles.size13 ]}>9:00 am</Text>
                    <Text style={[styles.bold, styles.size13 ]}>09/06/2023</Text>
                  </View>
                  <View style={styles.cardInfoRow} >
                    <Text style={[styles.bold, styles.size13 ]}>9:00 am</Text>
                    <Text style={[styles.bold, styles.size13 ]}>{reservations.plate_number}</Text>
                  </View>
                </View>
        </TouchableOpacity> 
    </View>
  )
}

export default ReservationCard