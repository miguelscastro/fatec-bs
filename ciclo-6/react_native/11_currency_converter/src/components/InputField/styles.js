import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  inputContainer: {
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    justifyContent: 'space-between',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginRight: 10,
  },
  input: {
    width: '70%',
    height: 40,
    borderBottomWidth: 1,
    borderColor: '#AAAAAA',
    paddingHorizontal: 5,
    fontSize: 16,
    color: '#333',
  },
});
