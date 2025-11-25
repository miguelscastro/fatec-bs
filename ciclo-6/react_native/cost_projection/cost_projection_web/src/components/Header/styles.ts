import { StyleSheet } from "react-native";
import { ThemeColors } from "../../hooks/useAppTheme";

export const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    headerContainer: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 20,
      height: 50,
    },
    backButton: {
      position: "absolute",
      left: 0, // Ajustei para 0 para alinhar melhor com a borda
      padding: 10,
      zIndex: 1,
    },
    backButtonText: {
      fontSize: 24,
      color: colors["base-text"], // Cor dinâmica vinda do hook
    },
    headerTitle: {
      flex: 1,
      textAlign: "center",
      fontSize: 22,
      fontWeight: "bold",
      color: colors["base-text"], // Cor dinâmica vinda do hook
    },
  });
