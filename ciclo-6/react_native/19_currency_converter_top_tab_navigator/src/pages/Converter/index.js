import { useState } from 'react';
import { View, Text, Keyboard } from 'react-native';
import { styles } from './styles';

import { InputField } from '../../components/InputField/index';
import { Execute } from '../../components/Execute/index';

export function Converter({ currencyLabel, rate, symbol }) {
  const [realValue, setRealValue] = useState('');
  const [convertedValue, setConvertedValue] = useState(null);

  function handleConvert() {
    if (!realValue) return;

    const inputAmount = parseFloat(realValue.replace(',', '.'));

    if (isNaN(inputAmount)) return;

    const result = inputAmount / rate;
    setConvertedValue(result);
    Keyboard.dismiss();
  }

  return (
    <View style={styles.container}>
      <InputField
        label="Digite o valor em R$"
        placeholder="0,00"
        setValue={setRealValue}
        value={realValue}
      />

      <Execute title="Converter" onPress={handleConvert} />

      {convertedValue !== null && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultTitle}>Resultado</Text>
          <Text style={styles.resultValue}>
            {symbol}{' '}
            {currencyLabel === 'Bitcoin'
              ? convertedValue.toFixed(8)
              : convertedValue.toFixed(2)}
          </Text>
        </View>
      )}
    </View>
  );
}
