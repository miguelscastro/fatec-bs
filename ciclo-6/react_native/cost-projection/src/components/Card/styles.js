import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';

export const styles = (theme = 'light') =>
  StyleSheet.create({
    card: {
      backgroundColor: theme === 'light' ? COLORS.surface : COLORS.darkSurface,
      padding: 20,
      borderRadius: 12,
      marginBottom: 16,
      elevation: 3,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    cardTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      color: theme === 'light' ? COLORS.text : COLORS.darkText,
    },
    cardCost: {
      fontSize: 14,
      color:  theme === 'light' ? COLORS.primary : COLORS.placeholder,
      marginTop: 8,
    },
    deleteButton: {
      backgroundColor: COLORS.error,
      width: 30,
      height: 30,
      borderRadius: 15,
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 10,
    },
    deleteButtonText: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 16,
    },
  });
