import { StyleSheet } from "react-native";
import { ThemeColors } from "../../hooks/useAppTheme";

export const styles = (colors: ThemeColors) =>
  StyleSheet.create({
    cardContainer: {
      position: "relative",
      backgroundColor: colors.white,
      paddingTop: 24,
      paddingBottom: 16,
      paddingHorizontal: 16,
      borderRadius: 12,
      marginBottom: 0,
      borderWidth: 1,
      borderColor: colors["base-card"],
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.05,
      shadowRadius: 4,
      elevation: 2,
      overflow: "hidden",
    },
    contentRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    leftContent: {
      flex: 1,
      paddingRight: 8,
    },
    rightContent: {
      marginLeft: 8,
    },
    itemName: {
      fontSize: 16,
      fontWeight: "bold",
      color: colors["base-text"],
      marginBottom: 4,
    },
    itemDetails: {
      fontSize: 14,
      color: colors.brown,
      lineHeight: 20,
    },
    marginMarker: {
      position: "absolute",
      top: 0,
      right: 0,
      borderBottomLeftRadius: 12,
      paddingHorizontal: 10,
      paddingVertical: 6,
      justifyContent: "center",
      alignItems: "center",
    },
    marginText: {
      color: colors.white,
      fontSize: 12,
      fontWeight: "bold",
    },
    deleteButton: {
      backgroundColor: "#E53935",
      width: 32,
      height: 32,
      borderRadius: 16,
      justifyContent: "center",
      alignItems: "center",
    },
    deleteButtonText: {
      color: "white",
      fontWeight: "bold",
      fontSize: 14,
    },
  });
