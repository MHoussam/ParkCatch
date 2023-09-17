import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import axios from 'axios';
import { useSelector } from 'react-redux';
import * as Location from 'expo-location';

const MapDirections = () => {
  const [error, setError] = useState(null);
  const selectedParking = useSelector((state) => state.selectedParking);

  const [routeCoordinates, setRouteCoordinates] = useState([]);
  const [currentLocation, setCurrentLocation] = useState([]);

  const fetchDirection = async () => {
    if (!currentLocation) {
      return;
    }

    const apiKey = 'jiEbAXzcDj8ZRhrkfI3EfYjG462gAlrg';

    try {
      const response = await axios.get(
        `https://www.mapquestapi.com/directions/v2/route?key=${apiKey}&from=${currentLocation.latitude},${currentLocation.longitude}&to=${selectedParking.latitude},${selectedParking.longitude}`
      );

      const { legs } = response.data.route;
    //   console.log(response.data.route.legs[0].maneuvers[0].startPoint.lat)
      const points = legs[0].maneuvers.map((maneuver) => ({
        latitude: maneuver.startPoint.lat,
        longitude: maneuver.startPoint.lng,
      }));
    //   console.log(points)
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
    console.log(location.coords.latitude+' '+ location.coords.longitude)
    setCurrentLocation({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    });
  }

  useEffect(() => {
    getLocationAsync();
    fetchDirection();

    const locationInterval = setInterval(() => {
      getLocationAsync();
      fetchDirection();
    }, 5000);

    return () => {
    clearInterval(locationInterval);
    };
  }, []);
console.log('what')
console.log(routeCoordinates)
  return (
    <View style={{ flex: 1 }}>
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
        />

        {routeCoordinates.length > 0 && (
          <Polyline
            coordinates={routeCoordinates}
            strokeColor="#3498db"
            strokeWidth={3}
          />
        )}
      </MapView>

      {error && <Text>Error: {error}</Text>}
    </View>
  );
};

export default MapDirections;
