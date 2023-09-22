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
        marginLeft: -1,        
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
        width: '68%',
        marginBottom: 10,
    },
    reservInfo: {
        flex: 1,
        alignItems: 'center',
        width: '100%',
    },
    button: {
        flex: 1,
        alignItems: 'center',
        width: '100%',
    }
});

export default styles;