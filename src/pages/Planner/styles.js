import { StyleSheet } from "react-native";
import { colors, metrics } from "../../styles";

const styles = StyleSheet.create({
  comtainer: {
    flex: 1,
    alignItems: "center",
    fontFamily: "Heebo"
  },
  dayContainer: {
    height: 180,
    width: "100%",
    // backgroundColor: "blue",
    position: "relative",
    marginTop: 5
  },
  dayContainer1: {
    height: 400,
    width: "100%",
    // backgroundColor: "lightblue",
    position: "relative",
    marginTop: 5
  },
  schedule: {
    height: 110,
    width: "100%",
    backgroundColor: "#FFF",
    borderRadius: 20,
    marginTop: 15,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#cecece"
  },
  schedule1: {
    height: 110,
    width: "100%",
    backgroundColor: "#dddddd",
    borderRadius: 20,
    marginTop: 15,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#999999"
  },
  buttonConfirm: {
    height: 44,
    width: "40%",
    backgroundColor: "#00D8D6",
    position: "absolute",
    right: 10,
    bottom: 10,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#cecece"
  },
  buttonConfirm1: {
    height: 44,
    width: "40%",
    backgroundColor: "#dddddd",
    position: "absolute",
    right: 10,
    top: 120,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#999999"
  },
  reajust: {
    height: 28,
    width: "40%",
    backgroundColor: colors.lime[4],
    position: "absolute",
    right: 10,
    top: 25,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#999999"
  }
});

export default styles;
