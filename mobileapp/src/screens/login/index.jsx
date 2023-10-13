import React, { useEffect, useState } from 'react';
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
  const userToken = useSelector((state) => state.user.token);
  const navigation = useNavigation();

  const handleLogin = async () => {
    try {
      const user = {
        email: email,
        password: password,
    };
      const response = await axios.post('http://127.0.0.1:8000/api/login', user);

      if (response.data.data.token !== null) {
  
        await AsyncStorage.setItem('userData', JSON.stringify(response.data.data));
        await AsyncStorage.setItem('userToken', response.data.data.token);

        dispatch(setUserToken(response.data.data.token))
        navigation.navigate('TabNavigator');
      }
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  const navigateToSignUp = () => {
    navigation.navigate('Signup');
  };

  useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem('userToken');
      
      if(token !== null){
        navigation.navigate('TabNavigator');
      }
    }

    checkToken();
  }, [userToken])

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
        {/* <View style={styles.forgotPasswordContainer}>
          <Text style={styles.forgotPasswordText}>Forgot password?</Text>
        </View> */}
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        {/* <View style={styles.loginWithContainer}>
          <Text style={styles.loginWithText}>Or login with</Text>
        </View> */}
        {/* <View style={styles.googleContainer}>
          <Image source={require('../../../assets/images/google.png')} style={styles.google} />
        </View> */}
        <View style={styles.signupContainer}>
          <Text style={styles.signupText}>Don't have an account?</Text>
          <Text style={styles.signupLink} onPress={navigateToSignUp}> Sign up</Text>
        </View>
      </View>
    </View>
  );
};

export default Login;