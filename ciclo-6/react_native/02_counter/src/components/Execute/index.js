import { Button, View } from 'react-native';
import { styles } from './styles';

export function Execute({ title, updateCounter, variant, counter }) {
  const buttonColor =
    variant === 'increment'
      ? '#2ecc71'
      : variant === 'decrement'
      ? '#e74c3c'
      : '#2ecc71';

  return (
    <View style={styles.buttonWrapper}>
      <Button
        title={title}
        onPress={() => updateCounter(variant)}
        color={buttonColor}
        disabled={counter === 0}
      />
    </View>
  );
}
