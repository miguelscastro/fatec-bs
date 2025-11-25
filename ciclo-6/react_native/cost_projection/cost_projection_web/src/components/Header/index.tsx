import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useAppTheme, ThemeColors } from "../../hooks/useAppTheme";

interface HeaderProps {
  title: string;
  onBack?: () => void;
  showBack?: boolean; // Nova prop opcional para forçar mostrar/esconder
}

export function Header({ title, onBack, showBack = true }: HeaderProps) {
  const navigation = useNavigation();
  const { colors } = useAppTheme();
  const styles = createStyles(colors);

  // Se não passar onBack, tenta usar o goBack do navigation
  const handleBack = () => {
    if (onBack) {
      onBack();
    } else if (navigation.canGoBack()) {
      navigation.goBack();
    }
  };

  // Decide se mostra o botão (se showBack for true E tiver ação ou navegação anterior)
  const shouldShowBack = showBack && (onBack || navigation.canGoBack());

  return (
    <View style={styles.headerContainer}>
      {shouldShowBack && (
        <TouchableOpacity
          onPress={handleBack}
          style={styles.backButton}
          hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
          activeOpacity={0.7}
        >
          {/* Se tiver biblioteca de ícones (Lucide/Feather), substitua o Text abaixo pelo Icon */}
          <Text style={styles.backButtonText}>←</Text>
        </TouchableOpacity>
      )}

      <Text style={styles.headerTitle} numberOfLines={1}>
        {title}
      </Text>
    </View>
  );
}

// --- ESTILOS ---

const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    headerContainer: {
      width: "100%",
      height: 56, // Altura padrão de header mobile
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center", // Centraliza o título
      marginBottom: 16,
      marginTop: Platform.OS === "android" ? 16 : 0, // Pequeno ajuste para Android
      backgroundColor: "transparent",
    },
    backButton: {
      position: "absolute",
      left: 0,
      padding: 8,
      zIndex: 10, // Garante que o botão fique sobre o título se necessário
      justifyContent: "center",
      alignItems: "center",
    },
    backButtonText: {
      fontSize: 28, // Seta maior
      fontWeight: "300", // Mais fina e elegante
      color: colors["brown-dark"], // Cor forte da sua paleta
      marginTop: -4, // Ajuste fino para alinhar verticalmente a seta
    },
    headerTitle: {
      fontSize: 20,
      fontWeight: "bold",
      color: colors["brown-dark"], // Cor forte da sua paleta
      textAlign: "center",
      maxWidth: "70%", // Impede que o texto invada a área dos botões
    },
  });
