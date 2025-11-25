import { StyleSheet } from "react-native";
import { ThemeColors } from "../../hooks/useAppTheme";

export const styles = (colors: ThemeColors) =>
  StyleSheet.create({
    pageContainer: {
      flex: 1,
      backgroundColor: colors.background,
      paddingTop: 50,
    },
    header: {
      paddingHorizontal: 24,
      marginBottom: 20,
    },
    headerTitle: {
      fontSize: 32,
      fontWeight: "bold",
      color: colors["brown-dark"],
    },
    scrollContent: {
      paddingHorizontal: 24,
      paddingBottom: 40,
    },
    sectionTitle: {
      fontSize: 12,
      fontWeight: "bold",
      color: colors.brown,
      marginBottom: 8,
      marginLeft: 4,
      marginTop: 16,
      textTransform: "uppercase",
      letterSpacing: 1,
    },
    sectionBox: {
      backgroundColor: colors.white,
      borderRadius: 12,
      overflow: "hidden",
      borderWidth: 1,
      borderColor: colors["base-card"],
    },
    itemContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingVertical: 16,
      paddingHorizontal: 16,
    },
    itemLeft: {
      flexDirection: "row",
      alignItems: "center",
    },
    iconBox: {
      width: 32,
      height: 32,
      borderRadius: 8,
      backgroundColor: colors["base-card"],
      justifyContent: "center",
      alignItems: "center",
      marginRight: 12,
    },
    itemLabel: {
      fontSize: 16,
      color: colors["base-text"],
      fontWeight: "500",
    },
    itemRight: {
      flexDirection: "row",
      alignItems: "center",
    },
    versionText: {
      textAlign: "center",
      color: colors.brown,
      fontSize: 12,
      marginTop: 40,
      opacity: 0.6,
    },
  });
