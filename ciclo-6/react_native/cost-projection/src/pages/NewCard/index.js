import { useState } from 'react';
import { ScrollView, View } from 'react-native';

import { styles } from './styles';

import { Header } from '../../components/Header';
import { InputField } from '../../components/InputField';
import { Execute } from '../../components/Execute';

export function NewCard({ navigate, addItem, theme }) {
  const [title, setTitle] = useState('');
  const pageStyles = styles(theme);

  const handleAddItem = () => {
    if (title.trim()) {
      const newItem = {
        id: Date.now().toString(),
        title: title.trim(),
        ingredients: [],
      };
      addItem(newItem);
      navigate('CardDetails', { itemId: newItem.id });
    }
  };

  return (
    <ScrollView
      style={pageStyles.pageContainer}
      contentContainerStyle={{ flexGrow: 1 }}>
      <Header
        title="Novo produto"
        onBack={() => navigate('Home')}
        theme={theme}
      />

      <View style={pageStyles.formContainer}>
        <InputField
          label="Nome do produto"
          value={title}
          onChangeText={setTitle}
          placeholder="Ex: Bolo de Chocolate"
          theme={theme}
        />
        <Execute
          title="Criar"
          onPress={handleAddItem}
          theme={theme}
        />
      </View>
    </ScrollView>
  );
}
