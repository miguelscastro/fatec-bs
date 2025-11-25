import React from "react";
import {
  View,
  Text,
  Image,
  ImageSourcePropType,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useAppTheme, ThemeColors } from "../../hooks/useAppTheme"; // Ajuste o caminho conforme sua estrutura
import { Execute } from "../../components/Execute";

const dollarImage = require("../../assets/dollar_sign.png");
const { width } = Dimensions.get("window");

// Using shared Execute component from components/Execute

// --- 2. Tela Home ---
export function Home() {
  const navigation = useNavigation<any>();
  const { colors } = useAppTheme();

  // Passamos as cores para a função de estilos para mantê-los dinâmicos
  const pageStyles = createStyles(colors);

  return (
    <View style={pageStyles.pageContainer}>
      {/* Imagem de Fundo com tratamento de cor */}
      <View style={pageStyles.imageWrapper}>
        <Image
          source={dollarImage as ImageSourcePropType}
          style={pageStyles.backgroundImage}
          resizeMode="contain"
        />
      </View>

      <View style={pageStyles.contentContainer}>
        <View style={pageStyles.textGroup}>
          <Text style={pageStyles.title}>Bem-vindo(a)!</Text>
          <Text style={pageStyles.subtitle}>
            Calcule o custo de produção de forma fácil e rápida.
          </Text>
        </View>

        <View style={pageStyles.footer}>
          <Execute
            title="VER PRODUTOS"
            onPress={() => navigation.navigate("Products")}
          />
        </View>
      </View>
    </View>
  );
}

// --- 3. Estilos Unificados ---
const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    pageContainer: {
      flex: 1,
      backgroundColor: colors.background, // #FAFAFA
    },
    imageWrapper: {
      ...StyleSheet.absoluteFillObject,
      justifyContent: "center",
      alignItems: "center",
      zIndex: -1,
    },
    backgroundImage: {
      width: width * 0.8,
      height: width * 0.8,
      opacity: 0.05, // Bem sutil para não brigar com o texto
      tintColor: colors.brown, // Aplica o tom terroso na imagem
    },
    contentContainer: {
      flex: 1,
      padding: 24,
      justifyContent: "space-between", // Separa texto do botão
    },
    textGroup: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    title: {
      fontSize: 32,
      fontWeight: "bold",
      color: colors["brown-dark"], // #403937 - Cor forte para título
      textAlign: "center",
      marginBottom: 12,
      letterSpacing: 0.5,
    },
    subtitle: {
      fontSize: 18,
      color: colors["base-text"], // #574F4D - Cor suave para leitura
      textAlign: "center",
      lineHeight: 26,
      maxWidth: "80%",
    },
    footer: {
      width: "100%",
      marginBottom: 20,
    },
  });

// Estilos estáticos do botão (que não mudam com o tema, exceto cores passadas via prop)
const styles = StyleSheet.create({
  buttonContainer: {
    height: 56,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
});
