import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 10,
        marginRight: 0,
        width: '100%',
        backgroundColor: '#FFFFFF',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16,
        marginTop: 10,
    },
    reservPayment: {
        flex: 1,
        width: '100%',
        flexDirection: 'column',
        marginLeft: 17,
    },
    button: {
        // flex: 1,
        alignItems: 'center',
        width: '100%',
        bottom: 20,
    }
});

export default styles;