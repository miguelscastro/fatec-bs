import React from "react";
import { View, Text, TextInput, TextInputProps } from "react-native";
import { useAppTheme } from "../../hooks/useAppTheme";
import { styles } from "./styles";

interface InputFieldProps extends TextInputProps {
  label: string;
  error?: string;
}

export function InputField({ label, error, style, ...props }: InputFieldProps) {
  const { colors } = useAppTheme();
  const componentStyles = styles(colors);

  return (
    <View
      style={[
        componentStyles.container,
        { backgroundColor: colors["base-card"] },
        style,
      ]}
    >
      <Text style={[componentStyles.label, { color: colors["base-text"] }]}>
        {label}
      </Text>
      <TextInput
        style={[
          componentStyles.input,
          {
            color: colors["base-text"],
            borderBottomColor: colors["brown-dark"],
          },
        ]}
        placeholderTextColor={colors.brown}
        {...props}
      />
      {error && <Text style={componentStyles.errorText}>{error}</Text>}
    </View>
  );
}
