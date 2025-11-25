import React from "react";
import { Picker } from "@react-native-picker/picker";

import { styles } from "./styles";
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
  const { colors, isDark } = useAppTheme();
  const componentStyles = styles(colors);

  return (
    <Picker
      style={componentStyles.picker}
      selectedValue={selectedValue}
      onValueChange={onValueChange}
      dropdownIconColor={colors["base-text"]}
      itemStyle={{ color: colors["base-text"] }}
      mode="dropdown"
    >
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
          color={colors["base-text"]}
        />
      ))}
    </Picker>
  );
}
