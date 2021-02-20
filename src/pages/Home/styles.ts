import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8a05be",
    paddingHorizontal: wp("4%"),
    paddingTop: hp("4%"),
  },

  containerScroll: {
    flex: 1,
    marginTop: wp("6%"),
  },
});
