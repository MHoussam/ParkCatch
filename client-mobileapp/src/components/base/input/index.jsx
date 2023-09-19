import React from 'react'
import { TextInput, View } from 'react-native'
import styles from './styles'

const Input = ({ styleText, text }) => {
  return (
    <View>
        <Text style={styleText}>{text}</Text>
        <TextInput style={styles.input}/>
    </View>
  )
}

export default Input