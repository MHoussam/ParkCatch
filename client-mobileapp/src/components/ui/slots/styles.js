import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    table: {
      borderWidth: 1,
      borderColor: '#707070',
      marginTop: 10,
    },
    tableRow: {
      flexDirection: 'row',    
    },
    tableCellOdd: {
      borderBottomWidth: 1,
      borderColor: '#707070',
      paddingHorizontal: 14,
      paddingVertical: 9,
    },
    tableCellEven: {
      paddingHorizontal: 14,
      paddingVertical: 9,
    },
    cellText: {
      textAlign: 'center',
    },
  });

  export default styles;