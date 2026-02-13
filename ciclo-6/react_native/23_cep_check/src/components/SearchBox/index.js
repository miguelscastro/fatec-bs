import { View, TextInput, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { styles } from './styles';

export function SearchBox({ value, onChangeText, onPress }) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite o CEP..."
        value={value}
        onChangeText={onChangeText}
        keyboardType="numeric"
        maxLength={8}
      />

      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Feather name="check" size={24} color="#FFF" />
      </TouchableOpacity>
    </View>
  );
}
