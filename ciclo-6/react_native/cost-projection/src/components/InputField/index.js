import { View, Text, TextInput } from 'react-native';

import { styles } from './styles';
import { COLORS } from '../../constants/colors';

export function InputField({
  label,
  value,
  onChangeText,
  placeholder,
  keyboardType,
  theme,
}) {
  const componentStyles = styles(theme);
  return (
    <View style={componentStyles.inputContainer}>
      <Text style={componentStyles.label}>{label}</Text>
      <TextInput
        style={componentStyles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={COLORS.placeholder}
        keyboardType={keyboardType || 'default'}
      />
    </View>
  );
}
