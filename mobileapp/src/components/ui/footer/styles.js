import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      // position: 'fixed',
      // bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: '#ffffff',
    },
    tab: {
      paddingVertical: 15,
      paddingHorizontal: 0,
      alignItems: 'center',
      justifyContent: 'center',
      width: '25%',
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
    label: {
      justifyContent: 'flex-end',
      height: 45,
      alignItems: 'center',
    },
    icon: {
      opacity: 0.5,
    },
    activeIcon: {
      opacity: 1,
    },
    home: {
      minHeight: 21,
      minWidth: 20,
    },
    reservations: {
      minHeight: 20,
      minWidth: 24,
    },
    notifications: {
      minHeight: 21,
      minWidth: 19,
    },
    settings: {
      minHeight: 22,
      minWidth: 20,
    }
});

export default styles;