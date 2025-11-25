import { StyleSheet } from "react-native";
import { ThemeColors } from "../../hooks/useAppTheme";

export const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    inputContainer: {
      marginBottom: 20,
    },
    label: {
      fontSize: 16,
      marginBottom: 8,
      fontWeight: "600", // Adicionei um peso para destacar o label
      color: colors["base-text"],
    },
    input: {
      backgroundColor: colors.surface,
      padding: 15,
      borderRadius: 8,
      fontSize: 16,
      color: colors["base-text"],
      borderWidth: 1,
      borderColor: colors.border || "#ddd",
    },
    // Estilo opcional para quando estiver desabilitado (loading)
    disabledInput: {
      opacity: 0.6,
      backgroundColor: colors.background,
    },
  });
