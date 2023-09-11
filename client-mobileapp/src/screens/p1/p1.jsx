// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Button } from 'react-native';
// import axios from 'axios';
// //import styles from './styles';
// import { setUser } from "../../redux/user/userSlice";
// import store from "../../redux/store";
// import { Provider, useDispatch, useSelector } from 'react-redux';

// //import reduxStore from "../../redux/store";
// import Login from './src/screens/login/login';
// import { configureStore, createSlice } from '@reduxjs/toolkit';

// const P1 = () => {
//     const counter = useSelector((state) => state.counter);
//     const dispatch = useDispatch();
  
//     return(
//       <View>
//         <Text style={styles.title}>
//           Counter: {counter}
//         </Text>
//         <View>
//           <Button 
//           title='Increment'
//           onPress={() => dispatch(counterSlice.actions.increment())}
//           />
//           <Button 
//           title='Decrement'
//           onPress={() => dispatch(counterSlice.actions.decrement())}
//           />
//         </View>
//       </View>
//     )
//   }
  
//   const styles = StyleSheet.create({
//     title: {
//       fontSize: 50,
//       fontWeight: '600',
//       marginBottom: 20,
//       marginTop: 20,
//     },
//   });

// export default P1;