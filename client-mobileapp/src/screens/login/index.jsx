import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import axios from 'axios';
import styles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from "../../redux/user/userSlice";
import { useNavigation } from '@react-navigation/native';
import store from "../../redux/store";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const navigation = useNavigation();

  const handleLogin = async () => {
    try {
      const user = {
        username: email,
        password: password,
        //lastUpdated: new Date().toISOString(),
    };
      console.log(user)
      // const response = await axios.post('http://localhost:8000/api/login', d);
      // console.log('Login successful', response.data);
      // console.log('what')


      // const user = {
      //   username: "JohnDoe",
      //   password: "password123",
      //   lastUpdated: new Date().toISOString(),
      // };
      dispatch(setUser(user));
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  const navigateToSignUp = () => {
    navigation.navigate('Signup');
  };

return (
    <View style={styles.container}>
      <View style={styles.form}>
        <View >
            <Image source={require('../../../assets/images/logo.png')} style={styles.logo} />
        </View>
        <Text style={styles.title}>Welcome Back</Text>
        <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#00000070"
            onChangeText={text => setEmail(text)}
            value={email}
        />
        <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#00000070"
            secureTextEntry
            onChangeText={text => setPassword(text)}
            value={password}
        />
        <View style={styles.forgotPasswordContainer}>
          <Text style={styles.forgotPasswordText}>Forgot password?</Text>
        </View>
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <View style={styles.loginWithContainer}>
          <Text style={styles.loginWithText}>Or login with</Text>
        </View>
        <View style={styles.googleContainer}>
          <Image source={require('../../../assets/images/google.png')} style={styles.google} />
        </View>
        <View style={styles.signupContainer}>
          <Text style={styles.signupText}>Don't have an account?</Text>
          <Text style={styles.signupLink} onPress={navigateToSignUp}> Sign up</Text>
        </View>
      </View>
    </View>
  );
};

export default Login;