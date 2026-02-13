import { TextInput, Text, View } from 'react-native';
import { styles } from './styles';

export function InputField({ label, setValue, placeholder }) {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}:</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={setValue}
      />
    </View>
  );
}
