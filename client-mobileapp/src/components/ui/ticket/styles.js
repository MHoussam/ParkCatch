import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        width: '90%',
        height: '64%',
        marginTop: 28,
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
    }
})

export default styles;