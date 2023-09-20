import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';
import styles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { setUser, setUserToken } from "../../redux/user/userSlice";
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import store from "../../redux/store";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [PasswordVisible, setPasswordVisible] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const navigation = useNavigation();

  const handleLogin = async () => {
    try {
      const userr = {
        email: email,
        password: password,
        //lastUpdated: new Date().toISOString(),
    };
      // console.log(user)
      const response = await axios.post('http://127.0.0.1:8000/api/login', userr);
      console.log('Login successful');
      console.log('what')

      const userData = {
        firstname: response.data.data.first_name,
        lastname: response.data.data.last_name,
        email: response.data.data.email,
      };

      // const userToken = {
      //   token: response.data.data.token,
      // }

      if (response.data.data.token !== null) {
        console.log(response.data.data.token);
  
        dispatch(setUserToken(response.data.data.token))
        await AsyncStorage.setItem('userData', JSON.stringify(userData));
        await AsyncStorage.setItem('userToken', response.data.data.token);
  
        navigation.navigate('Home');
      }
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
        <View style={styles.passwordInput}>
          <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#00000070"
              secureTextEntry={!PasswordVisible}
              onChangeText={text => setPassword(text)}
              value={password}
          />
            <View style={styles.passwordVisibleContainer}>
              <TouchableOpacity
              onPress={() => setPasswordVisible(!PasswordVisible)}
              >
                <Icon
                    name={PasswordVisible ? 'eye-slash' : 'eye'}
                    size={20}
                    color="#000"
                />
              </TouchableOpacity>
          </View>
        </View>
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