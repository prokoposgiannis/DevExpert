import { View, Text, TouchableOpacity } from 'react-native';
import HomePageStyles from '../styles/HomePageStyles';

const CardContent = (item) => {
  const isLoved = item.isLoved === true ? '<3' : '</3';
  const isCardexpanded = item.isCardexpanded;
  const question =
    item.question !== undefined ? item.question : 'What is the problem?';
  const content = isCardexpanded === true ? item.answer : item.question;
  const loveTheCard = () => item.loveCard();
  const cardExpander = () => item.cardExpander();
  const answer =
    item.answer !== undefined
      ? item.answer
      : 'This card returned Undefined, go tell John!';

  return (
    <View style={HomePageStyles.cardContent}>
      <TouchableOpacity
        style={[HomePageStyles.loveTheCardButton]}
        onPress={() => {
          loveTheCard();
        }}
      >
        <Text>{isLoved}</Text>
      </TouchableOpacity>
      {/* <Text>{question}</Text>
      <Text>{answer}</Text> */}
      <Text>{content}</Text>
      <TouchableOpacity
        style={[HomePageStyles.viewAnswerButton]}
        onPress={() => {
          cardExpander();
        }}
      >
        <Text>Λύση</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CardContent;
