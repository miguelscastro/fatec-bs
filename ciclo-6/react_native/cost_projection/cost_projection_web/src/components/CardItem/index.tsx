import React from "react";
import { View, Text, Pressable, GestureResponderEvent } from "react-native";

import { createStyles } from "./styles";
import { useAppTheme } from "../../hooks/useAppTheme";

// Interface do objeto que este card espera receber
export interface ItemData {
  id?: string;
  name?: string; // Usado para Ingredientes
  title?: string; // Usado para Produtos (fallback)
  quantity?: number;
  cost?: number; // Custo unitário (Ingrediente) ou total (Produto)
}

interface CardItemProps {
  item: ItemData;
  onDelete?: () => void;
  onPress?: (event: GestureResponderEvent) => void; // Adicionado caso precise clicar no card
  theme?: string;
  currency: string;
}

export function CardItem({ item, onDelete, onPress, currency }: CardItemProps) {
  const { colors } = useAppTheme();
  const styles = createStyles(colors);

  // Fallback: se não tiver quantity (ex: produto), assume 0 para não quebrar o cálculo
  const quantity = item.quantity || 0;
  const unitCost = item.cost || 0;
  const subtotal = quantity * unitCost;

  // Se 'onPress' for passado, usamos Pressable no container, senão View
  const Container = onPress ? Pressable : View;

  return (
    <Container style={styles.ingredientItem} onPress={onPress}>
      <View style={{ flex: 1 }}>
        {/* Aceita item.name (Ingrediente) ou item.title (Produto) */}
        <Text style={styles.ingredientName}>{item.name || item.title}</Text>

        <Text style={styles.ingredientDetails}>
          {/* Lógica condicional: Se for produto (sem qtd), mostra só custo total */}
          {item.quantity !== undefined ? (
            <>
              Qtd: {item.quantity} | Custo Unit.: {currency}{" "}
              {unitCost.toFixed(2)} | Subtotal: {currency} {subtotal.toFixed(2)}
            </>
          ) : (
            // Caso seja usado na lista de Produtos, mostra apenas o custo se disponível
            `Custo Estimado: ${currency} ${unitCost.toFixed(2)}`
          )}
        </Text>
      </View>

      {onDelete && (
        <Pressable onPress={onDelete} style={styles.deleteButton} hitSlop={10}>
          <Text style={styles.deleteButtonText}>X</Text>
        </Pressable>
      )}
    </Container>
  );
}
