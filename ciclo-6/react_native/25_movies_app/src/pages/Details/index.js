import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { styles } from './styles.js';

export function Details() {
  const navigation = useNavigation();
  const route = useRoute();

  const { film } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}>
          <Feather name="arrow-left" size={24} color="#000" />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Text style={styles.appTitle}>App de Filmes</Text>
          <View style={styles.line} />
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.subTitle}>
          {film.nome} <Text style={styles.dash}>-</Text> Sinopse
        </Text>

        <View style={styles.synopsisBox}>
          <Text style={styles.synopsisText}>{film.sinopse}</Text>
        </View>
      </ScrollView>
    </View>
  );
}
