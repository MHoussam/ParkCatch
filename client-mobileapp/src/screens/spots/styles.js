import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 10,
        marginLeft: 0,
        marginRight: 0,
        width: '100%',
        backgroundColor: '#FFFFFF'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 10,
    },
    nextButton: {
      width: '83%',
      height: 35,
      backgroundColor: '#FECA0E',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 20,
      marginTop: 11,
      marginBottom: 30,
    },
    buttonText: {
      color: '#000',
      fontWeight: 'bold',
      fontSize: 17,
    },
    spots: {
      flex: 1,
      alignItems: 'center',
      width: '100%',
    }
});

export default styles;