import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginTop: -80,
    },
    map: {
        flex: 1
    },
    error: {
        marginTop: 100,
        textAlign: 'center',
    },
    customMarkerStyle: {
        backgroundColor: 'blue',
        borderRadius: 5,
        padding: 5,
      },
      customMarkerText: {
        color: 'white',
        fontWeight: 'bold',
      },   
})

export default styles;