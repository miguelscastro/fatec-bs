import React, { useEffect } from "react";
import { View, Text, Image, ImageSourcePropType } from "react-native";
import { styles } from "./styles";
import { useAppTheme } from "../../../../hooks/useAppTheme";
const dollarImage = require("../../../../assets/dollar_sign.png");

interface LoadingProps {
  navigate: (page: string) => void;
}

export function Loading({ navigate }: LoadingProps) {
  const { colors } = useAppTheme();
  const componentStyles = styles(colors);

  useEffect(() => {
    const timer = setTimeout(() => navigate("Home"), 2000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <View style={componentStyles.splashContainer}>
      <Image
        source={dollarImage as ImageSourcePropType}
        style={componentStyles.backgroundImage}
        resizeMode="cover"
      />
      <Text style={componentStyles.splashTitle}>Calculadora de Insumos</Text>
    </View>
  );
}
