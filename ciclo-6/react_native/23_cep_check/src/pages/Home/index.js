import { useState } from 'react';
import { View, Text, Keyboard, Alert } from 'react-native';
import { SearchBox } from '../../components/SearchBox';
import { styles } from './styles';

export function Home() {
  const [cep, setCep] = useState('');
  const [address, setAddress] = useState(null);

  async function handleSearch() {
    if (cep.length !== 8) {
      Alert.alert('Atenção', 'O CEP deve conter 8 dígitos!');
      return;
    }

    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();

      if (data.erro) {
        setAddress(null);
        Alert.alert('Erro', 'CEP não encontrado!');
        return;
      }

      setAddress(data);
      Keyboard.dismiss();
    } catch (error) {
      console.error(error);
      Alert.alert('Erro', 'Falha ao conectar com o servidor.');
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Cep x Endereço</Text>
        <View style={styles.underline} />
        <View style={styles.underline2} />
      </View>

      <SearchBox value={cep} onChangeText={setCep} onPress={handleSearch} />

      {address && (
        <View style={styles.resultArea}>
          <Text style={styles.itemText}>
            <Text style={styles.label}>Cep: </Text>
            {address.cep}
          </Text>

          <Text style={styles.itemText}>
            <Text style={styles.label}>Logradouro: </Text>
            {address.logradouro}
          </Text>

          <Text style={styles.itemText}>
            <Text style={styles.label}>Bairro: </Text>
            {address.bairro}
          </Text>

          <Text style={styles.itemText}>
            <Text style={styles.label}>Cidade: </Text>
            {address.localidade}
          </Text>

          <Text style={styles.itemText}>
            <Text style={styles.label}>Estado: </Text>
            {address.uf}
          </Text>
        </View>
      )}
    </View>
  );
}
