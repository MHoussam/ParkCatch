import React, { useEffect, useState } from "react";
import { View, Text, Image } from "react-native";
import MapView, { Marker, Polyline } from "react-native-maps";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import * as Location from "expo-location";
import styles from "./styles";
import Distance from "../../base/distance";

const MapDirections = () => {
  const [error, setError] = useState(null);
  const selectedParking = useSelector((state) => state.selectedParking);

  const [routeCoordinates, setRouteCoordinates] = useState([]);
  const [currentLocation, setCurrentLocation] = useState([]);
  const [refresh, setRefresh] = useState(null);
  const dispatch = useDispatch();

  const fetchDirection = async () => {
    if (currentLocation.length == 0) {

      return;
    }

    const apiKey = "jiEbAXzcDj8ZRhrkfI3EfYjG462gAlrg";

    try {
      const response = await axios.get(
        `https://www.mapquestapi.com/directions/v2/route?key=${apiKey}&from=${currentLocation.latitude},${currentLocation.longitude}&to=${selectedParking.latitude},${selectedParking.longitude}`
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

  const getLocationAsync = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      console.error("Permission to access location was denied");
      return;
    }

    const location = await Location.getCurrentPositionAsync({});
    console.log(location.coords.latitude + " " + location.coords.longitude);
    setCurrentLocation({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    });
  };

  const refreshNow = () => {
    setRefresh(true);
  };

  const calculatedDistance = currentLocation
    ? Distance({
        lat1: currentLocation.latitude,
        lon1: currentLocation.longitude,
        lat2: selectedParking.latitude,
        lon2: selectedParking.longitude,
      })
    : null;

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
  return (
    <View style={styles.container}>
      {currentLocation && routeCoordinates.length > 0 ? (
        <>
          <MapView
            style={styles.map}
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
                  source={require("../../../../assets/images/marker.png")}
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
          <View>
            {selectedParking.id !== null && (
              <>
                <View style={styles.card}>
                  <Image
                    style={styles.parkingPhoto}
                    source={require("../../../../assets/images/forward.png")}
                  />
                  <View style={styles.cardName}>
                    <View style={styles.cardInfo}>
                      <Text
                        style={[styles.bold, styles.size16, styles.parkingName]}
                      >
                        To {selectedParking.name}
                      </Text>
                      <Text
                        style={[
                          styles.semibold,
                          styles.size13,
                          styles.parkingAddress,
                        ]}
                      >
                        {currentLocation ? calculatedDistance : "Calculating"}m
                      </Text>
                    </View>
                  </View>
                </View>
              </>
            )}
            {console.log(
              "current: " +
                currentLocation.latitude +
                " " +
                currentLocation.longitude
            )}
            {console.log(
              "selectedParking: " +
                selectedParking.latitude +
                " " +
                currentLocation.longitude
            )}
          </View>
        </>
      ) : (
        <>
          <Text style={styles.error} onLayout={refreshNow}>
            Map is Loading...
          </Text>
        </>
      )}

    </View>
  );
};

export default MapDirections;
