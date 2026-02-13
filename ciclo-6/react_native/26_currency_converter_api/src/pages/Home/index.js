import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard,
  ActivityIndicator,
  Alert,
} from 'react-native';
import { styles } from './styles.js';
import { CurrencyPicker } from '../../components/CurrencyPicker';

export function Home() {
  const [amount, setAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('BRL');
  const [toCurrency, setToCurrency] = useState('USD');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const currencies = [
    { key: 'BRL', label: 'Real (BRL)', value: 'BRL' },
    { key: 'USD', label: 'Dólar (USD)', value: 'USD' },
    { key: 'EUR', label: 'Euro (EUR)', value: 'EUR' },
    { key: 'BTC', label: 'Bitcoin (BTC)', value: 'BTC' },
  ];

  async function handleConvert() {
    if (!amount) {
      Alert.alert('Atenção', 'Digite um valor para converter!');
      return;
    }

    if (fromCurrency === toCurrency) {
      Alert.alert('Atenção', 'Selecione moedas diferentes!');
      return;
    }

    setLoading(true);
    Keyboard.dismiss();

    try {
      const API_URL = `https://economia.awesomeapi.com.br/last/${fromCurrency}-${toCurrency}`;

      const REQUEST_URL = `https://api.allorigins.win/raw?url=${encodeURIComponent(
        API_URL
      )}`;

      const response = await fetch(REQUEST_URL);
      const data = await response.json();

      const key = `${fromCurrency}${toCurrency}`;

      if (!data[key]) {
        Alert.alert('Erro', 'Conversão não disponível para este par.');
        setResult(null);
        return;
      }

      const bid = parseFloat(data[key].bid);
      const inputValue = parseFloat(amount.replace(',', '.'));

      const conversion = inputValue * bid;

      setResult(conversion);
    } catch (error) {
      console.log('Erro na requisição:', error);
      Alert.alert(
        'Erro',
        'Falha ao conectar com a API. Verifique sua internet.'
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Conversor de Moedas</Text>
        <View style={styles.line} />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Valor:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o valor..."
          keyboardType="numeric"
          value={amount}
          onChangeText={setAmount}
        />
      </View>

      <CurrencyPicker
        label="De:"
        selectedValue={fromCurrency}
        onValueChange={setFromCurrency}
        currencies={currencies}
      />

      <CurrencyPicker
        label="Para:"
        selectedValue={toCurrency}
        onValueChange={setToCurrency}
        currencies={currencies}
      />

      <TouchableOpacity style={styles.button} onPress={handleConvert}>
        {loading ? (
          <ActivityIndicator color="#FFF" />
        ) : (
          <Text style={styles.buttonText}>Converter</Text>
        )}
      </TouchableOpacity>

      {result !== null && (
        <View style={styles.resultArea}>
          <Text style={styles.resultLabel}>Valor convertido</Text>
          <View style={styles.resultBox}>
            <Text style={styles.resultText}>
              {toCurrency === 'BTC'
                ? result.toFixed(8)
                : result.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: toCurrency,
                  })}
            </Text>
          </View>
        </View>
      )}
    </View>
  );
}
