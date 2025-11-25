import { StyleSheet } from "react-native";
import { ThemeColors } from "../../hooks/useAppTheme";

export const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    pageContainer: {
      flex: 1,
      backgroundColor: colors.background,
    },
    headerRow: {
      flexDirection: "row",
      alignItems: "center",
      paddingRight: 16, // Espaço para o botão de settings não colar na borda
    },
    settingsButton: {
      padding: 8,
      borderRadius: 8,
      backgroundColor: colors.surface, // Um fundo sutil para o botão
      // Sombra leve no botão de settings
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
      marginBottom: 20, // Alinha com o margin-bottom do Header
    },
    centerContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    listContent: {
      paddingTop: 10,
      paddingBottom: 120, // Espaço extra grande pro botão flutuante
      flexGrow: 1, // Importante para o EmptyState centralizar verticalmente
    },

    // Estilos do Empty State
    emptyContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 60,
      paddingHorizontal: 40,
    },
    emptyTitle: {
      fontSize: 20,
      fontWeight: "bold",
      color: colors["base-text"],
      marginTop: 20,
      marginBottom: 8,
    },
    emptyText: {
      textAlign: "center",
      color: colors.placeholder, // Ajustado: subtext não existe, usando placeholder
      fontSize: 16,
      lineHeight: 24,
    },

    // Container do Botão Flutuante (FAB)
    addProductContainer: {
      position: "absolute",
      bottom: 20,
      right: 20,
      left: 20,
      // Sombra para destacar o botão do conteúdo da lista
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.2,
      shadowRadius: 5,
      elevation: 5,
    },
  });
