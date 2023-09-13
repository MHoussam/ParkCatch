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
      backgroundColor: '#ffffff',
    },
    tab: {
      paddingVertical: 15,
      paddingHorizontal: 15,
      alignItems: 'center',
      justifyContent: 'center'
    },
    text: {
      color: '#00000050',      
      fontWeight: 'bold',
    },
    activeText: {
      color: '#000000',      
      fontWeight: 'bold',
    },
    activeTab: {
      color: '#000000',
      backgroundColor: '#FECA0E',
    },
    icon: {
      justifyContent: 'flex-end',
      height: 45,
      alignItems: 'center',
    }
});

export default styles;