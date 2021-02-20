import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export const styles = StyleSheet.create({
  box: {
    width: "100%",
    backgroundColor: "white",
    borderRadius: 4,
    paddingLeft: "7%",
    paddingTop: "7%",
    paddingRight: "7%",
    paddingBottom: "5%",
  },

  firstLine: {
    flexDirection: "row",
    alignItems: "center",
  },

  secondLine: {
    marginTop: wp("3%"),
    marginBottom: wp("1.5%"),
  },

  fourthLine: {
    marginTop: wp("-1.5%"),
  },
});
