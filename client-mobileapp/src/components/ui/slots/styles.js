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
      width: 70,
      height: 37,
      alignItems: 'center',
      justifyContent: 'center',
    },
    tableCellGap: {
      borderTopWidth: 2,
      borderColor: '#70707090',
      paddingHorizontal: 6,
      paddingVertical: 4,
      width: 66,
      height: 37,
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
    available: {
      borderRadius: 10,
      backgroundColor: '#E0E5F6',
      width: 62,
      height: 26,
      justifyContent: 'center',
  },
  reserved: {
    borderRadius: 10,
    backgroundColor: '#707070',
    width: 62,
    height: 26,
    justifyContent: 'center',
  },
  reservedTitle: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
  availableTitle: {
    color: '#9A9FB0',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },
});

  export default styles;