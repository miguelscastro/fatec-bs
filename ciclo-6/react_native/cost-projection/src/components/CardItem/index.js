import { View, Text, Pressable } from 'react-native';

import { styles } from './styles';

export function CardItem({ item, onDelete, theme, currency }) {
  const componentStyles = styles(theme);
  return (
    <View style={componentStyles.ingredientItem}>
      <View style={{ flex: 1 }}>
        <Text style={componentStyles.ingredientName}>{item.name}</Text>
        <Text style={componentStyles.ingredientDetails}>
          Qtd: {item.quantity} | Custo Unit.: {currency} {item.cost.toFixed(2)}{' '}
          | Subtotal: {currency} {(item.quantity * item.cost).toFixed(2)}
        </Text>
      </View>
      <Pressable onPress={onDelete} style={componentStyles.deleteButton}>
        <Text style={componentStyles.deleteButtonText}>X</Text>
      </Pressable>
    </View>
  );
}
