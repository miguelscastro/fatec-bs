import React from "react";
import {
  View,
  Text,
  Switch,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useAppTheme, ThemeColors } from "../../hooks/useAppTheme";
import { useAppSettings } from "../../hooks/useAppSettings";
// Ícones
import { ChevronRight, Moon } from "lucide-react-native";

export function Settings() {
  const { colors } = useAppTheme();
  const { theme, setTheme } = useAppSettings();
  const pageStyles = createStyles(colors);

  // Componente interno para itens de lista
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
      {/* Header Simples */}
      <View style={pageStyles.header}>
        <Text style={pageStyles.headerTitle}>Ajustes</Text>
      </View>

      <ScrollView contentContainerStyle={pageStyles.scrollContent}>
        {/* Seção: Aparência */}
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

const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    pageContainer: {
      flex: 1,
      backgroundColor: colors.background,
      paddingTop: 50, // Padrão seguro igual às outras telas
    },
    header: {
      paddingHorizontal: 24,
      marginBottom: 20,
    },
    headerTitle: {
      fontSize: 32,
      fontWeight: "bold",
      color: colors["brown-dark"],
    },
    scrollContent: {
      paddingHorizontal: 24,
      paddingBottom: 40,
    },
    sectionTitle: {
      fontSize: 12,
      fontWeight: "bold",
      color: colors.brown,
      marginBottom: 8,
      marginLeft: 4,
      marginTop: 16,
      textTransform: "uppercase",
      letterSpacing: 1,
    },
    sectionBox: {
      backgroundColor: colors.white,
      borderRadius: 12,
      overflow: "hidden",
      borderWidth: 1,
      borderColor: colors["base-card"],
    },
    itemContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingVertical: 16,
      paddingHorizontal: 16,
    },
    itemLeft: {
      flexDirection: "row",
      alignItems: "center",
    },
    iconBox: {
      width: 32,
      height: 32,
      borderRadius: 8,
      backgroundColor: colors["base-card"], // Fundo suave pro ícone
      justifyContent: "center",
      alignItems: "center",
      marginRight: 12,
    },
    itemLabel: {
      fontSize: 16,
      color: colors["base-text"],
      fontWeight: "500",
    },
    itemRight: {
      flexDirection: "row",
      alignItems: "center",
    },
    versionText: {
      textAlign: "center",
      color: colors.brown,
      fontSize: 12,
      marginTop: 40,
      opacity: 0.6,
    },
  });
