import React from "react";
// É necessário instalar: npx expo install @react-native-picker/picker
import { Picker } from "@react-native-picker/picker";

import { createStyles } from "./styles";
import { useAppTheme } from "../../hooks/useAppTheme";

interface PickerItemData {
  label: string;
  value: string;
}

interface SelectProps {
  pickerItems: PickerItemData[];
  selectedValue: string;
  onValueChange: (itemValue: string, itemIndex: number) => void;
  label?: string; // Adicionei opcional caso queira usar no futuro
  theme?: string; // Mantido para compatibilidade
}

export function Select({
  pickerItems = [],
  selectedValue,
  onValueChange,
}: SelectProps) {
  // 1. Pegamos as cores do hook
  const { colors, isDark } = useAppTheme();
  const styles = createStyles(colors);

  return (
    <Picker
      style={styles.picker}
      selectedValue={selectedValue}
      onValueChange={onValueChange}
      // Propriedades para garantir contraste no tema escuro:
      dropdownIconColor={colors["base-text"]} // Seta do dropdown (Android)
      itemStyle={{ color: colors["base-text"] }} // Cor dos itens (iOS)
      mode="dropdown" // Opcional: visual de lista ou diálogo
    >
      {/* Item placeholder desabilitado */}
      <Picker.Item
        label="Selecione..."
        value=""
        enabled={false}
        color={isDark ? "#666" : "#999"}
      />

      {pickerItems.map((item, index) => (
        <Picker.Item
          key={index}
          label={item.label}
          value={item.value}
          // Garante a cor correta de cada item na lista
          color={colors["base-text"]}
        />
      ))}
    </Picker>
  );
}
