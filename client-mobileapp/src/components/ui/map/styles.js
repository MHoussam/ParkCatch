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
        width: '90%',
        height: 135,
        borderRadius: 15,
        backgroundColor: '#fff',
        elevation: 20,
        padding: 10,
        position: 'absolute',
        bottom: 95,
        marginLeft: '5%',
        zIndex: 2,
        flexDirection: 'row',
        alignItems: 'center',
    },
    parkingPhoto: {
        resizeMode: 'cover',
        width: 110, 
        height: 110,
        borderRadius: 5,
    },
    cardInfo: {
        flexDirection: 'column',
    }
});
    
export default styles;