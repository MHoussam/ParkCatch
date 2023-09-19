import React from 'react'
import { Text, View } from 'react-native'

const Info = ({ styleText, text}) => {
  return (
    <View >
        <Text style={styleText}>{text}</Text>
    </View>
  )
}

export default Info