import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '90%',
  },
  labelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  valueText: {
    fontSize: 16,
    color: '#007BFF',
    fontWeight: 'bold',
  },
  slider: {
    width: '100%',
    height: 40,
  },
});
