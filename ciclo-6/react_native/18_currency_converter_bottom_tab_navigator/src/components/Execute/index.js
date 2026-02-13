import {styles} from "./styles"
import { TouchableOpacity, Text } from 'react-native';

export function Execute({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

