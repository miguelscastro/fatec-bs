import { Picker } from '@react-native-picker/picker';
import { styles } from './styles';

export function Select({
  pickerItems = [{label: '...', value: '...'}],
  selectedValue,
  onValueChange,
  theme, 
}) {

  const componentStyles = styles(theme);

  return (
    <Picker
        style={componentStyles.picker}
        selectedValue={selectedValue}
        onValueChange={onValueChange}>
        <Picker.Item label="Selecione..." value="" enabled={false}/>
        {pickerItems.map((item, index) => {
          return <Picker.Item key={index} value={item.value} label={item.label} />;
        })}
    </Picker>
  );
}