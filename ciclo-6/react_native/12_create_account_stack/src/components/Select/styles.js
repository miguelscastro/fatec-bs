import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  pickerContainer: {
    width: '90%',
    height: 50,
    borderColor: '#AAAAAA',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginRight: 10,
  },

  picker: {
    flex: 1,
    height: '60%',
    color: '#333',
  },
});
