import { StyleSheet } from "react-native";
import { ThemeColors } from "../../hooks/useAppTheme";

export const styles = (colors: ThemeColors) =>
  StyleSheet.create({
    picker: {
      width: "40%",
      height: 50,
      color: colors["base-text"],
      backgroundColor: colors.surface,
    },
  });
