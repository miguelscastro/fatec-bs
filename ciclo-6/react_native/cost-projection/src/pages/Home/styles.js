import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';

export const styles = (theme = 'light') =>
  StyleSheet.create({
    pageContainer: {
      flex: 1,
    },
    backgroundImage: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,

      opacity: 0.1,
    },
    contentContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 16,
      backgroundColor: 'transparent',
    },
    title: {
      fontSize: 32,
      fontWeight: 'bold',
      color: theme === 'light' ? COLORS.text : COLORS.darkText,
      textAlign: 'center',
      marginBottom: 8,
    },
    subtitle: {
      fontSize: 16,
      color: theme === 'light' ? COLORS.text : COLORS.darkText,
      textAlign: 'center',
      marginBottom: 40,
    },
  });
