import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      height: 60,
      backgroundColor: '#ffffff',
    },
    tab: {
      paddingVertical: 10,
      paddingHorizontal: 15,
    },
    text: {
      color: '#00000050',
    },
    activeTab: {
      color: '#000000',
      backgroundColor: '#FECA0E', 
      fontWeight: 'bold',
    },
});

export default styles;