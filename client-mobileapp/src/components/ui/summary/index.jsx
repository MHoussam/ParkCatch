import React from 'react'
import { Text, View } from 'react-native'
import Info from '../../base/info'
import styles from './styles'
import { useSelector } from 'react-redux'
import selectedSlotSlice from '../../../redux/selectedSlot/selectedSlotSlice'

const Summary = () => {
    const user = useSelector((state) => state.user);
    const selectedParking = useSelector((state) => state.selectedParking);
    const selectedSlot = useSelector((state) => state.selectedSlot);
console.log(user)

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Summary</Text>
        <View style={styles.row}>
            <View style={styles.leftContent}>
                <Info styleText={styles.subtitle} text={'Client'} />
                <Info styleText={styles.info} text={user.firstname + ' ' + user.lastname} />
            </View>
            <View>
                <Info styleText={styles.subtitle} text={'Phone Number'} />
                <Info styleText={styles.info} text={'+96171218886'} />
            </View>
        </View>
        
        <View style={styles.row}>
            <View style={styles.leftContent}>
                <Info styleText={styles.subtitle} text={'Parking'} />
                <Info styleText={styles.info} text={selectedParking.name} />
            </View>
            <View>
                <Info styleText={styles.subtitle} text={'Location'} />
                <Info styleText={styles.info} text={selectedParking.address} />
            </View>
        </View>
        
        <View style={styles.row}>
                <Info styleText={styles.subtitle} text={'Duration'} />
                <Info styleText={styles.info} text={'2'} />
            
        </View>
        
    </View>
  )
}

export default Summary