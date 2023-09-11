// import { StatusBar } from 'expo-status-bar';
// import { Button, StyleSheet, Text, View } from 'react-native';
// import { Provider, useDispatch, useSelector } from 'react-redux';

// import reduxStore from "./src/redux/store";
import Login from './src/screens/login/login';
// import { configureStore, createSlice } from '@reduxjs/toolkit';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from './src/redux/store';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
       </NavigationContainer> 
    </Provider>
  );
}