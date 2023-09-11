import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Provider, useDispatch, useSelector } from 'react-redux';

import reduxStore from "./src/redux/store";
import Login from './src/screens/login/login';
import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
  counter: 0,
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.counter += 1;
    },
    decrement: (state) => {
      state.counter -= 1;
    },
  },
})

const store = configureStore({
  reducer: counterSlice.reducer,
})

export default function App() {
  return (
    <Provider store={store} >
        {/* <StatusBar style="auto" /> */}

      <Counter />
    </Provider>
  );
}

function Counter() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return(
    <View>
      <Text style={styles.title}>
        Counter: {counter}
      </Text>
      <View>
        <Button 
        title='Increment'
        onPress={() => dispatch(counterSlice.actions.increment())}
        />
        <Button 
        title='Decrement'
        onPress={() => dispatch(counterSlice.actions.decrement())}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 50,
    fontWeight: '600',
    marginBottom: 20,
    marginTop: 20,
  },
});