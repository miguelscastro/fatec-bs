import React from "react";
import { View, Text, Pressable, GestureResponderEvent } from "react-native";

import { useAppTheme } from "../../hooks/useAppTheme";
import { styles } from "./styles";

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
  const componentStyles = styles(colors);

  const quantity = item.quantity || 0;
  const unitCost = item.cost || 0;
  const subtotal = quantity * unitCost;

  const hasMargin =
    item.profitMargin !== undefined && item.profitMargin !== null;
  const margin = item.profitMargin || 0;

  const successColor = colors.success || "#00C851";
  const errorColor = "#E53935";
  const markerColor = margin >= 0 ? successColor : errorColor;

  const Container = onPress ? Pressable : View;

  return (
    <Container style={componentStyles.cardContainer} onPress={onPress}>
      <View style={componentStyles.contentRow}>
        <View style={componentStyles.leftContent}>
          <Text style={componentStyles.itemName} numberOfLines={1}>
            {item.name || item.title}
          </Text>

          <Text style={componentStyles.itemDetails}>
            {item.quantity !== undefined ? (
              <>
                Qtd: {item.quantity.toFixed(2)} | Unit: {currency}{" "}
                {unitCost.toFixed(2)}
                {"\n"}Subtotal: {currency} {subtotal.toFixed(2)}
              </>
            ) : (
              `Custo Prod.: ${currency} ${unitCost.toFixed(2)}`
            )}
          </Text>
        </View>

        {onDelete && (
          <View style={componentStyles.rightContent}>
            <Pressable
              onPress={onDelete}
              style={componentStyles.deleteButton}
              hitSlop={15}
            >
              <Text style={componentStyles.deleteButtonText}>X</Text>
            </Pressable>
          </View>
        )}
      </View>

      {hasMargin && (
        <View
          style={[
            componentStyles.marginMarker,
            { backgroundColor: markerColor },
          ]}
        >
          <Text style={componentStyles.marginText}>
            {margin > 0 ? "+" : ""}
            {margin.toFixed(0)}%
          </Text>
        </View>
      )}
    </Container>
  );
}
