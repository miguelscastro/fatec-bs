import { View, Text, Pressable } from 'react-native';

import { styles } from './styles';

export function Card({ item, onPress, onDelete, theme, currency }) {
  const totalCost = item.ingredients.reduce(
    (sum, ingredient) => sum + ingredient.quantity * ingredient.cost,
    0
  );

  const componentStyles = styles(theme);

  return (
    <View style={componentStyles.card}>
      <Pressable onPress={onPress} style={{ flex: 1 }}>
        <Text style={componentStyles.cardTitle}>{item.title}</Text>
        <Text style={componentStyles.cardCost}>
          Custo de Produção: {currency} {totalCost.toFixed(2)}
        </Text>
      </Pressable>
      <Pressable onPress={onDelete} style={componentStyles.deleteButton}>
        <Text style={componentStyles.deleteButtonText}>X</Text>
      </Pressable>
    </View>
  );
}
