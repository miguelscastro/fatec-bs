import { StyleSheet } from "react-native";
import { ThemeColors } from "../../hooks/useAppTheme";

export const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    pageContainer: {
      flex: 1,
      backgroundColor: colors.background,
    },
    settingsContainer: {
      padding: 16,
    },
    settingItem: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingVertical: 16,
      borderBottomWidth: 1,
      borderBottomColor: colors.border || "#eee",
    },
    label: {
      fontSize: 16,
      fontWeight: "500",
      color: colors["base-text"],
    },
    infoContainer: {
      marginTop: 40,
      alignItems: "center",
      opacity: 0.5,
    },
    infoText: {
      color: colors["base-text"],
    },
  });
