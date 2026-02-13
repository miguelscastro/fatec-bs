import { View, Text } from 'react-native';
import { InputField } from '../../components/InputField/index';
import { useState } from 'react';
import { Select } from '../../components/Select/index';
import { Execute } from '../../components/Execute/index';
import { styles } from './styles';

export function CurrencyConverter() {
  const [currencyTo, setCurrencyTo] = useState();
  const [currencyFrom, setCurrencyFrom] = useState();
  const [convertedCurrency, setConvertedCurrency] = useState();
  const [amount, setAmount] = useState(0);

  function handleConvertCurrency() {
    let rate = 1;

    switch (currencyFrom) {
      case 'REAL':
        if (currencyTo === 'DOLAR') rate = 1 / 5.33;
        else if (currencyTo === 'EURO') rate = 1 / 6.17;
        break;

      case 'DOLAR':
        if (currencyTo === 'REAL') rate = 5.33;
        else if (currencyTo === 'EURO') rate = 5.33 / 6.17;
        break;

      case 'EURO':
        if (currencyTo === 'REAL') rate = 6.17;
        else if (currencyTo === 'DOLAR') rate = 6.17 / 5.33;
        break;

      default:
        console.error('Moeda de origem inválida');
        return;
    }

    const convertedValue = amount * rate;
    setConvertedCurrency(convertedValue);
  }

  const finalValue = convertedCurrency
    ? Number(convertedCurrency).toFixed(2)
    : '';

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Conversor de Moedas Dólar, Real e Euro</Text>
      <InputField label="Valor" value={amount} setValue={setAmount} />
      <Select
        label="De: "
        selectedValue={currencyFrom}
        onValueChange={setCurrencyFrom}
        pickerItems={['REAL', 'DOLAR', 'EURO']}
      />
      <Select
        label="Para: "
        selectedValue={currencyTo}
        onValueChange={setCurrencyTo}
        pickerItems={['REAL', 'DOLAR', 'EURO']}
      />
      <Execute title="Converter" onPress={handleConvertCurrency} />
      <View style={styles.resultWrapper}>
        <Text style={styles.labelText}>Resultado</Text>
        <Text style={styles.text}>{finalValue}</Text>
      </View>
    </View>
  );
}
