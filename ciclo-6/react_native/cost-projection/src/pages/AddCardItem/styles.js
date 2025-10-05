import { StyleSheet } from 'react-native';

import { COLORS } from '../../constants/colors';

export const styles = (theme = 'light') =>
  StyleSheet.create({
    pageContainer: {
      flex: 1,
      padding: 16,
    },
    formContainer: {
      justifyContent: 'center',
      padding: 16,
    },
    inputContainer: {
      marginBottom: 20,
    },
    label: {
      fontSize: 16,
      marginBottom: 8,
      color: theme === 'light' ? COLORS.text : COLORS.darkText,
    },
    errorText: {
      color: COLORS.error,
      textAlign: 'center',
      marginTop: 10,
    },
  });
