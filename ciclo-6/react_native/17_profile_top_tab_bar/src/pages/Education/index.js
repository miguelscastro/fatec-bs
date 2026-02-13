import { View, Text, ScrollView } from 'react-native';
import { styles } from './styles';

export function Education() {
  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ width: '100%' }}>
        <View style={styles.card}>
          <Text style={styles.itemText}>
            • Ensino Médio na Etec Aristóteles Ferreira (12/2022)
          </Text>
          <Text style={styles.itemText}>
            • Graduando em Sistemas para Internet na Fatec Rubens Lara (12/2026)
          </Text>
          <Text style={styles.itemText}>
            • Formação em React e Next na Rocketseat (02/2026)
          </Text>
          <Text style={styles.itemText}>
            • Formação em Java e Spring Boot na Rocketseat (02/2026)
          </Text>
          <Text style={styles.itemText}>
            • Formação em DevOps na Rocketseat (02/2026)
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}
