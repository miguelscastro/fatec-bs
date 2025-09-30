import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  inputContainer: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderBottomWidth: 1,
    borderColor: '#AAAAAA',
    paddingHorizontal: 5,
    fontSize: 16,
    color: '#333',
  },
});
