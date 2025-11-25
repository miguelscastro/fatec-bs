import React from "react";
import { View, Text, Switch, TouchableOpacity, ScrollView } from "react-native";
import { useAppTheme } from "../../hooks/useAppTheme";
import { useAppSettings } from "../../hooks/useAppSettings";
import { ChevronRight, Moon } from "lucide-react-native";
import { styles } from "./styles";

export function Settings() {
  const { colors } = useAppTheme();
  const { theme, setTheme } = useAppSettings();
  const pageStyles = styles(colors);

  const SettingsItem = ({
    icon: Icon,
    label,
    onPress,
    valueComponent,
  }: {
    icon: any;
    label: string;
    onPress?: () => void;
    valueComponent?: React.ReactNode;
  }) => (
    <TouchableOpacity
      style={pageStyles.itemContainer}
      onPress={onPress}
      disabled={!onPress}
      activeOpacity={0.7}
    >
      <View style={pageStyles.itemLeft}>
        <View style={pageStyles.iconBox}>
          <Icon size={20} color={colors["brown-dark"]} />
        </View>
        <Text style={pageStyles.itemLabel}>{label}</Text>
      </View>

      <View style={pageStyles.itemRight}>
        {valueComponent}
        {onPress && !valueComponent && (
          <ChevronRight size={20} color={colors.brown} />
        )}
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={pageStyles.pageContainer}>
      <View style={pageStyles.header}>
        <Text style={pageStyles.headerTitle}>Ajustes</Text>
      </View>

      <ScrollView contentContainerStyle={pageStyles.scrollContent}>
        <Text style={pageStyles.sectionTitle}>APARÊNCIA</Text>
        <View style={pageStyles.sectionBox}>
          <SettingsItem
            icon={Moon}
            label="Modo Escuro"
            valueComponent={
              <Switch
                trackColor={{ false: "#E0E0E0", true: colors["brown-dark"] }}
                thumbColor={"#FFFFFF"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={() =>
                  setTheme(theme === "light" ? "dark" : "light")
                }
                value={theme === "dark"}
              />
            }
          />
        </View>

        <Text style={pageStyles.versionText}>Versão 1.0.0</Text>
      </ScrollView>
    </View>
  );
}
