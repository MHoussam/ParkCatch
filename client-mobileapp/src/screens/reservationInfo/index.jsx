import React, { useEffect } from "react";
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
  const dispatch = useDispatch();

  clearReservation();
  dispatch(
    setReservation({
      client: user.firstname + " " + user.lastname,
      parking: selectedParking.name,
      location: selectedParking.address,
      duration: reservation.duration,
      spotNumber: selectedSlot.name,
      total: parseInt(reservation.duration) * selectedParking.price,
    })
  );

  useEffect(() => {
    // clearReservation();
    dispatch(
      setReservation({
        duration: reservation.duration,
      })
    );
  }, [reservation.duration]);

  useEffect(() => {
    // clearReservation();
    dispatch(
      setReservation({
        plateNumber: reservation.duration,
      })
    );
  }, [reservation.duration]);

  useEffect(() => {
    // clearReservation();
    dispatch(
      setReservation({
        phone: reservation.phone,
      })
    );
  }, [reservation.duration]);

  useEffect(() => {
    // fetchSpots();
    // console.log("effect");
    return () => {
      // dispatch(clearSlots());
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
