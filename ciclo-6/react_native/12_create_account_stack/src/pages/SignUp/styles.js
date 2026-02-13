import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  title: {
    color: '#E74C3C',
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  container: {
    flex: 1,

    backgroundColor: '#fff',
    padding: 20,
    paddingTop: 50,
  },

  resultsContainer: {
    width: '90%',
    padding: 20,
  },
  resultsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#007BFF',
    paddingBottom: 10,
  },
  resultsText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
  },
});
