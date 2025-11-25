import { StyleSheet } from "react-native";
import { ThemeColors } from "../../hooks/useAppTheme";

export const styles = (colors: ThemeColors) =>
  StyleSheet.create({
    container: {
      padding: 12,
      borderRadius: 6,
      marginBottom: 16,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.05,
      shadowRadius: 3.84,
      elevation: 2,
    },
    label: {
      fontSize: 12,
      marginBottom: 4,
    },
    input: {
      fontSize: 16,
      paddingVertical: 4,
      borderBottomWidth: 1,
    },
    errorText: {
      color: "#ff4d4d",
      fontSize: 12,
      marginTop: 4,
    },
  });
