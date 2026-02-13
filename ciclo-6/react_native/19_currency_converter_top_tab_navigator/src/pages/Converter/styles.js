import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
    backgroundColor: '#FFF',
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#E74C3C',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 40,
  },
  resultContainer: {
    marginTop: 40,
    alignItems: 'center',
    width: '100%',
  },
  resultTitle: {
    fontSize: 22,
    color: '#3498DB',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  resultValue: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#27AE60',
    textAlign: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#3498DB',
    paddingBottom: 5,
    width: '80%',
  },
});
