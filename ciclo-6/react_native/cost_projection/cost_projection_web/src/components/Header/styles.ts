import { StyleSheet, Platform } from "react-native";
import { ThemeColors } from "../../hooks/useAppTheme";

export const styles = (colors: ThemeColors) =>
  StyleSheet.create({
    headerContainer: {
      width: "100%",
      height: 56,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 16,
      marginTop: Platform.OS === "android" ? 16 : 0,
      backgroundColor: "transparent",
    },
    backButton: {
      position: "absolute",
      left: 0,
      padding: 8,
      zIndex: 10,
      justifyContent: "center",
      alignItems: "center",
    },
    backButtonText: {
      fontSize: 28,
      fontWeight: "300",
      color: colors["brown-dark"],
      marginTop: -4,
    },
    headerTitle: {
      fontSize: 20,
      fontWeight: "bold",
      color: colors["brown-dark"],
      textAlign: "center",
      maxWidth: "70%",
    },
  });
