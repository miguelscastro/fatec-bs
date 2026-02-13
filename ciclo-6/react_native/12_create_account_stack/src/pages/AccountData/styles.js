import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
  },
  backButton: {
    marginRight: 15,
  },
  headerTitle: {
    fontSize: 24,
    color: '#3466EE',
    fontWeight: '600',
  },
  content: {
    gap: 15,
  },
  itemText: {
    fontSize: 18,
    color: '#333',
    paddingBottom: 5,
  },
  label: {
    fontWeight: 'bold',
    color: '#555',
  },
});
