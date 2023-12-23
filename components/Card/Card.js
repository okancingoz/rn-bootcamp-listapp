import {Text, View} from 'react-native';
import styles from './Card.style';

const Card = ({backgroundColor, title, text}) => {
  return (
    <View style={[styles.container, {backgroundColor}]}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};
export default Card;
