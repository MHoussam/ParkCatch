import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import axios from 'axios';
import styles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from "../../redux/user/userSlice";
import store from "../../redux/store";
import { useNavigation } from '@react-navigation/native';

const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const navigation = useNavigation();

  const handleSignUp = async () => {
    try {
      const user = {
        firstname: firstName,
        lastname: lastName,
        username: email,
        password: password,
        lastUpdated: new Date().toISOString(),
    };
      console.log(user)
      dispatch(setUser(user));
    } catch (error) {
      console.error('SignUp failed', error);
    }
  };

  const navigateToLogin = () => {
    navigation.navigate('Login');
  };

return (
    <View style={styles.container}>
      <View style={styles.form}>
        <View >
            <Image source={require('../../../assets/images/logo.png')} style={styles.logo} />
        </View>
        <Text style={styles.title}>Welcome</Text>
        <TextInput
            style={styles.input}
            placeholder="First Name"
            placeholderTextColor="#00000070"
            onChangeText={text => setFirstName(text)}
            value={firstName}
        />
        <TextInput
            style={styles.input}
            placeholder="Last Name"
            placeholderTextColor="#00000070"
            onChangeText={text => setLastName(text)}
            value={lastName}
        />
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
        <TouchableOpacity style={styles.loginButton} onPress={handleSignUp}>
            <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        <View style={styles.signupContainer}>
          <Text style={styles.signupText}>Already have an account?</Text>
          <Text style={styles.signupLink} onPress={navigateToLogin}> Login</Text>
        </View>
      </View>
    </View>
  );
};

export default Signup;