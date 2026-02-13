import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingTop: 50,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
    paddingHorizontal: 20,
  },
  backButton: {
    marginRight: 15,
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
    marginRight: 40,
  },
  appTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'sans-serif-medium',
    marginBottom: 5,
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: '#333',
  },
  content: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    flex: 1
  },
  subTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#000',
  },
  dash: {
    fontWeight: 'normal',
  },
  synopsisBox: {
    borderWidth: 1,
    borderColor: '#73c748',
    borderRadius: 5,
    padding: 15,
    backgroundColor: '#f9f9f9',
  },
  synopsisText: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24,
    textAlign: 'justify',
  },
});
