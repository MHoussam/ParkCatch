import React from 'react'
import { Text } from 'react-native'

const Duration = ({ style }) => {
    console.log(style)
  return (
    <Text style={style}>Choose the Duration</Text>
  )
}

export default Duration