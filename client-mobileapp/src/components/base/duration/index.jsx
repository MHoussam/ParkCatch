import React, { useState } from 'react'
import { Text, View } from 'react-native'
import Slider from '@react-native-community/slider'
import styles from './styles'
import { setReservation } from '../../../redux/reservation/reservationSlice'
import { useDispatch } from 'react-redux'

const Duration = ({ styleText }) => {
    const [sliderValue, setSliderValue] = useState(2); 
    const dispatch = useDispatch();

    const handleSliderChange = (value) => {
        setSliderValue(value);
        dispatch(setReservation(value));
    }

  return (
    <View>
        <Text style={styleText}>Choose the Duration</Text>
        <Text style={styles.selectedValue}>{sliderValue} hrs</Text>
        <Slider
            style={styles.slider}
            minimumValue={1}
            maximumValue={10}
            step={1}
            value={sliderValue} 
            onValueChange={handleSliderChange}
            minimumTrackTintColor="#DCB010" 
            maximumTrackTintColor="#DEB010" 
            thumbTintColor="#DCB010"
        />
    </View>
  )
}

export default Duration