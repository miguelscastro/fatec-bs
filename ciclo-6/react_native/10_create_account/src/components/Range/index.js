import Slider from '@react-native-community/slider';
import { View, Text } from 'react-native';
import { styles } from './styles';

export function Range({
  label,
  value,
  onValueChange,
  minimumValue,
  maximumValue,
  step,
}) {
  return (
    <View style={styles.container}>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>{label}:</Text>
        <Text style={styles.valueText}>{value}</Text>
      </View>
      <Slider
        style={styles.slider}
        minimumValue={minimumValue}
        maximumValue={maximumValue}
        onValueChange={onValueChange}
        value={value}
        step={step}
        minimumTrackTintColor="#007BFF"
        maximumTrackTintColor="#d3d3d3"
        thumbTintColor="#007BFF"
      />
    </View>
  );
}
