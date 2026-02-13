import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import {styles} from './styles'

export function AccountData() {
  const navigation = useNavigation();
  const route = useRoute();

  const submittedData = route.params?.submittedData || {};

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}>
          <Ionicons name="arrow-back" size={32} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Dados informados:</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.itemText}>
          <Text style={styles.label}>Nome: </Text>
          {submittedData.name}
        </Text>

        <Text style={styles.itemText}>
          <Text style={styles.label}>Idade: </Text>
          {submittedData.age}
        </Text>

        <Text style={styles.itemText}>
          <Text style={styles.label}>Sexo: </Text>
          {submittedData.gender}
        </Text>

        <Text style={styles.itemText}>
          <Text style={styles.label}>Escolaridade: </Text>
          {submittedData.educationLevel}
        </Text>

        <Text style={styles.itemText}>
          <Text style={styles.label}>Limite: </Text>
          R$ {submittedData.creditLimit}
        </Text>

        <Text style={styles.itemText}>
          <Text style={styles.label}>Brasileiro: </Text>
          {submittedData.isBrazilian}
        </Text>
      </View>
    </View>
  );
}
