import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Dimensions,
} from 'react-native';
import HomePageStyles from '../styles/HomePageStyles';

const { width, height } = Dimensions.get('screen');

const CardContent = (item) => {
  const isLoved = item.isLoved === true ? '<3' : '</3';
  const isCardexpanded = item.isCardexpanded;
  const question =
    item.question !== undefined ? item.question : 'What is the problem?';
  const content = isCardexpanded === true ? item.answer : item.question;
  const loveTheCard = () => item.loveCard();
  const delteTheCard = () => item.deleteCard();
  const cardExpander = () => item.cardExpander();
  const answer =
    item.answer !== undefined
      ? item.answer
      : 'This card returned Undefined, go tell John!';

  return (
    <View
      style={{
        width: '100%',
        height: '100%',
      }}
    >
      <View
        style={{
          flex: 1,
          margin: 10,
          backgroundColor: 'yellow',
          borderRadius: 10,
          borderColor: 'black',
          borderWidth: 3,
        }}
      >
        <TouchableOpacity
          // style={[HomePageStyles.loveTheCardButton]}
          onPress={() => {
            loveTheCard();
          }}
        >
          <Text>{isLoved}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          // style={[HomePageStyles.loveTheCardButton]}
          onPress={() => {
            delteTheCard();
          }}
        >
          <Text>DELETE</Text>
        </TouchableOpacity>
        <View style={{ flex: 1 }}>
          <ScrollView>
            <Text style={styles.text}>{content}</Text>
          </ScrollView>
        </View>
        <TouchableOpacity
          // style={HomePageStyles.viewAnswerButton}
          onPress={() => {
            cardExpander();
          }}
        >
          <Text>Λύση</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
  },
});

export default CardContent;
