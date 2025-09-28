import {View, TextInput, Text} from 'react-native'
import {Execute} from '../../components/Execute/index'
import { useState } from 'react'
import {styles} from './styles'

export function NumberMultiplier() {
  const [numberA, setNumberA] = useState('');
  const [numberB, setNumberB] = useState('');
  const [currentResult, setCurrentResult] = useState();

  function handleMultiply(a, b) {
    const result = (Number(a) * Number(b));
    setCurrentResult(result);
  }

     
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Multiplicador de Números</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite o primeiro nº"
        value={numberA}
        onChangeText={setNumberA}
      />
      <TextInput
        style={styles.input}
        placeholder="Digite o segundo nº"
        value={numberB}
        onChangeText={setNumberB}
      />

      <View style={styles.buttonContainer}>
        <Execute
          title="Calcular"
          onPress={() => handleMultiply(numberA, numberB)}
        />
      </View>

      <View style={styles.resultWrapper}>
        <Text style={styles.resultLabel}>Resultado:</Text>
        <Text style={styles.resultText}>{currentResult}</Text>
      </View>
    </View>
  )
}