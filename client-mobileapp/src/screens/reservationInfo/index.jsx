import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Header from "../../components/ui/header";
import Footer from "../../components/ui/footer";
import styles from "./styles";
import { useDispatch, useSelector } from "react-redux";
import Map from "../../components/ui/map";
import Button from "../../components/base/button";
import InfoForm from "../../components/ui/infoForm";
import Summary from "../../components/ui/summary";
import { setReservation, clearReservation } from '../../redux/reservation/reservationSlice';

const ReservationInfo = () => {
  const selectedParking = useSelector((state) => state.selectedParking);
  const user = useSelector((state) => state.user);
  const selectedSlot = useSelector((state) => state.selectedSlot);
  const reservation = useSelector((state) => state.reservation);
  const [inputs, setInputs] = useState({duration: 2, phone: '', plateNumber: ''})
  const dispatch = useDispatch();

  dispatch(
    setReservation({
      client: user.firstname + " " + user.lastname,
      phone: reservation.phone || '',
      parking: selectedParking.name,
      location: selectedParking.address,
      duration: reservation.duration || 2,
      spotNumber: selectedSlot.name,
      plateNumber: reservation.plateNumber || '',
      total: parseInt(reservation.duration) * selectedParking.price,
    })
  ); 

  useEffect(() => {
    dispatch(
      setReservation({
        duration: reservation.duration,
        plateNumber: reservation.plateNumber,
        phone: reservation.phone,
      })
    );
  }, [reservation.duration, reservation.plateNumber, reservation.phone]);

  useEffect(() => {
    return () => {
      dispatch(clearReservation());
    };
  }, []);

  return (
    <View style={styles.container}>
      <Header
        ScreenName={"Reservation Info"}
        ParkingName={selectedParking.name}
      />
      <InfoForm />
      <Summary />
      <Button text={"Proceed to Payment"} navigate={"Directions"} />
      <Footer />
    </View>
  );
};

export default ReservationInfo;
