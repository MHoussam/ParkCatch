import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        width: '90%',
        height: '83%',
        marginTop: 28,
        marginBottom: 4,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        backgroundColor: '#FECA0E',
    },
    innerContainer: {
        backgroundColor: '#FFF',
        width: '90%',
        height: '95%',
        borderRadius: 30,
        alignItems: 'center',
        paddingTop: 20,
    },
    pic: {
        resizeMode: 'cover',
        width: 200, 
        height: 200,
    },
    line: {
        borderStyle: 'dashed',
        borderBottomWidth: 1,
        color: '#000',
        width: '100%',
        marginTop: 15,
      },      
    summary: {
        width: '90%',
    },
    infoContainer: {
        width: '84%',
        marginTop: 15,
        marginLeft: -7,
    },
    subtitle: {
        color: '#848484',
        fontSize: 13,
        fontWeight: '600',
    },
    info: {
        color: '#000',
        fontSize: 14,
        fontWeight: 'bold',
    },
    leftContent: {
        width: '66%',
        marginBottom: 7,
    },
    parkingPhoto: {
        objectFit: 'cover',
        width: '80%',
        height: 150,
        borderRadius: 10,
    }
})

export default styles;