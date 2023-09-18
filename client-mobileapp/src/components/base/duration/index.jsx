import React, { useState } from 'react'
import { Text, View } from 'react-native'
import Slider from '@react-native-community/slider'

const Duration = ({ styleText }) => {
    const [sliderValue, setSliderValue] = useState(2); 
  
    const handleSliderChange = (value) => {
        setSliderValue(value);
    }

  return (
    <View>
        <Text style={styleText}>Choose the Duration</Text>
        <Slider
            style={{ width: 350, marginTop: 15, marginLeft: -15 }}
            minimumValue={1}
            maximumValue={10}
            step={1}
            value={sliderValue} 
            onValueChange={handleSliderChange}
            minimumTrackTintColor="#DCB010" 
            maximumTrackTintColor="#DEB010" 
            thumbTintColor="#DCB010"
        />
        <Text style={styleText}>Choose the Duration</Text>
    </View>
  )
}

export default Duration