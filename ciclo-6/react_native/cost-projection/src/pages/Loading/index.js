import { useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './styles';
import dollarImage from '../../assets/dollar_sign.png';

export function Loading({ navigate }) {
  useEffect(() => {
    const timer = setTimeout(() => navigate('Home'), 2000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <View style={styles.splashContainer}>
      <Image
        source={dollarImage}
        style={styles.backgroundImage}
        resizeMode="cover"
      />
      <Text style={styles.splashTitle}>Calculadora de Insumos</Text>
    </View>
  );
}