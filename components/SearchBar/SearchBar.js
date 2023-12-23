import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './SearchBar.style';
const myIcon = <Icon name="rocket" size={16} color="#fff" />;
const SearchBar = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Friday, 152 Dec</Text>
      <Text style={styles.text}>{myIcon} Search</Text> 
    </View>
  );
};

export default SearchBar;
