import React from "react";
import { TouchableOpacity, Text, TouchableOpacityProps } from "react-native";
import { useAppTheme } from "../../hooks/useAppTheme";
import { styles } from "./styles";

interface ExecuteProps extends TouchableOpacityProps {
  title: string;
}

export function Execute({ title, style, ...props }: ExecuteProps) {
  const { colors } = useAppTheme();
  const componentStyles = styles(colors);

  return (
    <TouchableOpacity
      style={[
        componentStyles.button,
        { backgroundColor: colors["brown-dark"] },
        style,
      ]}
      activeOpacity={0.8}
      {...props}
    >
      <Text style={[componentStyles.text, { color: colors.white }]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
