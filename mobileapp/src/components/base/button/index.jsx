import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

const Button = ({ text, navigate, callBack }) => {
  const navigation = useNavigation();

  const call = () => {
    callBack();
  }

  const navigateTo = () => {
    call();
    navigation.navigate(`${navigate}`);
  };

  return (
    <TouchableOpacity style={styles.nextButton} onPress={navigateTo}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;