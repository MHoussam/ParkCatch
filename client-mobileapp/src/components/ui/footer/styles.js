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
      backgroundColor: '#F4F4F4',
    },
    tab: {
      paddingVertical: 20,
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