import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'space-evenly',
  },
  ScreenTopImage: { width: 150, height: 150 },
  QuoteText: { fontSize: 20 },
  QuoteTextView: { alignItems: 'center' },
  SignUpButton: {
    backgroundColor: 'white',
    marginTop: 50,
    height: 60,
    width: 300,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'cornflowerblue',
    borderWidth: 2,
  },
  SignUpButtonText: { color: 'cornflowerblue' },
  LoginButton: {
    backgroundColor: 'cornflowerblue',
    marginTop: 20,
    height: 60,
    width: 300,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  LoginButtonText: { color: 'white' },
  SignUpTextInput: {
    marginTop: 20,
    borderRadius: 10,
    borderColor: 'cornflowerblue',
    borderWidth: 1,
    width: 300,
  },
});

export default styles;
