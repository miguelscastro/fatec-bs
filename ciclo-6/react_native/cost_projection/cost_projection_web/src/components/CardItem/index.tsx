import React from "react";
import {
  View,
  Text,
  Pressable,
  GestureResponderEvent,
  StyleSheet,
} from "react-native";

import { useAppTheme, ThemeColors } from "../../hooks/useAppTheme";

export interface ItemData {
  id?: string;
  name?: string;
  title?: string;
  quantity?: number;
  cost?: number;
  profitMargin?: number;
}

interface CardItemProps {
  item: ItemData;
  onDelete?: () => void;
  onPress?: (event: GestureResponderEvent) => void;
  currency: string;
}

export function CardItem({ item, onDelete, onPress, currency }: CardItemProps) {
  const { colors } = useAppTheme();
  const styles = createStyles(colors);

  const quantity = item.quantity || 0;
  const unitCost = item.cost || 0;
  const subtotal = quantity * unitCost;

  const hasMargin =
    item.profitMargin !== undefined && item.profitMargin !== null;
  const margin = item.profitMargin || 0;

  // Lógica de Cor: Verde se positivo/zero, Vermelho se negativo
  const successColor = colors.success || "#00C851";
  const errorColor = "#E53935";
  const markerColor = margin >= 0 ? successColor : errorColor;

  const Container = onPress ? Pressable : View;

  return (
    <Container style={styles.cardContainer} onPress={onPress}>
      {/* Conteúdo principal do card em linha */}
      <View style={styles.contentRow}>
        {/* Lado Esquerdo: Textos */}
        <View style={styles.leftContent}>
          <Text style={styles.itemName} numberOfLines={1}>
            {item.name || item.title}
          </Text>

          <Text style={styles.itemDetails}>
            {item.quantity !== undefined ? (
              // Layout de Ingrediente
              <>
                Qtd: {item.quantity.toFixed(2)} | Unit: {currency}{" "}
                {unitCost.toFixed(2)}
                {"\n"}Subtotal: {currency} {subtotal.toFixed(2)}
              </>
            ) : (
              // Layout de Produto (apenas custo)
              `Custo Prod.: ${currency} ${unitCost.toFixed(2)}`
            )}
          </Text>
        </View>

        {/* Lado Direito: Apenas o botão de deletar agora (se existir) */}
        {onDelete && (
          <View style={styles.rightContent}>
            <Pressable
              onPress={onDelete}
              style={styles.deleteButton}
              hitSlop={15}
            >
              <Text style={styles.deleteButtonText}>X</Text>
            </Pressable>
          </View>
        )}
      </View>

      {/* O MARCADOR DE MARGEM (Posicionado Absolutamente) */}
      {hasMargin && (
        <View style={[styles.marginMarker, { backgroundColor: markerColor }]}>
          <Text style={styles.marginText}>
            {margin > 0 ? "+" : ""}
            {margin.toFixed(0)}%
          </Text>
        </View>
      )}
    </Container>
  );
}

// --- ESTILOS ATUALIZADOS (Estilo Home) ---

const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    cardContainer: {
      position: "relative",
      backgroundColor: colors.white, // Mudado de base-card para white (Estilo Home)
      paddingTop: 24,
      paddingBottom: 16,
      paddingHorizontal: 16,
      borderRadius: 12,
      // Removemos marginHorizontal pois o container pai já tem padding
      // marginHorizontal: 16,
      marginBottom: 0, // Controlado pelo pai

      // Sombra e Borda estilo Home
      borderWidth: 1,
      borderColor: colors["base-card"],
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.05,
      shadowRadius: 4,
      elevation: 2,
      overflow: "hidden",
    },
    contentRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    leftContent: {
      flex: 1,
      paddingRight: 8,
    },
    rightContent: {
      marginLeft: 8,
    },
    itemName: {
      fontSize: 16,
      fontWeight: "bold",
      color: colors["base-text"],
      marginBottom: 4,
    },
    itemDetails: {
      fontSize: 14,
      color: colors.brown,
      lineHeight: 20,
    },
    marginMarker: {
      position: "absolute",
      top: 0,
      right: 0,
      borderBottomLeftRadius: 12,
      paddingHorizontal: 10,
      paddingVertical: 6,
      justifyContent: "center",
      alignItems: "center",
    },
    marginText: {
      color: colors.white,
      fontSize: 12,
      fontWeight: "bold",
    },
    deleteButton: {
      backgroundColor: "#E53935",
      width: 32,
      height: 32,
      borderRadius: 16,
      justifyContent: "center",
      alignItems: "center",
    },
    deleteButtonText: {
      color: "white",
      fontWeight: "bold",
      fontSize: 14,
    },
  });
