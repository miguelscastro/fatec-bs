import React from "react";
import { View, Text, Switch } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { createStyles } from "./styles";
import { useAppTheme } from "../../hooks/useAppTheme";
import { useAppSettings } from "../../hooks/useAppSettings";

import { Select } from "../../components/Select";

export function Settings() {
  const { colors } = useAppTheme();
  const { theme, setTheme, currency, setCurrency } = useAppSettings();

  const pageStyles = createStyles(colors);

  const currencies = [
    { label: "Real (R$)", value: "R$" },
    { label: "Dólar (U$)", value: "U$" },
    { label: "Euro (€)", value: "€" },
  ];

  return (
    <SafeAreaView style={pageStyles.pageContainer} edges={["top"]}>
      <View style={pageStyles.settingsContainer}>
        <View style={pageStyles.settingItem}>
          <Text style={pageStyles.label}>Modo Escuro</Text>
          <Switch
            trackColor={{ false: "#767577", true: colors.secondary }}
            thumbColor={theme === "dark" ? colors.primary : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => setTheme(theme === "light" ? "dark" : "light")}
            value={theme === "dark"}
          />
        </View>

        <View style={pageStyles.settingItem}>
          <Text style={pageStyles.label}>Moeda Principal</Text>
          <Select
            pickerItems={currencies}
            selectedValue={currency}
            onValueChange={(val) => setCurrency(val)}
            theme={theme}
          />
        </View>

        <View style={pageStyles.infoContainer}>
          <Text style={pageStyles.infoText}>Calculadora de Custos v1.0</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
