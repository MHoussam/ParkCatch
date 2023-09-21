import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 10,
        marginLeft: 0,
        marginRight: 0,
        width: '100%',
        backgroundColor: '#FFFFFF',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 10,
    },
    summaryContainer: {
        marginLeft: -3,        
    },
    infoContainer: {
        width: '90%',
        marginTop: 20,
    },
    subtitle: {
        color: '#848484',
        fontSize: 14,
        fontWeight: '600',
    },
    info: {
        color: '#000',
        fontSize: 15,
        fontWeight: 'bold',
    },
    leftContent: {
        width: '67%',
        marginBottom: 10,
    }
});

export default styles;