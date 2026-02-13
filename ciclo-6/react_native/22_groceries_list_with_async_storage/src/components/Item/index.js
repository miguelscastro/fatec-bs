import { styles } from './styles.js';
import { View, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

export function Item({ data, onDelete }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {data.name} <Text style={styles.amount}>({data.amount})</Text>
      </Text>

      <View style={styles.buttons}>
        <TouchableOpacity style={styles.iconButton}>
          <Feather name="edit-2" size={20} color="#333" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconButton} onPress={onDelete}>
          <Feather name="minus-circle" size={20} color="#E74C3C" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
