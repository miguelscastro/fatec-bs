import { StyleSheet } from "react-native";
import { ThemeColors } from "../../hooks/useAppTheme";

export const styles = (colors: ThemeColors) =>
  StyleSheet.create({
    pageContainer: {
      flex: 1,
      backgroundColor: colors.background,
      paddingTop: 50,
    },
    scrollContent: {
      flexGrow: 1,
      paddingHorizontal: 24,
      paddingBottom: 40,
    },
    formContainer: {
      flex: 1,
      marginTop: 20,
    },
    helperText: {
      fontSize: 14,
      color: colors.brown,
      fontStyle: "italic",
      marginTop: 8,
      marginBottom: 24,
      lineHeight: 20,
    },
    buttonContainer: {
      marginTop: 8,
    },
  });
