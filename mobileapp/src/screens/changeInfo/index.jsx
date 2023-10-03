import React, { useState } from "react";
import Input from "../../components/base/input";
import styles from "./styles";
import { Text, TouchableOpacity, View } from "react-native";
import Header from "../../components/ui/header";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import axios from "axios";
import Button from "../../components/base/button";

const ChangeInfo = () => {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const navigation = useNavigation();
  const user = useSelector((state) => state.user)

  const handleFirstChange = (text) => {
    setFirst(text);
  };

  const handleLastChange = (text) => {
    setLast(text);
  };

  const look = async () => {

    const data = {
        "first_name": first,
        'last_name': last,
        'token': user.token,
    }

    try{
        const response = await axios.post('127.0.0.1:8000/api/changeInfo', data);
        navigation.navigate('Settings');
    } catch(error) {
        console.log('Change Info Error ', error);
    }


  };
  return (
    <View style={{ flex: 1,}}>
      <Header ScreenName="Edit Account Info" />
      <View
        style={{
          marginTop: 20,
          marginLeft: 20,
          flex: 1,
          justifyContent: "space-between",
        }}
      >
        <View>
          <View style={{ marginTop: 10 }}>
            <Input
              styleText={styles.title}
              text="First Name"
              label="first_name"
              type="text"
              onChangeText={(text) => handleFirstChange(text)}
            />
          </View>
          <View style={{ marginTop: 10 }}>
            <Input
              styleText={styles.title}
              text="Last Name"
              label="last_name"
              type="text"
              onChangeText={(text) => handleLastChange(text)}
            />
          </View>
        </View>
        <TouchableOpacity style={{ bottom: 25 }} onPress={look}>
      <Button text='Save' navigate='Settingss' />
    </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChangeInfo;
