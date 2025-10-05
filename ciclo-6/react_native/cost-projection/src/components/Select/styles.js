import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';

export const styles = (theme = 'light') =>
   StyleSheet.create({
  
  picker: {
    width: '40%',
    height: '80%',
    color: theme === 'light' ? COLORS.text : COLORS.darkText,
    backgroundColor: theme === 'light' ? '#f0f0f0' : COLORS.darkBackground,
  },
});