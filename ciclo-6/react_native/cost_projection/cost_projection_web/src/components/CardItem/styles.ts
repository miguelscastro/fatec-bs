import { StyleSheet } from "react-native";
import { ThemeColors } from "../../hooks/useAppTheme";

export const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    ingredientItem: {
      backgroundColor: colors.surface, // Branco (Light) ou Marrom Café (Dark)
      padding: 16,
      borderRadius: 8,
      marginHorizontal: 16,
      marginBottom: 8,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      // Adicionei uma sombra sutil para destacar do fundo
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.1,
      shadowRadius: 2,
      elevation: 2,
    },
    ingredientName: {
      fontSize: 16,
      fontWeight: "bold",
      color: colors["base-text"],
    },
    ingredientDetails: {
      fontSize: 14,
      // Usamos subtext ou uma opacidade do texto principal
      color: colors.subtext || "#888",
      marginTop: 4,
    },
    deleteButton: {
      backgroundColor: colors.error,
      width: 30,
      height: 30,
      borderRadius: 15,
      justifyContent: "center",
      alignItems: "center",
      marginLeft: 10,
    },
    deleteButtonText: {
      color: "white",
      fontWeight: "bold",
      fontSize: 16,
    },
  });
