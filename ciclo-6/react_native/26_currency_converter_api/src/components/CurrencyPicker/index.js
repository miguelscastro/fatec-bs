import { View, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { styles } from './styles.js';

export function CurrencyPicker({
  label,
  selectedValue,
  onValueChange,
  currencies,
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.pickerWrapper}>
        <Picker
          selectedValue={selectedValue}
          onValueChange={onValueChange}
          style={styles.picker}>
          {currencies.map((currency) => (
            <Picker.Item
              key={currency.key}
              label={currency.label}
              value={currency.value}
            />
          ))}
        </Picker>
      </View>
    </View>
  );
}
