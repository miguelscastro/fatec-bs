import { StyleSheet, Platform, StatusBar } from "react-native";
import { ThemeColors } from "../../../../../../hooks/useAppTheme";

export const styles = (colors: ThemeColors) =>
  StyleSheet.create({
    pageContainer: {
      flex: 1,
      backgroundColor: colors.background,
      paddingTop:
        Platform.OS === "android" ? (StatusBar.currentHeight || 24) + 10 : 50,
    },
    formContainer: {
      flex: 1,
      padding: 16,
    },
    sliderWrapper: {
      marginBottom: 20,
      backgroundColor: colors.white,
      paddingVertical: 8,
    },
    labelRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 8,
    },
    label: {
      fontSize: 14,
      fontWeight: "bold",
      color: colors["brown-dark"],
      textTransform: "uppercase",
    },
    valueText: {
      fontSize: 16,
      fontWeight: "bold",
      color: colors["brown-dark"],
    },
    hintText: {
      fontSize: 12,
      color: colors.brown,
      textAlign: "center",
      marginTop: -4,
    },
  });
