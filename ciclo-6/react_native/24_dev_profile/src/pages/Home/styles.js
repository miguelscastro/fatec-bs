import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 20,
    paddingTop: 50,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    fontFamily: 'sans-serif-medium',
  },
  underline: {
    width: '100%',
    height: 2,
    backgroundColor: '#333',
    marginTop: 5,
    borderRadius: 2,
  },
  content: {
    paddingBottom: 20,
    alignItems: 'center',
  },
  imageContainer: {
    width: 180,
    height: 180,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 5,
    overflow: 'hidden',
  },
  avatar: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  infoContainer: {
    width: '100%',
    gap: 15,
  },
  infoText: {
    fontSize: 18,
    color: '#333',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingBottom: 5,
  },
  label: {
    fontWeight: 'bold',
    color: '#000',
  },
});
