import { StyleSheet } from 'react-native';

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
  });
