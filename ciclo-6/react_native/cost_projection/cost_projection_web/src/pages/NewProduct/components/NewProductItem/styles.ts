import { StyleSheet } from "react-native";
import { ThemeColors } from "../../hooks/useAppTheme";

export const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    pageContainer: {
      flex: 1,
      padding: 16,
      backgroundColor: colors.background,
    },
    formContainer: {
      justifyContent: "center",
      padding: 16,
    },
    inputContainer: {
      marginBottom: 20,
    },
    label: {
      fontSize: 16,
      marginBottom: 8,
      color: colors["base-text"],
    },
    errorText: {
      color: colors.error,
      textAlign: "center",
      marginTop: 10,
    },
  });
