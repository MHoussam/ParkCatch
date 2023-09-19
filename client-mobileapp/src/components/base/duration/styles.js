import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    slider: {
      width: '98%',
      marginTop: 15,
      marginLeft: -15,
    },
    selectedValue: {
      position: 'absolute',
      top: 32, 
      backgroundColor: 'transparent', 
      zIndex: 1, 
      fontSize: 12,
    },
  });

export default styles;