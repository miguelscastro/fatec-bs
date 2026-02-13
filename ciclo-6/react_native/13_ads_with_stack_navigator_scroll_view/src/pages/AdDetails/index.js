import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './styles';

export function AdDetails({ route }) {
  const navigation = useNavigation();

  const { product } = route.params;

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}>
        <Ionicons name="arrow-back" size={30} color="#333" />
        <Text style={styles.backText}>Voltar</Text>
      </TouchableOpacity>

      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.imageContainer}>
          <Image source={product.imageSource} style={styles.image} />
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.title}>{product.name}</Text>

          {product.price && (
            <Text style={styles.price}>R$ {product.price}</Text>
          )}

          <Text style={styles.sectionTitle}>Descrição:</Text>
          <Text style={styles.description}>{product.description}</Text>
        </View>
      </ScrollView>
    </View>
  );
}
