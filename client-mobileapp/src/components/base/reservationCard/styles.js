import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex:1,
        // height: '100%',
        // marginTop: -75,
        paddingTop: 20,
    },
    reservationCard: {
        width: '90%',
        height: 135,
        borderRadius: 15,
        backgroundColor: '#fff',
        elevation: 20,
        padding: 10,
        bottom: 20,
        marginLeft: '5%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    parkingPhoto: {
        resizeMode: 'cover',
        width: 110, 
        height: 110,
        borderRadius: 10,
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
    size15: {
        fontSize: 15,
    },
    size13: {
        fontSize: 13,
    },
    size12: {
        fontSize: 12,
    },
    address: {
        color: '#757575',
    },
    status: {
        color: '#FF0000',
    },
});
    
export default styles;