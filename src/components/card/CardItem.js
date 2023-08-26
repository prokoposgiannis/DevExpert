import { Text, View } from 'react-native';

const CardItem = (props) => {
  const question =
    props.question !== undefined ? props.question : 'What is the problem?';
  const answer =
    props.answer !== undefined ? props.answer : 'This card returned Undefined!';

  return (
    <View>
      <Text>{question}</Text>
      <Text>{answer}</Text>
    </View>
  );
};

export default CardItem;
