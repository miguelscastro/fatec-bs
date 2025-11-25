import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  TouchableOpacityProps,
} from "react-native";
import { useAppTheme } from "../../hooks/useAppTheme";

interface ExecuteProps extends TouchableOpacityProps {
  title: string;
}

export function Execute({ title, style, ...props }: ExecuteProps) {
  const { colors } = useAppTheme();

  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors["brown-dark"] }, style]}
      activeOpacity={0.8}
      {...props}
    >
      <Text style={[styles.text, { color: colors.white }]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
    width: "100%", // Ocupa a largura disponível do container
  },
  text: {
    fontSize: 14,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});
