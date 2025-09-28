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
    color: '#1D1D1D',
    fontSize: 20,
    fontWeight: 'bold',
  },
  logo: {
    width: 120,
    height: 120,
    marginVertical: 20,
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
    width: '90%',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#DB7373',
    paddingBottom: 8,
  },
  labelText: {
    fontSize: 20,
    color: '#DB7373',
    fontWeight: 'bold',
    marginBottom: 20
  },
  text: {
    fontSize: 22,
    color: '#DB7373',
    fontWeight: 'bold',
  },
});
