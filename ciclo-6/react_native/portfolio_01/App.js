import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Pressable,
  Linking,
} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Image
          source={{ uri: 'https://github.com/miguelscastro.png' }}
          style={styles.avatar}
        />

        <View style={styles.card}>
          <Text style={styles.name}>Miguel Castro da Silva, 20</Text>
          <Text style={styles.details}>
            Sou um Engenheiro de Software com +2 anos de experiência
            desenvolvendo aplicações de ponta a ponta. Eu combino React, Java e
            outras tecnologias para criar soluções escaláveis, eficientes e
            responsivas.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Formação</Text>
          <Text style={styles.details}>
            • Ensino Médio na Etec Aristóteles Ferreira (12/2022)
          </Text>
          <Text style={styles.details}>
            • Graduando em Sistemas para Internet na Fatec Rubens Lara (12/2026)
          </Text>
          <Text style={styles.details}>
            • Formação em React e Next na Rocketseat (02/2026)
          </Text>
          <Text style={styles.details}>
            • Formação em Java e Spring Boot na Rocketseat (02/2026)
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Experiência</Text>
          <Text style={styles.details}>
            <Text style={styles.strong}>Estudante:</Text> Auxiliei no
            desenvolvimento de aplicações web, estruturação e gerenciamento de
            bancos de dados relacionais. Liderei o desenvolvimento de soluções
            para pequenos empreendedores e conduzi testes de usabilidade.
          </Text>
          <Text style={styles.details}>
            <Text style={styles.strong}>Freelancer:</Text> Atuei no
            desenvolvimento de interfaces modernas e responsivas para sistemas
            web e e-commerce. Integrei aplicações front-end em React com
            back-end em Java e Spring Boot.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Projetos</Text>
          <Pressable
            onPress={() => Linking.openURL('https://cakedesigner.vercel.app/')}>
            <Text style={styles.link}>• Virtual Store</Text>
          </Pressable>
          <Pressable
            onPress={() =>
              Linking.openURL('https://githubblog-miguelscastro.vercel.app/')
            }>
            <Text style={styles.link}>• Github Blog</Text>
          </Pressable>
          <Pressable
            style={styles.portfolioButton}
            onPress={() =>
              Linking.openURL('https://portfolio-miguelscastro.vercel.app/')
            }>
            <Text style={styles.portfolioButtonText}>Visite o portfolio completo</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#121212',
  },
  container: {
    alignItems: 'center',
    paddingVertical: 30,
    paddingHorizontal: 20,
    gap: 20,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#282828',
    marginTop: 20
  },
  card: {
    backgroundColor: '#1E1E1E',
    width: '100%',
    padding: 20,
    borderRadius: 10,
    gap: 12,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#EAEAEA',
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#E0E0E0',
    borderBottomWidth: 1,
    borderBottomColor: '#3A3A3A',
    paddingBottom: 8,
  },
  details: {
    fontSize: 15,
    color: '#A9A9A9',
    lineHeight: 22,
  },
  strong: {
    fontWeight: 'bold',
    color: '#CCCCCC',
  },
  link: {
    fontSize: 15,
    color: '#3498db',
    lineHeight: 22,
  },
  portfolioButton: {
    backgroundColor: '#3498db',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 15,
    marginTop: 10,
    alignItems: 'center',
  },
  portfolioButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
