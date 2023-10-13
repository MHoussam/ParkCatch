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
  setPhone,
  setDuration,
  setPlate,
} from "../../redux/reservation/reservationSlice";
import { clearSlots } from "../../redux/slots/slotSlice";
import { clearSelectedSlot } from "../../redux/selectedSlot/selectedSlotSlice";
import axios from "axios";

const ReservationInfo = () => {
  const reservation = useSelector((state) => state.reservation);
  const dispatch = useDispatch();

  const save = () => {
    
  }

  useEffect(() => {
    return () => {
      dispatch(clearReservation());
    };
  }, []);

  console.log(reservation)
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
          <Button text={"Proceed to Payment"} navigate={"ReservationPayment"} callBack={save} />
        </View>
      </View>
    </View>
  );
};

export default ReservationInfo;
