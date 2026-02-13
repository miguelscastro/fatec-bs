import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  cardContainer: {
    width: 200,
    height: 250,
    backgroundColor: '#FFFFFF',
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 4,
    borderColor: '#494949',
    borderWidth: 1,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  productImage: {
    width: 120,
    height: 120,
    borderRadius: 4,
    resizeMode: 'contain',
    marginTop: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
    marginVertical: 10,
  },
  button: {
    width: '80%',
    height: 30,
    backgroundColor: '#3466EE',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 14,
  },
});
