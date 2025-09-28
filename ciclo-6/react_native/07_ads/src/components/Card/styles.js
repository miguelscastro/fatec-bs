import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  cardContainer: {
    width: 280,
    backgroundColor: '#FFFFFF',
    padding: 10,
    marginHorizontal: 8,

    borderRadius: 4,
    borderColor: '#494949',
    borderWidth: 1,

    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,

    alignItems: 'center',
  },
  productImage: {
    width: 120,
    height: 120,
    marginVertical: 10,
    borderRadius: 5,
    resizeMode: 'contain',
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
  },
  productDescription: {
    fontSize: 12,
    textAlign: 'center',
    color: '#666666',
    marginTop: 5,
  },
});
