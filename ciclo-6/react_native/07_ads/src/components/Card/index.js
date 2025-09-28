import { View, Text, Image } from 'react-native';
import { styles } from './styles';

export function Card({ product }) {
  return (
    <View style={styles.cardContainer}>
      <Image source={product.imageSource} style={styles.productImage} />
      <Text style={styles.productName}>{product.name}</Text>
      <Text style={styles.productDescription}>{product.description}</Text>
    </View>
  );
}
