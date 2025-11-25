import { StyleSheet } from "react-native";
import { ThemeColors } from "../../hooks/useAppTheme";

export const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    pageContainer: {
      flex: 1,
      backgroundColor: colors.background,
    },
    scrollContent: {
      flexGrow: 1,
      padding: 24, // Padding lateral maior para ficar elegante
    },
    headerContainer: {
      marginBottom: 32,
      marginTop: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: "bold",
      color: colors["brown-dark"],
      marginBottom: 8,
    },
    subtitle: {
      fontSize: 16,
      color: colors["base-text"],
      opacity: 0.8,
    },
    formContainer: {
      flex: 1,
    },
    buttonContainer: {
      marginTop: 24,
    },
  });
