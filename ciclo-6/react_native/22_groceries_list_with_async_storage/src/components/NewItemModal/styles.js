import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '85%',
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#000',
    elevation: 5,
  },
  label: {
    fontSize: 14,
    color: '#333',
    marginTop: 10,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    marginBottom: 10,
    fontSize: 16,
    paddingVertical: 5,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 30,
    marginTop: 20,
  },
  cancelText: {
    fontSize: 16,
    color: '#333',
  },
  saveText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
});
