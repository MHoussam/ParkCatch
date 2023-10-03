import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  change: {
    resizeMode: "cover",
    maxWidth: 25,
    maxHeight: 25,
    borderRadius: 10,
  },
  logout: {
    resizeMode: "cover",
    maxWidth: 20,
    maxHeight: 20,
    borderRadius: 10,
  },
  row: {
    flexDirection: "row",
    borderBottomWidth: 1,
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    alignItems: 'center',
  },
  title: {
    fontWeight: "600",
    marginLeft: 10,
  },
  nameContainer: {
    alignItems: "center",
    // marginLeft: 20,
  },
  name: {
    fontWeight: "700",
    fontSize: 16,
  },
});

export default styles;
