import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';

export const styles = (theme = 'light') =>
  StyleSheet.create({
    inputContainer: {
      marginBottom: 20,
    },
    label: {
      fontSize: 16,
      marginBottom: 8,
      color: theme === 'light' ? COLORS.text : COLORS.darkText,
    },
    input: {
      backgroundColor: theme === 'light' ? COLORS.surface : COLORS.darkSurface,
      padding: 15,
      borderRadius: 8,
      fontSize: 16,
      color: theme === 'light' ? COLORS.text : COLORS.darkText,
      borderWidth: 1,
      borderColor: theme === 'light' ? '#ddd' : '#444',
    },
  });
