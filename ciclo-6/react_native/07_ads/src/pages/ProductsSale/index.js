import { Text, ScrollView, View } from 'react-native';
import { productsData } from '../../data/products';
import { styles } from './styles';
import { Card } from '../../components/Card/index';

export function ProductsSale() {
  return (
    <View style={styles.pageContainer}>
      <Text style={styles.title}>Anúncios</Text>

      <ScrollView horizontal={true}>
        {productsData.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </ScrollView>
    </View>
  );
}
