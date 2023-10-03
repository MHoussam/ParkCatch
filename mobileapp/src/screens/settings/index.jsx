import React, { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import Header from "../../components/ui/header";
import Footer from "../../components/ui/footer";
import styles from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { setUser, setUserToken } from "../../redux/user/userSlice";

const Settings = () => {
  const user = useSelector((state) => state.user);
  const [first, setFirst] = useState();
  const [last, setLast] = useState();

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleLogout = async () => {
    dispatch(setUser(''));
    dispatch(setUserToken(''));

    await AsyncStorage.removeItem('userData')
    await AsyncStorage.removeItem('userToken')
    navigation.navigate('Login');
  };

  const handleEdit = () => {
    navigation.navigate('ChangeInfo');

  };

  return (
    <View style={{ flex: 1 }}>
      <Header ScreenName={"Settings"} mainScreen={true} />
      <View style={{ flex: 1, paddingTop: 20 }}>
        <View >
        <TouchableOpacity onPress={handleEdit} style={styles.row}>
          <Image
            style={styles.change}
            source={require("../../../assets/images/changeInfo.png")}
          />
          <Text style={styles.title}>Edit Account Information</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <Image
            style={styles.change}
            source={require("../../../assets/images/changePass.png")}
          />
          <Text style={styles.title}>Change Password</Text>
        </View>
        <View >
          <TouchableOpacity onPress={handleLogout} style={styles.row}>
            <Image
              style={styles.logout}
              source={require("../../../assets/images/logout.png")}
            />
            <Text style={styles.title}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default Settings;
