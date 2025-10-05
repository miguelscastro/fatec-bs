import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';

export const styles = (theme = 'light') =>
  StyleSheet.create({
    pageContainer: {
      flex: 1,
      padding: 16,
    },
    addProductContainer: {
      position: 'absolute',
      bottom: 20,
      right: 20,
      left: 20,
    },
    settingsButton: {
      position: 'absolute',
      top: 12,
      right: 10,
      padding: 10,
      fontSize: 24,
    },
    emptyText: {
      textAlign: 'center',
      marginTop: 50,
      color: COLORS.placeholder,
    },
  });
