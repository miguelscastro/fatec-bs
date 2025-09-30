import { View, Text } from 'react-native';
import { styles } from './styles';

export function Card({ newAccountData }) {
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.title}>Dados informados:</Text>
      <Text style={styles.content}>
        <Text style={styles.heading}>Nome: </Text> {newAccountData.name}
      </Text>
      <Text style={styles.content}>
        <Text style={styles.heading}>Idade: </Text> {newAccountData.age}
      </Text>
      <Text style={styles.content}>
        <Text style={styles.heading}>Sexo: </Text> {newAccountData.gender}
      </Text>
      <Text style={styles.content}>
        <Text style={styles.heading}>Sexo: </Text>{' '}
        {newAccountData.educationLevel}
      </Text>
      <Text style={styles.content}>
        <Text style={styles.heading}>Sexo: </Text> {newAccountData.range}
      </Text>
      <Text style={styles.content}>
        <Text style={styles.heading}>Sexo: </Text> {newAccountData.nationality}
      </Text>
    </View>
  );
}
