import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';

export const styles = (theme = 'light') =>
  StyleSheet.create({
    button: {
      backgroundColor: COLORS.primary,
      padding: 15,
      borderRadius: 8,
      alignItems: 'center',
      marginTop: 10,
    },
    buttonText: {
      color: COLORS.onPrimary,
      fontSize: 18,
      fontWeight: 'bold',
    },
  });
