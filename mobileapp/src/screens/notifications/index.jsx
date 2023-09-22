import React from 'react'
import registerNNPushToken from 'native-notify';
import Footer from '../../components/ui/footer';
import { Text, View } from 'react-native';
import Header from '../../components/ui/header';

const Notificationss = () => {
  return (
    <View style={{flex:1}}>
      <Header ScreenName={'Notifications'} />
      <View style={{flex:1}}>
        <Text></Text>
      </View>
      <Footer />
    </View>
  )
}

export default Notificationss