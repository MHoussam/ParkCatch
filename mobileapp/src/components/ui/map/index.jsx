import React, { useEffect, useState } from 'react';
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
import { addParking, clearParkings } from '../../../redux/parking/parkingSlice';
import axios from 'axios';
import Distance from '../../base/distance';
import { useNavigation } from '@react-navigation/native';
import { setUser, setUserToken } from "../../../redux/user/userSlice";
import { setSelectedParking, clearSelectedParking } from "../../../redux/selectedParking/selectedParkingSlice";
import { setSelectedSlot, clearSelectedSlot } from "../../../redux/selectedSlot/selectedSlotSlice";
import WebSocketClient from '../../WebSocketClient';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Map = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const location = useSelector((state) => state.location.location);
  const errorMsg = useSelector((state) => state.location.errorMsg);
  // const user = useSelector((state) => state.user);
  // const userToken = useSelector((state) => state.user.token);
  const parkings = useSelector((state) => state.parking.parkings);
  const selectedParking = useSelector((state) => state.selectedParking);
  const [ availableNumber, setAvailableNumber ] = useState('');
  const [ refresh, setRefresh ] = useState(null);

  const fetchParkings = async () => {
    try{
      const userData = await AsyncStorage.getItem('userData');
      const userToken = await AsyncStorage.getItem('userToken');
      
      console.log('aaaaaaa ' +parkings.length )
      console.log(parkings )
      const axiosConfig = {
        headers: {
          Authorization: `Bearer ${userToken}`,
          'Content-Type': 'application/json'
        }
      };
      // console.log(userData)
      console.log(userToken)
      const response = await axios.get('http://127.0.0.1:8000/api/parkings', axiosConfig);

      console.log('data')

      console.log(response.data.data)
      if (Array.isArray(response.data.data)) {
        if (parkings.length === 0) {
          // console.log('parking: aaaaaaa ' +parkings.length )
          // console.log(parkings )
          response.data.data.forEach((item) => {
            const { id,
              name,
              address,
              price,
              photo,
              open_hour,
              close_hour,
              latitude,
              longitude, } = item;
// console.log('1')
            dispatch(addParking({ id,
              name,
              address,
              price,
              photo,
              open_hour,
              close_hour, 
              latitude: parseFloat(latitude), 
              longitude: parseFloat(longitude) }));
          });
          await AsyncStorage.setItem('parkings', JSON.stringify(response.data.data));
        }
      } else {
        console.error('Received non-array data from server:', response.data);
      }
      // console.log('no?')
    } catch(error) {
      console.error('Error fetching parking data:', error);
      // fetchParkings();
    }
  }

  const fetchMap = async () => {
      const response = await Location.requestForegroundPermissionsAsync();

      if (response.status !== 'granted') {
        dispatch(setErrorMsg('Permission to access location was denied'));
        await Location.requestForegroundPermissionsAsync();
        dispatch(clearLocation());
      }

      const location = await Location.getCurrentPositionAsync({});
      dispatch(setLocation(location));
      dispatch(clearErrorMsg());
  }

  const handleMarkerPress = async (parking) => {
    dispatch(setSelectedParking(parking)); 
    // console.log('shuuuuuuuuuuuuuuuuuuuu')
    // console.log(url)
    //setAvailableNumber(null);
  };

  const closeCard = () => {
    dispatch(clearSelectedParking());
    // console.log(selectedParking)
  };

  const navigateToSpots = () => {
    navigation.navigate('Spots')
  };

  const fetchAvailableNumber = async () => {
    try {
      const userToken = await AsyncStorage.getItem('userToken');

      const dataForm = {
        token: userToken,
        parking_id: selectedParking.id,
      };
  
      const response = await axios.post('http://127.0.0.1:8000/api/availableSpots', dataForm);
  
      setAvailableNumber(response.data.data);
    } catch (error) {
      console.log('Error while fetching the available spots number: ' + error);
    }
  }

  const calculatedDistance = location
    ? Distance({
        lat1: location.coords.latitude,
        lon1: location.coords.longitude,
        lat2: selectedParking.latitude,
        lon2: selectedParking.longitude,
      })
    : null;

    const refreshNow = () => {
      setRefresh(true);
    }

  useEffect(() => {
    if (selectedParking && selectedParking.id) {
      fetchAvailableNumber();
    } else {
      setAvailableNumber(null);
    }
  }, [selectedParking]);

  const checkParkings = async () => {
    const park = await AsyncStorage.getItem('parkings')
    const parkings = JSON.parse(park);
    console.log('yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy')
    console.log(parkings)

    if (parkings === null) {
      // dispatch(clearParkings());
      checkParkings();
      console.log('ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo')
      console.log(parkings)
    console.log(location)
      fetchParkings();
      fetchMap();
    }
  }

  useEffect(() => {
    fetchMap();
  }, [refresh]);

  // useEffect(() => {
  //   dispatch(clearParkings());
  // }, []);

  // console.log('maybe?')
  // console.log(userToken.token)
  console.log('redux')
  console.log(parkings)
  // console.log('selectedParking')
  // console.log(selectedParking)
  // console.log(location)
  // console.log(calculatedDistance)

  return (
    <View style={styles.container}>
      {errorMsg ? (
        <Text style={styles.error}>{errorMsg}</Text>
      ) : location ? (
      <>
      {/* <WebSocketClient /> */}
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
          zoomEnabled={true}
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
        <View>
          {selectedParking.id !== null && (
            <>
              <TouchableOpacity style={styles.card} onPress={navigateToSpots}>
              <Image
                style={styles.parkingPhoto}
                source={{
                  uri: `http://127.0.0.1:8000/images/parkings/${selectedParking.photo}`,
                }}
              />
              <View >
                <View style={styles.cardInfo} >
                  <Text style={[styles.bold, styles.size16]}>{selectedParking.name}</Text>
                  <Text style={[styles.bold, styles.size13, styles.parkingAddress]}>{selectedParking.address}</Text>
                  <View style={styles.cardInfoRow} >
                    <View style={styles.cardInfoRow}>
                      <Image source={require('../../../../assets/images/spots.png')} />
                      <Text style={[styles.semiBold, styles.size13]}> {availableNumber} Spots</Text>
                    </View>
                    <View style={styles.cardInfoRow}>
                      <Image source={require('../../../../assets/images/distance.png')} />
                      <Text style={[styles.semiBold, styles.size13]}>
                        {calculatedDistance}m
                      </Text>
                    </View>
                  </View>
                  <Text style={styles.medium}>${selectedParking.price}/hr</Text>
                </View>
              </View>
              </TouchableOpacity>
            </>
          )}
        </View>
      </>
      ) : (
        <>
          <Text style={styles.error} onLayout={refreshNow}>Map is Loading...</Text>
        </>
      )}
    </View>
  );
};

export default Map;