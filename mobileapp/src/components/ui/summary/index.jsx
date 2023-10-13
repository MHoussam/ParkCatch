import React from 'react'
import { Text, View } from 'react-native'
import Info from '../../base/info'
import styles from './styles'
import { useSelector } from 'react-redux'

const Summary = ({ styleContainer, styleSubtitle, styleInfo, styleLeftContent, ticket=false }) => {
    const reservation = useSelector((state) => state.reservation);

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
        {ticket ? (
        <View style={styles.row}>
            <View style={styleLeftContent}>
                <Info styleText={styleSubtitle} text={'Time'} />
                <Info styleText={styleInfo} text={reservation.time_reserved} />
            </View>
            <View>
                <Info styleText={styleSubtitle} text={'Date'} />
                <Info styleText={styleInfo} text={reservation.date_reserved} />
            </View>
        </View>
        ) : <></>}
        <View style={styles.row}>
            <View style={styleLeftContent}>
                <Info styleText={styleSubtitle} text={'Plate Number'} />
                <Info styleText={styleInfo} text={reservation.plateNumber} />
            </View>
            <View>
                <Info styleText={styleSubtitle} text={'Total'} />
                <Info styleText={styleInfo} text={reservation.total+'$'} />
            </View>
        </View>
    </View>
  )
}

export default Summary