import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';

export const styles = (theme = 'light') =>
  StyleSheet.create({
    ingredientItem: {
      backgroundColor: theme === 'light' ? COLORS.onPrimary : COLORS.primary,
      padding: 16,
      borderRadius: 8,
      marginHorizontal: 16,
      marginBottom: 8,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    ingredientName: {
      fontSize: 16,
      fontWeight: 'bold',
      color: theme === 'light' ? COLORS.text : COLORS.darkText,
    },
    ingredientDetails: {
      fontSize: 14,
      color: theme === 'light' ? '#555' : '#bbb',
      marginTop: 4,
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
