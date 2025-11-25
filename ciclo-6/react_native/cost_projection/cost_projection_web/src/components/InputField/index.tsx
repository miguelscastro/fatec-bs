import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TextInputProps,
} from "react-native";
import { useAppTheme } from "../../hooks/useAppTheme";

interface InputFieldProps extends TextInputProps {
  label: string;
  error?: string;
}

export function InputField({ label, error, style, ...props }: InputFieldProps) {
  const { colors } = useAppTheme();

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: colors["base-card"] },
        style,
      ]}
    >
      <Text style={[styles.label, { color: colors["base-text"] }]}>
        {label}
      </Text>
      <TextInput
        style={[
          styles.input,
          {
            color: colors["base-text"],
            borderBottomColor: colors["brown-dark"],
          },
        ]}
        placeholderTextColor={colors.brown}
        {...props}
      />
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
    borderRadius: 6,
    marginBottom: 16,
    // Sombra leve para imitar o box-shadow do web
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 3.84,
    elevation: 2,
  },
  label: {
    fontSize: 12,
    marginBottom: 4,
    fontFamily: "Roboto", // Se tiver a fonte
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
