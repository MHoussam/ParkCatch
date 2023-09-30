import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        height: 65,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        marginTop: 20,
        justifyContent: 'center',
        width: '100%',
        zIndex: 1,
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        marginLeft: 15,
    },
    title: {
        color: '#FFF',
        fontWeight: '800',
        fontSize: 17,
    },
    subtitle: {
        color: '#FFF',
        fontWeight: '600',
        fontSize: 14,
    },
});

export default styles;