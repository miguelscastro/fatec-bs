import { View, Text, Pressable } from 'react-native';

import { styles } from './styles';

export function Header({ title, onBack, theme }) {
  const componentStyles = styles(theme);

  return (
    <View style={componentStyles.headerContainer}>
      {onBack && (
        <Pressable onPress={onBack} style={componentStyles.backButton}>
          <Text style={componentStyles.backButtonText}>{'<'}</Text>
        </Pressable>
      )}
      <Text style={componentStyles.headerTitle}>{title}</Text>
    </View>
  );
}
