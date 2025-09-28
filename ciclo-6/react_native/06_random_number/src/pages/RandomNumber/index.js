import { Text, View, TextInput, Image } from 'react-native';
import { useState } from 'react';
import { Execute } from '../../components/Execute';
import { styles } from './styles';
import RandomLogo from '../../assets/random.png';

export function RandomNumber() {
  const [pickedNumber, setPickedNumber] = useState('?');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Jogo do Nº Aleatório</Text>

      <Image source={RandomLogo} style={styles.logo} />

      <View style={styles.resultWrapper}>
        <Text style={styles.labelText}>Pense em um nº de 0 a 10</Text>
        <Text style={styles.text}>{pickedNumber}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <Execute
          title="Descobrir"
          onPress={() => setPickedNumber(Math.floor(Math.random() * 11))}
        />
      </View>
    </View>
  );
}
