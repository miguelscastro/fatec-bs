import { View, Text, FlatList, Pressable } from 'react-native';

import { styles } from './styles';

import { Header } from '../../components/Header';
import { Card } from '../../components/Card';
import { Execute } from '../../components/Execute';

export function Cards({ navigate, items, deleteItem, theme, currency }) {
  const pageStyles = styles(theme);

  return (
    <View style={pageStyles.pageContainer}>
      <Header
        title="Meus Produtos"
        theme={theme}
        onBack={() => navigate('Loading')}
      />

      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card
            item={item}
            onPress={() => navigate('CardDetails', { itemId: item.id })}
            onDelete={() => deleteItem(item.id)}
            theme={theme}
            currency={currency}
          />
        )}
        ListEmptyComponent={
          <Text style={pageStyles.emptyText}>Nenhuma item registrado.</Text>
        }
        contentContainerStyle={{ paddingBottom: 80 }}
      />

      <View style={pageStyles.addProductContainer}>
        <Execute
          title="Novo produto"
          onPress={() => navigate('NewCard')}
          theme={theme}
        />
      </View>

      <Pressable
        style={pageStyles.settingsButton}
        onPress={() => navigate('Settings')}>
        ⚙️
      </Pressable>
    </View>
  );
}
