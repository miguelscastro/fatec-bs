import { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';

import { COLORS } from '../../constants/colors';
import { styles } from './styles';

import Slider from '@react-native-community/slider';
import { Header } from '../../components/Header';
import { InputField } from '../../components/InputField';
import { Execute } from '../../components/Execute';

export function AddCardItem({ navigate, params, addIngredient, theme, currency }) {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [cost, setCost] = useState('');
  const [error, setError] = useState('');
  const pageStyles = styles(theme);

  const handleAddItem = () => {
    setError('');
    const costValue = parseFloat(cost.replace(',', '.'));

    if (name.trim() && quantity > 0 && !isNaN(costValue) && costValue > 0) {
      const newItem = {
        id: Date.now().toString(),
        name: name.trim(),
        quantity,
        cost: costValue,
      };

      addIngredient(params.itemId, newItem);
      navigate('CardDetails', { itemId: params.itemId });
    } else {
      setError('Por favor, preencha todos os campos corretamente.');
    }
  };

  return (
    <ScrollView
      style={pageStyles.pageContainer}
      contentContainerStyle={{ flexGrow: 1 }}>
      <Header
        title="Novo Item"
        onBack={() => navigate('CardDetails', { itemId: params.itemId })}
        theme={theme}
      />
      <View style={pageStyles.formContainer}>
        <InputField
          label="Nome do Item"
          value={name}
          onChangeText={setName}
          placeholder="Ex: Farinha de Trigo"
          theme={theme}
        />

        <View style={pageStyles.inputContainer}>
          <Text style={pageStyles.label}>
            Quantidade: {quantity.toFixed(2)}
          </Text>
          <Slider
            style={{ width: '100%', height: 40 }}
            minimumValue={1}
            maximumValue={20}
            step={0.1}
            value={quantity}
            onValueChange={setQuantity}
            minimumTrackTintColor={COLORS.primary}
            maximumTrackTintColor={
              theme === 'dark' ? COLORS.onPrimary : COLORS.placeholder
            }
          />
        </View>

        <InputField
          label={`Custo Unitário em ${currency}`}
          value={cost}
          onChangeText={setCost}
          placeholder="Ex: 5.50"
          keyboardType="numeric"
          theme={theme}
        />
        <Execute title="Adicionar" onPress={handleAddItem} theme={theme} />

        {error ? <Text style={pageStyles.errorText}>{error}</Text> : null}
      </View>
    </ScrollView>
  );
}
