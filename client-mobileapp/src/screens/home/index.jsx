import React from 'react';
import Map from '../../components/ui/map';
import { Button, Text, View } from 'react-native';
import { Provider, useSelector } from 'react-redux';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import store from '../../redux/store';
import Spots from '../spots';
import Footer from '../../components/ui/footer';
import Header from '../../components/ui/header';

const Home = () => {
  const navigation = useNavigation();

  const user = useSelector((state) => state.user);

  // const handle = () => {
  //   console.log('This is home')
  //   //console.log(user.token)
  //   navigation.navigate('Home');
  // }

  return (
    <Provider store={store}>
      <Map />
      {/* <Header />
      <Spots />
      <Footer /> */}
    </Provider>
  )
}

export default Home;