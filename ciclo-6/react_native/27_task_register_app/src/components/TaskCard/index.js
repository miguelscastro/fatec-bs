import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles.js';

export function TaskCard({ data, onEdit, onDelete }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{data.title}</Text>
      <Text style={styles.description}>{data.description}</Text>

      <View style={styles.actions}>
        <TouchableOpacity style={styles.editBtn} onPress={onEdit}>
          <Text style={styles.btnText}>Editar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.deleteBtn} onPress={onDelete}>
          <Text style={[styles.btnText, { color: '#FFF' }]}>Excluir</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
