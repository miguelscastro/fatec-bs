import { Text, View, TextInput, Image } from 'react-native';
import { useState } from 'react';
import { Execute } from '../../components/Execute';
import { styles } from './styles';
import imcCalculatorLogo from '../../assets/imc_calculator.png';

export function ImcCalculator() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [classification, setClassification] = useState('Classificação');

  function handleImcCalculator() {
    if (!weight.trim() || !height.trim()) {
      setClassification('Preencha peso e altura!');
      return;
    }
    const imc = (
      Number(weight.replace(',', '.')) /
      ((Number(height.replace(',', '.')) / 100) *
        (Number(height.replace(',', '.')) / 100))
    ).toFixed(2);

    if (imc < 18.5) {
      setClassification('Abaixo do peso');
    } else if (imc >= 18.5 && imc <= 24.9) {
      setClassification('Peso normal');
    } else if (imc >= 25 && imc <= 29.9) {
      setClassification('Sobrepeso');
    } else if (imc >= 30 && imc <= 34.9) {
      setClassification('Obesidade Grau I');
    } else if (imc >= 35 && imc <= 39.9) {
      setClassification('Obesidade Grau II');
    } else {
      setClassification('Obesidade Grau III');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cálculo do IMC</Text>

      <Image source={imcCalculatorLogo} style={styles.logo} />

      <TextInput
        style={styles.input}
        placeholder="Peso"
        value={weight}
        onChangeText={setWeight}
      />
      <TextInput
        style={styles.input}
        placeholder="Altura"
        value={height}
        onChangeText={setHeight}
      />

      <View style={styles.buttonContainer}>
        <Execute title="Verificar" onPress={handleImcCalculator} />
      </View>

      <View style={styles.resultWrapper}>
        <Text style={styles.resultText}>{classification}</Text>
      </View>
    </View>
  );
}
