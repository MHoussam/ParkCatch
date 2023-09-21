import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex:1,
        // height: '100%',
        justifyContent: 'center',
    },
    map: {
        // height: '100%',
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
        height: 135,
        borderRadius: 15,
        backgroundColor: '#fff',
        elevation: 20,
        padding: 10,
        position: 'absolute',
        bottom: 20,
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
        marginLeft: 20, 
        width: 140,
        flex:1,
        justifyContent: 'space-evenly',
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
        color: '#757575',
    }
});
    
export default styles;