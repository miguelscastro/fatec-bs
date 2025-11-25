import { StyleSheet } from "react-native";
import { ThemeColors } from "../../hooks/useAppTheme";

export const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    pageContainer: {
      flex: 1,
      padding: 16,
      backgroundColor: colors.background,
    },
    detailsHeader: {
      padding: 16,
      alignItems: "center",
      borderBottomWidth: 1,
      borderBottomColor: colors.border || "#eee",
      marginBottom: 10,
    },
    totalCostText: {
      fontSize: 24,
      fontWeight: "bold",
      color: colors["base-text"], // Cor dinâmica
    },
    sectionTitle: {
      fontSize: 20,
      fontWeight: "bold",
      marginTop: 20,
      marginBottom: 10,
      paddingHorizontal: 16,
      color: colors["base-text"],
    },
    emptyText: {
      textAlign: "center",
      marginTop: 50,
      color: colors.placeholder || "#999",
      fontSize: 16,
    },
  });
