import { StyleSheet } from "react-native";
import { colors, metrics } from "../../styles";

const styles = StyleSheet.create({
  comtainer: {
    flex: 1,
    backgroundColor: colors.gray[1],
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: metrics.basePadding
  },
  containerIdentify: {
    backgroundColor: "red"
  },
  buttonEnter: {
    height: 52,
    backgroundColor: colors.base,
    width: metrics.screenWidth - 40,
    borderRadius: metrics.baseRadius,
    marginTop: metrics.baseMargin,
    alignItems: "center",
    justifyContent: "center"
  },
  buttonEnter1: {
    height: 52,
    backgroundColor: colors.blue[6],
    width: metrics.screenWidth - 40,
    borderRadius: metrics.baseRadius,
    marginTop: metrics.baseMargin,
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold"
  }
});

export default styles;
