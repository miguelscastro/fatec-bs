import { Switch, View, Text } from 'react-native';
import { styles } from './styles';

export function IsBrazilian({ label, value, onValueChange }) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}:</Text>
      <Switch
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={value ? '#007BFF' : '#f4f3f4'}
        onValueChange={onValueChange}
        value={value}
      />
    </View>
  );
}
