import { StyleSheet } from "react-native";
import { ThemeColors } from "../../hooks/useAppTheme";

export const styles = (colors: ThemeColors) =>
  StyleSheet.create({
    pageContainer: {
      flex: 1,
      backgroundColor: colors.background,
      paddingTop: 50,
    },
    headerSection: {
      paddingHorizontal: 24,
      marginTop: 10,
      marginBottom: 20,
    },
    title: {
      fontSize: 28,
      fontWeight: "bold",
      color: colors["brown-dark"],
      marginBottom: 8,
    },
    subtitle: {
      fontSize: 16,
      color: colors["base-text"],
      opacity: 0.8,
    },
    centerContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    listContent: {
      paddingHorizontal: 24,
      paddingTop: 10,
      paddingBottom: 140,
      flexGrow: 1,
    },
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
      color: colors.brown,
      fontSize: 16,
      lineHeight: 24,
    },
    footer: {
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      paddingHorizontal: 24,
      paddingBottom: 40,
      paddingTop: 16,
      backgroundColor: colors.background,
      borderTopWidth: 1,
      borderTopColor: colors["base-card"],
    },
  });
