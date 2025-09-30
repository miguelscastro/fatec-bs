import { View, Text } from 'react-native';
import { styles } from './styles';

export function Card({ job }) {
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.jobName}>{job.name}</Text>
      <Text style={styles.content}>
        <Text style={styles.heading}>Salário: R$</Text> {job.salary}
      </Text>
      <Text style={styles.content}>
        <Text style={styles.heading}>Descrição: </Text> {job.description}
      </Text>
      <Text style={styles.content}>
        <Text style={styles.heading}>Contato:</Text> {job.contact}
      </Text>
    </View>
  );
}
