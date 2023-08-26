import { Text, View } from 'react-native';
import CardContainerStyles from '../styles/CardContainerStyles';

const QuestionSet = (props) => {
  const question =
    props.question !== undefined ? props.question : 'What is the problem?';
  const answer =
    props.answer !== undefined ? props.answer : 'This card returned Undefined!';

  return (
    <View>
      <Text style={CardContainerStyles.question}>{question}</Text>
      <Text style={CardContainerStyles.answer}>{answer}</Text>
    </View>
  );
};

export default QuestionSet;
