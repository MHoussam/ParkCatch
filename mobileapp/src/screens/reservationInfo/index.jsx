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
import {
  setReservation,
  clearReservation,
} from "../../redux/reservation/reservationSlice";
import { clearSlots } from "../../redux/slots/slotSlice";
import { clearSelectedSlot } from "../../redux/selectedSlot/selectedSlotSlice";

const ReservationInfo = () => {
  const selectedParking = useSelector((state) => state.selectedParking);
  const user = useSelector((state) => state.user);
  const selectedSlot = useSelector((state) => state.selectedSlot);
  const reservation = useSelector((state) => state.reservation);
  const [inputs, setInputs] = useState({
    duration: 2,
    phone: "",
    plateNumber: "",
  });
  const dispatch = useDispatch();

  dispatch(
    setReservation({
      client: user.firstname + " " + user.lastname,
      phone: reservation.phone || "",
      parking: selectedParking.name,
      location: selectedParking.address,
      duration: reservation.duration || 2,
      spotNumber: selectedSlot.name,
      plateNumber: reservation.plateNumber || "",
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
    dispatch(clearSlots());
    dispatch(clearSelectedSlot());
    return () => {
      dispatch(clearReservation());
    };
  }, []);

  return (
    <View style={styles.container}>
      <Header ScreenName={"Reservation Info"} />
      <View style={styles.reservInfo}>
        <InfoForm />
        <View style={styles.summaryContainer}>
          <Text style={styles.title}>Summary</Text>
          <Summary
            styleContainer={styles.infoContainer}
            styleSubtitle={styles.subtitle}
            styleInfo={styles.info}
            styleLeftContent={styles.leftContent}
          />
        </View>
        <View style={styles.button}>
          <Button text={"Proceed to Payment"} navigate={"ReservationPayment"} />
        </View>
      </View>
    </View>
  );
};

export default ReservationInfo;
