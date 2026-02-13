import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 30,
    paddingHorizontal: 10,
  },
  quoteBox: {
    width: '100%',
    padding: 20,
    borderWidth: 2,
    borderRadius: 5,
    minHeight: 300,
  },
  quoteText: {
    fontStyle: 'italic',
    marginBottom: 10,
  },
  author: {
    fontWeight: 'bold',
    textAlign: 'right',
  },
});
