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
import imageMapping from '../../base/imageMapping';
import { useNavigation } from '@react-navigation/native';

const Map = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();  
  const location = useSelector((state) => state.location.location);
  const errorMsg = useSelector((state) => state.location.errorMsg);
  // const userToken = useSelector((state) => state.user.token);
  const parkings = useSelector((state) => state.parking.parkings);
  const distance = useSelector((state) => state.distance.distance);
  const [selectedParking, setSelectedParking] = useState(null); 
  var url;

  const fetchParkings = async () => {
    try{
      const axiosConfig = {
        headers: {
          Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL2xvZ2luIiwiaWF0IjoxNjk0NzcyMzU2LCJleHAiOjE2OTQ3NzU5NTYsIm5iZiI6MTY5NDc3MjM1NiwianRpIjoidVJVdjRQTjVHWElxZmcydiIsInN1YiI6IjUiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.qKYhM4yvMhj4hNWtYYIG5XptNHQCYvtFzPO7oLlupKc`,
          'Content-Type': 'application/json'
        }
      };
      // console.log(axiosConfig.headers)
      const response = await axios.get('http://127.0.0.1:8000/api/parkings', axiosConfig);;

      //console.log(response.data)
      if (Array.isArray(response.data.data)) {
        if (!parkings || parkings.length === 0) {
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
        }
      } else {
        console.error('Received non-array data from server:', response.data);
      }
      // console.log('no?')
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
     url = require('../../../../assets/images/lemall.png'); 
    console.log('shuuuuuuuuuuuuuuuuuuuu')
    console.log(url)

    // console.log(imageName.split('.')[0])
    console.log(url)

    // imageSource = imageMapping[imageName.split('.')[0]];
    // console.log(imageSource)
  };

  const closeCard = () => {
    setSelectedParking(null);
    console.log(selectedParking)
  };

  const navigateToSpots = () => {
    navigation.navigate('Spots')
  };

  useEffect(() => {
    fetchParkings();
    fetchMap();
  }, []);

  // console.log('maybe?')
  // console.log(userToken.token)
  // console.log(userToken)
  // console.log(parkings)
  // console.log('selectedParking')
  // console.log(selectedParking)
  // console.log(location)
  // console.log(distance)

  return (
    <View style={styles.container}>
      {errorMsg ? (
        <Text style={styles.error}>{errorMsg}</Text>
      ) : location ? (
      <>
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
        <View>
          {selectedParking && (
            <>
              <Distance 
                lat1={location.coords.latitude}
                lon1={location.coords.longitude}
                lat2={selectedParking.latitude}
                lon2={selectedParking.longitude}
              />
              <TouchableOpacity style={styles.card} onPress={navigateToSpots}>
                <Image style={styles.parkingPhoto} source={require('../../../../assets/images/lemall.png')} />
                <View >
                <View style={styles.cardInfo} >
                  <Text style={[styles.bold, styles.size16]}>{selectedParking.name}</Text>
                  <Text style={[styles.bold, styles.size13, styles.parkingAddress]}>{selectedParking.address}</Text>
                  <View style={styles.cardInfoRow} >
                    <View style={styles.cardInfoRow}>
                      <Image source={require('../../../../assets/images/spots.png')} />
                      <Text style={[styles.semiBold, styles.size13]}> 13 Spots</Text>
                    </View>
                    <View style={styles.cardInfoRow}>
                      <Image source={require('../../../../assets/images/distance.png')} />
                      <Text style={[styles.semiBold, styles.size13]}>{distance}m</Text>
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
        <Text style={styles.error}>Map is Loading...</Text>
      )}
    </View>
  );
};

export default Map;