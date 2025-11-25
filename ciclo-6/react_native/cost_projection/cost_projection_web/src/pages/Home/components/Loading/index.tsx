import React, { useEffect } from "react";
import { View, Text, Image, ImageSourcePropType } from "react-native";
import { createStyles } from "./styles";
import { useAppTheme } from "../../hooks/useAppTheme";
import type { PageName } from "../../../App";
const dollarImage = require("../../assets/dollar_sign.png");

interface LoadingProps {
  navigate: (page: PageName) => void;
}

export function Loading({ navigate }: LoadingProps) {
  const { colors } = useAppTheme();
  const styles = createStyles(colors);

  useEffect(() => {
    const timer = setTimeout(() => navigate("Home"), 2000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <View style={styles.splashContainer}>
      <Image
        source={dollarImage as ImageSourcePropType}
        style={styles.backgroundImage}
        resizeMode="cover"
      />
      <Text style={styles.splashTitle}>Calculadora de Insumos</Text>
    </View>
  );
}
