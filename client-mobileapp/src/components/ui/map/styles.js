import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        marginTop: -80,
    },
    map: {
        flex: 1,
    },
    error: {
        marginTop: 100,
        textAlign: 'center',
    },  
    parking: {
        flex: 1,
        alignItems: 'center',
    },
    parkingName: {
        color: '#3686F9',
        fontSize: 17,
    },
    markerIcon: {
        width: 25,
        height: 40,
    },
    card: {
        width: '80%',
        height: 100,
        borderRadius: 15,
        backgroundColor: '#fff',
        elevation: 20,
        padding: 10,
        position: 'absolute',
        marginTop: 610,
        marginLeft: '10%',
        zIndex: 2,
    },
    });
    

export default styles;