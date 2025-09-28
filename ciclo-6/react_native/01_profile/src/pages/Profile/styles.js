import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 30,
    paddingHorizontal: 20,
    gap: 20,
    backgroundColor: '#FFF',
  },
  avatar: {
    width: 120,
    height: 120,
    marginTop: 20,
  },
  card: {
    width: '100%',
    padding: 20,
    borderRadius: 10,
    gap: 12,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    borderBottomWidth: 1,
    borderBottomColor: '#3A3A3A',
    paddingBottom: 8,
  },
  details: {
    fontSize: 15,
  },
  strong: {
    fontWeight: 'bold',
  },
});
