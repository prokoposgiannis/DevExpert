import { StyleSheet } from 'react-native';

const CardBackgroundColor = 'yellow';

export default StyleSheet.create({
  AppContainer: {
    flexDirection: 'column',
    flex: 1,
  },

  cardStyle: {
    backgroundColor: CardBackgroundColor,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: {
      width: -1,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    borderRadius: 6,
  },
  cardContent: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    width: '100%',
  },

  viewAnswerButton: {
    position: 'absolute',
    textAlign: 'right',
    fontSize: 14,
    right: '4%',
    bottom: '2%',
  },

  loveTheCardButton: {
    position: 'absolute',
    textAlign: 'right',
    fontSize: 14,
    right: '4%',
    top: '2%',
  },
});
