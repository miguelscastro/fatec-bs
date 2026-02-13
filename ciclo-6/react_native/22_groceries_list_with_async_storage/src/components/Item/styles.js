import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#FFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#333',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: '#333',
    maxWidth: '70%',
  },
  amount: {
    fontWeight: 'bold',
    color: '#555',
  },
  buttons: {
    flexDirection: 'row',
    gap: 15,
  },
  iconButton: {
    padding: 5,
  },
});
