import { View, Text, ScrollView } from 'react-native';
import { styles } from './styles';

export function Experience() {
  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ width: '100%' }}>
        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>Carreira</Text>
          <Text style={styles.detailItem}>
            <Text style={styles.bold}>Estudante:</Text> Auxiliei no
            desenvolvimento de aplicações web, estruturação e gerenciamento de
            bancos de dados relacionais.
          </Text>
          <Text style={styles.detailItem}>
            <Text style={styles.bold}>Desenvolvedor:</Text> Atuei no
            desenvolvimento de interfaces modernas e responsivas para sistemas
            web e e-commerce.
          </Text>
        </View>

        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>Projetos</Text>
          <Text style={styles.detailItem}>
            <Text style={styles.bold}>Github Blog:</Text> Blog usando API do
            GitHub, Styled Components e TypeScript.
          </Text>
          <Text style={styles.detailItem}>
            <Text style={styles.bold}>Expenses Control:</Text> Controle
            financeiro com Axios, Zod e Radix.
          </Text>
        </View>

        <View style={{ height: 20 }} />
      </ScrollView>
    </View>
  );
}
