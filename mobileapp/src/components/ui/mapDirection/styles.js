import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        marginTop: -20,
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
        color: '#000',
        fontSize: 15,
        fontWeight: '600',
    },
    markerIcon: {
        width: 25,
        height: 40,
    },
    card: {
        width: '90%',
        height: 60,
        borderRadius: 75,
        backgroundColor: '#FECA0E',
        elevation: 20,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 15,
        position: 'absolute',
        bottom: 13,
        marginLeft: '5%',
        zIndex: 2,
        flexDirection: 'row',
        alignItems: 'center',
    },
    parkingPhoto: {
        resizeMode: 'cover',
        width: 37, 
        height: 37,
        borderRadius: 5,
    },
    cardInfo: {
        flexDirection: 'column',
        marginLeft: 15, 
        width: 140,
        flex:1,
        justifyContent: 'space-evenly',
        width: '75%',
    },
    cardInfoRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    bold: {
        fontWeight: 'bold',
    },
    semiBold: {
        fontWeight: '700',
    },
    medium: {
        fontWeight: '600',
    },
    size16: {
        fontSize: 16,
    },
    size13: {
        fontSize: 13,
    },
    size12: {
        fontSize: 12,
    },
    parkingAddress: {
        color: '#000',
    },
    cardName: {
        width: '100%',
    }
});
    
export default styles;