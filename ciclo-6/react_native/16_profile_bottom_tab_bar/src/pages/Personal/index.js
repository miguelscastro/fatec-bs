import { View, Text, Image } from 'react-native';
import { styles } from './styles';

export function Personal() {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://github.com/miguelscastro.png' }}
        style={styles.avatar}
      />

      <View style={styles.card}>
        <Text style={styles.name}>Miguel Castro da Silva, 20</Text>
        <Text style={styles.description}>
          Sou um Engenheiro de Software com +2 anos de experiência desenvolvendo
          aplicações de ponta a ponta. Eu combino React, Java e outras
          tecnologias para criar soluções escaláveis.
        </Text>
      </View>
    </View>
  );
}
