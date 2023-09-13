import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    table: {
      borderBottomWidth: 2,
      borderRightWidth: 2,
      borderLeftWidth: 2,
      borderColor: '#70707090',
      marginTop: 15,
    },
    tableRow: {
      flexDirection: 'row',    
    },
    tableCell: {
      borderTopWidth: 2,
      borderColor: '#70707090',
      paddingHorizontal: 6,
      paddingVertical: 4,
      width: 66,
      height: 39,
      alignItems: 'center',
      justifyContent: 'center',
    },
    tableCellGap: {
      borderTopWidth: 2,
      borderColor: '#70707090',
      paddingHorizontal: 6,
      paddingVertical: 4,
      width: 66,
      height: 39,
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 55,
      marginLeft: 55,
    },
    entranceCell: {
      borderTopWidth: 2,
      borderColor: 'transparent',
      paddingHorizontal: 6,
      paddingVertical: 4,
      width: 66,
      height: 39,
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 55,
      marginLeft: 55,
    },
    cellText: {
      textAlign: 'center',
    },
  });

  export default styles;