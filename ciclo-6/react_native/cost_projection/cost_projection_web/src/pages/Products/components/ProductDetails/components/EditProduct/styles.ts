import { StyleSheet } from "react-native";
import { ThemeColors } from "../../../../../../hooks/useAppTheme";

export const styles = (colors: ThemeColors) =>
  StyleSheet.create({
    pageContainer: {
      flex: 1,
      padding: 16,
      backgroundColor: colors.background,
      paddingTop: 50,
    },
    formContainer: {
      flex: 1,
      padding: 16,
    },
    infoBox: {
      backgroundColor: colors["base-card"],
      padding: 12,
      borderRadius: 8,
      marginVertical: 16,
      borderLeftWidth: 4,
      borderLeftColor: colors.brown,
    },
    infoText: {
      color: colors.brown,
      fontSize: 14,
      fontStyle: "italic",
    },
  });
