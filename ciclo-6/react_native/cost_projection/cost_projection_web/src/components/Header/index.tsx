import React from "react";
import { View, Text, Pressable, GestureResponderEvent } from "react-native";

import { createStyles } from "./styles";
import { useAppTheme } from "../../hooks/useAppTheme";

interface HeaderProps {
  title: string;
  // onBack é opcional (?) pois nem todas as telas têm botão de voltar
  onBack?: (event: GestureResponderEvent) => void;
  theme?: string; // Mantido opcional para compatibilidade
}

export function Header({ title, onBack }: HeaderProps) {
  // 1. Consumimos as cores do tema atual
  const { colors } = useAppTheme();

  // 2. Criamos os estilos
  const styles = createStyles(colors);

  return (
    <View style={styles.headerContainer}>
      {onBack && (
        // Adicionei hitSlop para facilitar o toque no celular
        <Pressable onPress={onBack} style={styles.backButton} hitSlop={10}>
          <Text style={styles.backButtonText}>{"<"}</Text>
        </Pressable>
      )}
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
}
