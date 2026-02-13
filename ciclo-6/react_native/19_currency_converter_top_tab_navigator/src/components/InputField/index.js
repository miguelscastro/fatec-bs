import { styles } from './styles';
import { TextInput, Text, View } from 'react-native';

export function InputField({ label, setValue, placeholder, value }) {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={setValue}
        value={value}
        keyboardType="numeric"
      />
    </View>
  );
}
