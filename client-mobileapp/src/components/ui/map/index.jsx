import React, { Fragment, useEffect, useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
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
import axios from 'axios';
import { Callout } from 'react-native-maps';
import Distance from '../../base/distance';

const Map = () => {
  const dispatch = useDispatch();
  const location = useSelector((state) => state.location.location);
  const errorMsg = useSelector((state) => state.location.errorMsg);
  const userToken = useSelector((state) => state.user.token);
  const parkings = useSelector((state) => state.parking.parkings);
  const [selectedParking, setSelectedParking] = useState(null);

  const fetchParkings = async () => {
    try{
      const axiosConfig = {
        headers: {
          Authorization: `Bearer ${userToken.token}`,
          'Content-Type': 'application/json'
        }
      };
      console.log(axiosConfig.headers)
      const response = await axios.get('http://127.0.0.1:8000/api/parkings', axiosConfig);

      //console.log(response.data)
      if (Array.isArray(response.data.data)) {
        if (!parkings || parkings.length === 0) {
          response.data.data.forEach((item) => {
            const { id, name, latitude, longitude } = item;
            dispatch(addParking({ id, name, latitude: parseFloat(latitude), longitude: parseFloat(longitude) }));
          });
        }
      } else {
        console.error('Received non-array data from server:', response.data);
      }
      console.log('no?')
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

  const handleMarkerPress = (parking) => {
    setSelectedParking(parking);
  };

  const closeCard = () => {
    setSelectedParking(null);
    console.log(selectedParking)
  };

  useEffect(() => {
    fetchParkings();
    fetchMap();
  }, []);

  console.log('maybe?')
  console.log(userToken.token)
  console.log(userToken)
  console.log(parkings)
  console.log('selectedParking')
  console.log(selectedParking)

  return (
    <View style={styles.container}>
      {errorMsg ? (
        <Text style={styles.error}>{errorMsg}</Text>
      ) : location ? (
      <>
        <View>
          {selectedParking && (
              <TouchableOpacity style={styles.card} onPress={closeCard}>
                <Text>{selectedParking.name}</Text>
              </TouchableOpacity>
          )}
        </View>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          onPress={() => {
            if (selectedParking) {
              closeCard();
            }
          }}
        >
          <Marker
            coordinate={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            }}
            title="Your Location"
          />
          {parkings.map((parking) => (
            <Marker
              key={parking.id}
              coordinate={{
                latitude: parking.latitude,
                longitude: parking.longitude,
              }}
              onPress={() => handleMarkerPress(parking)}
            >
              <View style={styles.parking}>
                <Image
                  source={require('../../../../assets/images/marker.png')}
                  style={styles.markerIcon}
                />
                <Text style={styles.parkingName}>{parking.name}</Text>
              </View>
            </Marker>
          ))}
        </MapView>
      </>
      ) : (
        <Text style={styles.error}>Map is Loading...</Text>
      )}
    </View>
  );
};

export default Map;