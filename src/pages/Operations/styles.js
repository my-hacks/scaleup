import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  comtainer: {
    flex: 1,
    alignItems: "center"
  },
  mainContainer: {
    height: 300,

    backgroundColor: "#FFF",
    alignItems: "center",
    padding: 15,
    borderRadius: 30,
    justifyContent: "space-around"
  },
  title: { fontSize: 17, fontWeight: "bold" },
  reorderData: {
    height: 50,
    width: 300,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#cecece",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: 15
  },
  textOrderData: {
    fontSize: 13
  },
  buttonPost: {
    height: 50,
    backgroundColor: "#00D8D6",
    width: 300,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center"
  },
  textButton: { color: "#FFF", fontSize: 18, fontWeight: "bold" }
});

export default styles;
