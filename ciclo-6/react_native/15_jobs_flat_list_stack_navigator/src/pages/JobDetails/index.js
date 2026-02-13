import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import {styles} from './styles.js'

export function JobDetails() {
  const navigation = useNavigation();
  const route = useRoute();
  
  
  const { job } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={28} color="#CB3030" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Detalhes da Vaga</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>{job.name}</Text>
        
        <View style={styles.section}>
          <Text style={styles.label}>Salário:</Text>
          <Text style={styles.value}>{job.salary}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.label}>Descrição:</Text>
          <Text style={styles.description}>{job.description}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.label}>Contato:</Text>
          <Text style={styles.value}>{job.contact}</Text>
        </View>
      </ScrollView>
    </View>
  );
}

