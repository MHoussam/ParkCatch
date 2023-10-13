import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Header from "../../components/ui/header";
import styles from "./styles";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/base/button";
import InfoForm from "../../components/ui/infoForm";
import Summary from "../../components/ui/summary";
import { clearReservation } from "../../redux/reservation/reservationSlice";

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
