import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles.js';

export function MovieCard({ data }) {
  const navigation = useNavigation();

  function handleNavigate() {
    navigation.navigate('Details', { film: data });
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{data.nome}</Text>
        <TouchableOpacity onPress={handleNavigate}>
          <Text style={styles.readMore}>Leia mais</Text>
        </TouchableOpacity>
      </View>

      <Image
        source={{ uri: data.foto }}
        style={styles.image}
        resizeMode="cover"
      />
    </View>
  );
}
