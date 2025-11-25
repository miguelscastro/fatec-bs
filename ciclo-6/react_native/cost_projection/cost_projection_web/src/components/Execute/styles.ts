import { StyleSheet } from "react-native";
import { ThemeColors } from "../../hooks/useAppTheme";

export const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    button: {
      backgroundColor: colors.primary, // Usa a cor primária do tema (Marrom/Bege)
      padding: 15,
      borderRadius: 8,
      alignItems: "center",
      marginTop: 10,
    },
    buttonText: {
      color: colors.onPrimary, // Texto sobre a cor primária (Branco/Preto)
      fontSize: 18,
      fontWeight: "bold",
    },
  });
