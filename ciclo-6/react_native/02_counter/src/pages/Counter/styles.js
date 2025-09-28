import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 20,
  },
  title: {
    color: '#e67e22',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 25,
  },
  counterContainer: {
    borderWidth: 3,
    borderColor: '#dce1e6',
    paddingHorizontal: 35,
    paddingVertical: 2,
    marginBottom: 40,
  },
  counterText: {
    color: '#c0392b',
    fontSize: 60,
    fontWeight: 'bold',
  },
  buttonContainer: {
    width: '80%',
    gap: 15,
  },
});
