import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

const Button = () => {
  return (
    <TouchableOpacity style={styles.nextButton} >
        <Text style={styles.buttonText}>Proceed to Payment</Text>
    </TouchableOpacity>
  )
}

export default Button