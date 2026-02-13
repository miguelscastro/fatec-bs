import { View, TextInput, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { styles } from './styles';

export function SearchInput({ value, onChangeText, onPress }) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite um usuário github..."
        value={value}
        onChangeText={onChangeText}
        autoCapitalize="none"
        autoCorrect={false}
      />

      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Feather name="check" size={24} color="#FFF" />
      </TouchableOpacity>
    </View>
  );
}
