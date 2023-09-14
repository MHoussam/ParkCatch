import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import styles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import {
  setLocation,
  setErrorMsg,
  clearLocation,
  clearErrorMsg,
} from '../../../redux/location/locationSlice'; 
import { addParking } from '../../../redux/parking/parkingSlice';

const Map = () => {
  const dispatch = useDispatch();
  const location = useSelector((state) => state.location.location);
  const errorMsg = useSelector((state) => state.location.errorMsg);

  const fetchParkings = async () => {
    try{
      const response = await axios.get('https://127.0.0.1:8000/api/parkings');

      dispatch(addParking(response.data));
    } catch(error) {
      console.error('Error fetching parking data:', error);
    }
  }

  const fetchMap = async () => {
      const response = await Location.requestForegroundPermissionsAsync();

      if (response.status !== 'granted') {
        dispatch(setErrorMsg('Permission to access location was denied'));
        dispatch(clearLocation());
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      dispatch(setLocation(location));
      dispatch(clearErrorMsg());
  }

  useEffect(() => {
    fetchParkings();
    fetchMap();
  }, []);

  return (
    <View style={styles.container}>
        {errorMsg ? (
        <Text style={styles.error}>{errorMsg}</Text>
        ) : location ? (
        <MapView
            style={styles.map}
            initialRegion={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
            }}
        >
            <Marker
                coordinate={{
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                }}
                title="Your Location"
            />
        </MapView>
        ) : (
        <Text style={styles.error}>Map is Loading...</Text>
        )}
    </View>
  );
}

export default Map;