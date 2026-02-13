import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {styles} from './styles.js'

export function Card({ job }) {
  const navigation = useNavigation();

  function handleGoToDetails() {
    navigation.navigate('JobDetails', { job });
  }

  return (
    <View style={styles.cardContainer}>
      <Text style={styles.jobName}>{job.name}</Text>
      
      <TouchableOpacity style={styles.button} onPress={handleGoToDetails}>
        <Text style={styles.buttonText}>Saiba mais</Text>
      </TouchableOpacity>
    </View>
  );
}
