import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';

export const styles = (theme = 'light') =>
  StyleSheet.create({
    headerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 20,
      height: 50,
    },
    backButton: {
      position: 'absolute',
      left: 1,
      padding: 10,
      zIndex: 1,
    },
    backButtonText: {
      fontSize: 24,
      color: theme === 'light' ? COLORS.text : COLORS.darkText,
    },
    headerTitle: {
      flex: 1,
      textAlign: 'center',
      fontSize: 22,
      fontWeight: 'bold',
      color: theme === 'light' ? COLORS.text : COLORS.darkText,
    },
  });
