import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 50,
    backgroundColor: '#FFF',
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'sans-serif-medium',
  },
  line: {
    width: '100%',
    height: 2,
    backgroundColor: '#000',
    marginTop: 5,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    fontFamily: 'sans-serif-medium',
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    paddingHorizontal: 15,
    fontSize: 18,
    backgroundColor: '#FFF',
  },
  button: {
    height: 50,
    backgroundColor: '#3498db',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#000',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
  },
  resultArea: {
    marginTop: 40,
    alignItems: 'center',
  },
  resultLabel: {
    fontSize: 20,
    color: '#3498db', 
    marginBottom: 10,
    fontFamily: 'sans-serif-medium',
  },
  resultBox: {
    width: '100%',
    height: 60,
    borderWidth: 1,
    borderColor: '#3498db', 
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f8ff',
  },
  resultText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  }
});
