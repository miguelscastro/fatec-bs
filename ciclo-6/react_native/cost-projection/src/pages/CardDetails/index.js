import { View, Text, ScrollView } from 'react-native';

import { styles } from './styles';

import { Header } from '../../components/Header';
import { CardItem } from '../../components/CardItem';
import { Execute } from '../../components/Execute';

export function CardDetails({
  navigate,
  params,
  getItemById,
  deleteIngredient,
  theme,
  currency,
}) {
  const item = getItemById(params.itemId);
  const pageStyles = styles(theme);

  if (!item) {
    return (
      <View style={pageStyles.pageContainer}>
        <Header title="Erro" onBack={() => navigate('Home')} theme={theme} />
        <Text style={pageStyles.emptyText}>Produto não encontrado.</Text>
      </View>
    );
  }

  let totalCost = 0
  for(const i of item.ingredients) {
    const subtotal = i.quantity * i.cost
    totalCost += subtotal
  }

  return (
    <View style={pageStyles.pageContainer}>
      <Header
        title={item.title}
        onBack={() => navigate('Cards')}
        theme={theme}
      />

      <ScrollView>
        <View style={pageStyles.detailsHeader}>
          <Text style={pageStyles.totalCostText}>
            Custo Total: {currency}{totalCost.toFixed(2)}
          </Text>
        </View>
        <Text style={pageStyles.sectionTitle}>Ingredientes</Text>

        {item.ingredients.length > 0 ? (
          item.ingredients.map((ing) => (
            <CardItem
              key={ing.id}
              item={ing}
              onDelete={() => deleteIngredient(item.id, ing.id)}
              theme={theme}
              currency={currency}
            />
          ))
        ) : (
          <Text style={pageStyles.emptyText}>
            Adicione novos itens ao produto.
          </Text>
        )}
      </ScrollView>

      <Execute
        title="Adicionar item"
        onPress={() => navigate('AddCardItem', { itemId: item.id })}
        theme={theme}
      />
    </View>
  );
}
