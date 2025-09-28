import { Text, View, TextInput, Image } from 'react-native';
import { useState } from 'react';
import { Execute } from '../../components/Execute'
import { styles } from './styles';
import alcoholGasolineCalculatorlogo from '../../assets/alcohol_gasoline_calculator.png'

export function AlcoholOrGasoline() {
  const [alcoholPrice, setAlcoholPrice] = useState('');
  const [gasolinePrice, setGasolinePrice] = useState('');
  const [bestOption, setBestOption] = useState('Resultado');

  function handleExecute() {
    if (!alcoholPrice.trim() || !gasolinePrice.trim()) {
      setBestOption('Preencha os preços!');
      return;
    }
    const result =
      Number(alcoholPrice.replace(',', '.')) /
      Number(gasolinePrice.replace(',', '.'));
    result > 0.7
      ? setBestOption('Gasolina')
      : result <= 0.7
      ? setBestOption('Álcool')
      : setBestOption('Valor invalido!');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Álcool ou Gasolina</Text>

      <Image source={alcoholGasolineCalculatorlogo} style={styles.logo} />

      <TextInput
        style={styles.input}
        placeholder="Preço do Álcool"
        value={alcoholPrice}
        onChangeText={setAlcoholPrice}
      />
      <TextInput
        style={styles.input}
        placeholder="Preço da Gasolina"
        value={gasolinePrice}
        onChangeText={setGasolinePrice}
      />

      <View style={styles.buttonContainer}>
        <Execute title="Verificar" onPress={handleExecute} />
      </View>

      <View style={styles.resultWrapper}>
        <Text style={styles.resultText}>{bestOption}</Text>
      </View>
    </View>
  );
}
