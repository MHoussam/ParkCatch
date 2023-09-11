import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,    
      paddingTop: 80,   
      alignItems: 'center',
      backgroundColor: '#EAEAEA',
    },
    form: {
      alignItems: 'center',
      width: '70%',
    },
    logo: {
      marginBottom: 20,
    },
    title: {
      fontSize: 20,
      fontWeight: '600',
      marginBottom: 20,
    },
    input: {
      width: '100%',
      height: 35,
      backgroundColor: '#ffffff',
      marginBottom: 10,
      paddingHorizontal: 15,
      borderRadius: 20,
    },
    forgotPasswordContainer: {
      flexDirection: 'row',
      alignSelf: 'flex-end',
    },
    forgotPasswordText: {
      fontSize: 13,
    },
    loginButton: {
      width: '100%',
      height: 35,
      backgroundColor: '#FECA0E',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 20,
      marginTop: 20,
      marginBottom: 30,
    },
    buttonText: {
      color: '#000',
      fontWeight: 'bold',
      fontSize: 17,
    },
    loginWithContainer: {
      flexDirection: 'row',
      marginBottom: 5,
    },
    loginWithText: {
      fontSize: 13,
    },
    googleContainer: {
      backgroundColor: '#ffffff',
      width: 26,
      height: 26,
      borderRadius: 5,
      marginBottom: 25,
      justifyContent: 'center',
      alignItems: 'center',
    },
    google: {
      width: 20,
      height: 20,
    },
    signupContainer: {
      flexDirection: 'row',
      marginBottom: 5,
    },
    signupText: {
      fontSize: 13,
    },
    signupLink: {
      fontSize: 13,
      color: '#0086D1',
      fontWeight: 'bold',
    },
  });
  
  export default styles;