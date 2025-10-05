import { StyleSheet } from 'react-native';

import { COLORS } from '../../constants/colors';

export const styles = (theme = 'light') =>
  StyleSheet.create({
    pageContainer: {
      flex: 1,
    },
    settingsContainer: {
      padding: 16,
    },
    settingItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: 16,
      borderBottomWidth: 1,
      borderBottomColor: theme === 'light' ? '#eee' : '#333',
    },
    label: {
      fontSize: 16,
      color: theme === 'light' ? COLORS.text : COLORS.darkText,
    },
    pickerText: {
      fontSize: 16,
      color: COLORS.primary,
      fontWeight: 'bold',
    },
  });
