import { StyleSheet } from 'react-native';

import { COLORS } from '../../constants/colors';

export const styles = (theme = 'light') =>
  StyleSheet.create({
    pageContainer: {
      flex: 1,
      padding: 16,
    },
    detailsHeader: {
      padding: 16,
      alignItems: 'center',
      borderBottomWidth: 1,
      borderBottomColor: theme === 'light' ? '#eee' : '#333',
    },
    totalCostText: {
      fontSize: 24,
      fontWeight: 'bold',
      color: theme === 'light' ? COLORS.text : COLORS.darkText,
    },
    sectionTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      marginTop: 20,
      marginBottom: 10,
      paddingHorizontal: 16,
      color: theme === 'light' ? COLORS.text : COLORS.darkText,
    },
    emptyText: {
      textAlign: 'center',
      marginTop: 50,
      color: COLORS.placeholder,
    },
  });
