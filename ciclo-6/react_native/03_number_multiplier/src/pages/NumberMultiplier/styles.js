import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    color: '#e67e22',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  input: {
    width: '90%',
    height: 50,
    borderRadius: 4,
    borderColor: '#494949',
    borderWidth: 1,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 15,
  },
  buttonContainer: {
    width: '90%',
    marginTop: 10,
    marginBottom: 30,
  },
  resultWrapper: {
    flexDirection: 'row',
  },
  resultLabel: {
    fontSize: 22,
    color: '#27ae60',
    fontWeight: 'bold',
    marginRight: 5,
  },
  resultText: {
    fontSize: 22,
    color: '#27ae60',
    fontWeight: 'bold',
  },
});
