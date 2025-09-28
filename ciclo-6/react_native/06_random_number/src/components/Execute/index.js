import { Pressable, Text } from 'react-native';
import { styles } from './styles';

export function Execute({ title, onPress }) {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}
