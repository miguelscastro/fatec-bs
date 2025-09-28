import {View, Text, Image} from 'react-native'
import { styles } from './styles'

export function Profile() {
  return (
   <View style={styles.container}>
    <Image
        source={{ uri: 'https://github.com/miguelscastro.png' }}
        style={styles.avatar}
      />

      <View style={styles.card}>
        <Text style={styles.name}>Miguel Castro da Silva, 20</Text>
        <Text style={styles.details}>
          Sou um Engenheiro de Software com +2 anos de experiência desenvolvendo
          aplicações de ponta a ponta. Eu combino React, Java e outras
          tecnologias para criar soluções escaláveis, eficientes e responsivas.
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
        <Text style={styles.details}>
          • Formação em DevOps na Rocketseat (02/2026)
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
          <Text style={styles.strong}>Desenvolvedor:</Text> Atuei no
          desenvolvimento de interfaces modernas e responsivas para sistemas web
          e e-commerce. Integrei aplicações front-end em React com back-end em
          Java e Spring Boot.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Projetos</Text>
        <Text style={styles.details}>
          <Text style={styles.strong}>Github Blog:</Text> Um blog feito usando a
          API do github (users, issues, search) para pegar as issues do
          repositório e transformá-las em posts. Feito com styled-components e
          typescript
        </Text>
        <Text style={styles.details}>
          <Text style={styles.strong}>Expenses Control:</Text> Uma interface
          desenvolvida com axios, zod, radix e router-dom para controle
          financeiro de entradas e saídas de capital.
        </Text>
      </View>
   </View>
  )
}