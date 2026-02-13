import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';

export function Card({ product }) {
  const navigation = useNavigation();

  function handleNavigateToDetails() {
    navigation.navigate('AdDetails', { product });
  }

  return (
    <View style={styles.cardContainer}>
      <Image source={product.imageSource} style={styles.productImage} />

      <Text style={styles.productName}>{product.name}</Text>

      <TouchableOpacity style={styles.button} onPress={handleNavigateToDetails}>
        <Text style={styles.buttonText}>Ver detalhes</Text>
      </TouchableOpacity>
    </View>
  );
}
