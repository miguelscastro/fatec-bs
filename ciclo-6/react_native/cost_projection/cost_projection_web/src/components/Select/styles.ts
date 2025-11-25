import { StyleSheet } from "react-native";
import { ThemeColors } from "../../hooks/useAppTheme";

export const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    picker: {
      width: "40%",
      // Ajustei para 50px fixos ou auto, pois 80% pode quebrar dependendo do container pai
      // Mas mantive a lógica de cor dinâmica
      height: 50,
      color: colors["base-text"],
      // Usamos a cor de superfície (card) ou um tom levemente diferente para o input
      backgroundColor: colors.surface,
    },
  });
