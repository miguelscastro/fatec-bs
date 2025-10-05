import { Text, Pressable } from 'react-native';

import { styles } from './styles';

export function Execute({ title, onPress, theme }) {
  const componentStyles = styles(theme);

  return (
    <Pressable style={componentStyles.button} onPress={onPress}>
      <Text style={componentStyles.buttonText}>{title}</Text>
    </Pressable>
  );
}
