import { Picker } from '@react-native-picker/picker';
import { View, Text } from 'react-native';
import { styles } from './styles';

export function Select({
  label,
  pickerItems = [],
  selectedValue,
  onValueChange,
}) {
  return (
    <View style={styles.pickerContainer}>
      <Text style={styles.label}>{label}</Text>
      <Picker
        style={styles.picker}
        selectedValue={selectedValue}
        onValueChange={onValueChange}>
        <Picker.Item label="Selecione..." value="" />
        {pickerItems.map((item, index) => {
          return <Picker.Item key={index} value={item} label={item} />;
        })}
      </Picker>
    </View>
  );
}
