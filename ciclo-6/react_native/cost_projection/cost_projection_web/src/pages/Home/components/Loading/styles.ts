import { StyleSheet } from "react-native";
import { ThemeColors } from "../../hooks/useAppTheme";

export const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    splashContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      // Usa a cor primária do tema (Marrom no Light, Bege no Dark)
      backgroundColor: colors.primary,
    },
    backgroundImage: {
      position: "absolute",
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      opacity: 0.1,
    },
    splashTitle: {
      fontSize: 24,
      fontWeight: "bold",
      // Garante contraste (Branco no Light, Preto no Dark)
      color: colors.onPrimary,
    },
  });
