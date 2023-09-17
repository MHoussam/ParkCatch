import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import axios from 'axios';
import { useSelector } from 'react-redux';
import * as Location from 'expo-location';
// import Geolocation from '@react-native-community/geolocation';

const MapDirections = () => {
  const [error, setError] = useState(null);
  const selectedParking = useSelector((state) => state.selectedParking);

  const [routeCoordinates, setRouteCoordinates] = useState([]);
  const [currentLocation, setCurrentLocation] = useState(null);

  const origin = currentLocation || selectedParking; 

  const fetchDirection = async () => {
    if (!origin) {
      return;
    }

    const apiKey = 'jiEbAXzcDj8ZRhrkfI3EfYjG462gAlrg';

    try {
      const response = await axios.get(
        `https://www.mapquestapi.com/directions/v2/route?key=${apiKey}&from=${origin.latitude},${origin.longitude}&to=${selectedParking.latitude},${selectedParking.longitude}`
      );

      const { legs } = response.data.route;
      const points = legs[0].maneuvers.map((maneuver) => ({
        latitude: maneuver.startPoint.lat,
        longitude: maneuver.startPoint.lng,
      }));
      setRouteCoordinates(points);
    } catch (error) {
      setError(error.message);
    }
  };

  const getCurrentLocation = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        setCurrentLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      (error) => {
        setError(error.message);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  };

async function getLocationAsync() {
  const { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== 'granted') {
    console.error('Permission to access location was denied');
    return;
  }

  const location = await Location.getCurrentPositionAsync({});
  console.log('User Location:', location.coords);
}


  
  useEffect(() => {
    getLocationAsync();
    fetchDirection();
  }, []);

  useEffect(() => {
    const locationInterval = setInterval(() => {
        getLocationAsync();
    }, 5000);

    return () => {
      clearInterval(locationInterval);
    };
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: origin ? origin.latitude : 0,
          longitude: origin ? origin.longitude : 0,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {origin && (
          <Marker
            coordinate={{ latitude: origin.latitude, longitude: origin.longitude }}
            title="Origin"
          />
        )}
        <Marker
          coordinate={{ latitude: selectedParking.latitude, longitude: selectedParking.longitude }}
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