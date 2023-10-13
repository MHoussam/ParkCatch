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
  const userToken = useSelector((state) => state.user.token);
  const dispatch = useDispatch();

  const save = async () => {
    try {
      // const reservationArray = Object.entries(reservation).map(([label, value]) => ({ label, value }));

      const formData = {
        ...reservation,
        token: userToken,
      };

      // const response = await axios.post('http://127.0.0.1:800/api/reserve', formData);
      console.log(formData)
    } catch(error) {
      console.log('Reservation Failed, Error: ' + error);
    }
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
