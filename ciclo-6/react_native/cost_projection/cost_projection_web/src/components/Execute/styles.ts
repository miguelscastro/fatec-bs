import { StyleSheet } from "react-native";
import { ThemeColors, useAppTheme } from "../../hooks/useAppTheme";

const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    button: {
      paddingVertical: 12,
      paddingHorizontal: 24,
      borderRadius: 6,
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
    },
    text: {
      fontSize: 14,
      fontWeight: "bold",
      textTransform: "uppercase",
    },
  });

export const styles = (colors: ThemeColors) => createStyles(colors);
