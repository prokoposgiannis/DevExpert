import { StyleSheet } from 'react-native';

const backgroundColor = '#F7F7F7';
const primaryColor = '#5091ee';
const barIconTextColor = '#fff';
const itemDataColor = '#41BAE6';
const articleFontFamily = 'sans-serif'; //android
const articleTextColor = '#737373';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  question: {
    backgroundColor: 'red',
    fontSize: 50,
    textAlign: 'center',
  },
  answer: {
    backgroundColor: 'grey',
    fontSize: 40,
    textAlign: 'center',
  },
});
