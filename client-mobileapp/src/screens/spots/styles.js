import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 10,
        marginLeft: 0,
        marginRight: 0,
        width: '100%',
        backgroundColor: '#FFFFFF'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18
    },
    nextButton: {
      width: '85%',
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
    }
});

export default styles;