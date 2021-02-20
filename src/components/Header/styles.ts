import { StatusBar, StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export const styles = StyleSheet.create({
  header: {
    marginTop: StatusBar.currentHeight,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  name: {
    fontSize: wp("6%"),
    color: "white",
    fontFamily: "SemiBold",
    letterSpacing: wp("0.3%"),
  },

  containerIcons: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  icon: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255, 255, 255, 0.140)",
    borderRadius: 100,
    width: wp("13%"),
    height: hp("6.5%"),
    marginHorizontal: wp("1%"),
  },
});
