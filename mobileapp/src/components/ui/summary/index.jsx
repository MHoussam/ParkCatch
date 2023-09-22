import React from 'react'
import { Text, View } from 'react-native'
import Info from '../../base/info'
import styles from './styles'
import { useSelector } from 'react-redux'

const Summary = ({ styleContainer, styleSubtitle, styleInfo, styleLeftContent }) => {
    const reservation = useSelector((state) => state.reservation);

    console.log(styleLeftContent)
    // console.log(reservation.duration)

  return (
    <View style={styleContainer}>
        <View style={styles.row}>
            <View style={styleLeftContent}>
                <Info styleText={styleSubtitle} text={'Client'} />
                <Info styleText={styleInfo} text={reservation.client} />
            </View>
            <View>
                <Info styleText={styleSubtitle} text={'Phone Number'} />
                <Info styleText={styleInfo} text={'+961' + reservation.phone} />
            </View>
        </View>
        
        <View style={styles.row}>
            <View style={styleLeftContent}>
                <Info styleText={styleSubtitle} text={'Parking'} />
                <Info styleText={styleInfo} text={reservation.parking} />
            </View>
            <View>
                <Info styleText={styleSubtitle} text={'Location'} />
                <Info styleText={styleInfo} text={reservation.location} />
            </View>
        </View>
        
        <View style={styles.row}>
            <View style={styleLeftContent}>
                <Info styleText={styleSubtitle} text={'Duration'} />
                <Info styleText={styleInfo} text={reservation.duration} />
            </View>
            <View>
                <Info styleText={styleSubtitle} text={'Spot Number'} />
                <Info styleText={styleInfo} text={reservation.spotNumber} />
            </View>
        </View>
        <View style={styles.row}>
            <View style={styleLeftContent}>
                <Info styleText={styleSubtitle} text={'Plate Number'} />
                <Info styleText={styleInfo} text={reservation.plateNumber} />
            </View>
            <View>
                <Info styleText={styleSubtitle} text={'Total'} />
                <Info styleText={styleInfo} text={reservation.total} />
            </View>
        </View>
    </View>
  )
}

export default Summary