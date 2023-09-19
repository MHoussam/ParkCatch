import React, { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import axios from 'axios';
import { useSelector } from 'react-redux';
import * as Location from 'expo-location';
import styles from './styles';

const MapDirections = () => {
  const [error, setError] = useState(null);
  const selectedParking = useSelector((state) => state.selectedParking);

  const [routeCoordinates, setRouteCoordinates] = useState([]);
  const [currentLocation, setCurrentLocation] = useState([]);
  const [ refresh, setRefresh ] = useState(null);  

  const fetchDirection = async () => {
    console.log('currenttttttttttttttttttt')
console.log(currentLocation)
    if (currentLocation.length == 0) {
      console.log('shuuuuuuuuuuuuuu')
      // console.log('shuuuuuuuuuuuuuu')

      // getLocationAsync();
      return;
    }
    // console.log('lehhhhhhhh')

    const apiKey = 'jiEbAXzcDj8ZRhrkfI3EfYjG462gAlrg';
    
    try {
      const response = await axios.get(
        `https://www.mapquestapi.com/directions/v2/route?key=${apiKey}&from=${currentLocation.latitude},${currentLocation.longitude}&to=${selectedParking.latitude},${selectedParking.longitude}`
      );
      // console.log('sahhh')
      // console.log(response.data)

      const { legs } = response.data.route;
    //   console.log(response.data.route.legs[0].maneuvers[0].startPoint.lat)
      const points = legs[0].maneuvers.map((maneuver) => ({
        latitude: maneuver.startPoint.lat,
        longitude: maneuver.startPoint.lng,
      }));
      // console.log('points')
      // console.log(points)
      setRouteCoordinates(points);
    } catch (error) {
      setError(error.message);
    }
  };

  const getLocationAsync = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      console.error('Permission to access location was denied');
      return;
    }
  
    const location = await Location.getCurrentPositionAsync({});
    console.log(location.coords.latitude + ' ' + location.coords.longitude)
    setCurrentLocation({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    });
  }

  const refreshNow = () => {
    setRefresh(true);
  }
  
  useEffect(() => {
    getLocationAsync();
  }, []);

  useEffect(() => {
    const locationInterval = setInterval(() => {
      getLocationAsync();
      fetchDirection();
    }, 5000);
  
    return () => {
      clearInterval(locationInterval);
    };
  }, [currentLocation, refresh]);
console.log('route')
console.log(routeCoordinates[0])
console.log(currentLocation)

// console.log('current')
// console.log(currentLocation)
// console.log('selectedParking')
// console.log(selectedParking.latitude + ' ' + selectedParking.longitude)
  return (
    <View style={{ flex: 1 }}>
      {currentLocation && routeCoordinates.length>0 ? (
        <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: currentLocation.latitude,
          longitude: currentLocation.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {currentLocation && (
         <Marker
           coordinate={{
             latitude: currentLocation.latitude,
             longitude: currentLocation.longitude,
           }}
           title="Origin"
         />
       )}
       <Marker
         coordinate={{
           latitude: selectedParking.latitude,
           longitude: selectedParking.longitude,
         }}
         title="Destination"
       >
        <View style={styles.parking}>
          <Image
            source={require('../../../../assets/images/marker.png')}
            style={styles.markerIcon}
          />
          <Text style={styles.parkingName}>{selectedParking.name}</Text>
        </View>
       </Marker> 

        {routeCoordinates.length > 0 && (
         <Polyline
           coordinates={routeCoordinates}
           strokeColor="#3498db"
           strokeWidth={3}
         />
       )} 
     </MapView>
        ) : (
          <>
            <Text style={styles.error} onLayout={refreshNow}>Map is Loading...</Text>
          </>
        )}
  
        {/* {error && <Text>Error: {error}</Text>} */}
        {/* <Text>hELLOOOOOOOO</Text> */}
    </View>
  );
};

export default MapDirections;
