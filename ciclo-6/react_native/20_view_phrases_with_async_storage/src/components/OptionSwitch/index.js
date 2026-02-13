import { View, Text, Switch } from 'react-native';
import { styles } from './styles';

export function OptionSwitch({ label, value, onValueChange, isDay }) {
  return (
    <View style={styles.container}>
      <Text style={[styles.label, { color: isDay ? '#000' : '#FFF' }]}>
        {label}
      </Text>

      <Switch
        value={value}
        onValueChange={onValueChange}
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={value ? '#2b5bf4' : '#f4f3f4'}
      />
    </View>
  );
}
