import {FlatList, Pressable, Text, View} from 'react-native';
import Card from './components/Card';
import SearchBar from './components/SearchBar';

const data = [
  {
    id: '1',
    backgroundColor: '#eb7662',
    title: 'Head & Face',
    text: '11 diseases',
  },
  {
    id: '2',
    backgroundColor: '#8dc4bb',
    title: 'Back & Neck',
    text: '9 diseases',
  },
  {
    id: '3',
    backgroundColor: '#f2982f',
    title: 'Elbow & Shoulders',
    text: '12 diseases',
  },
  {
    id: '4',
    backgroundColor: '#327389',
    title: 'Hand & Arm',
    text: '2 diseases',
  },
];

export default function App() {
  const renderItem = ({item}) => (
    <Card
      backgroundColor={item.backgroundColor}
      title={item.title}
      text={item.text}
    />
  );
  return (
    <View style={{flex: 1}}>
      <SearchBar />
      <View
        style={{
          paddingHorizontal: 24,
          marginBottom: 24,
        }}>
        <Text
          style={{
            fontSize: 32,
            color: '#333',
            fontWeight: '600',
            marginBottom: 4,
          }}>
          Learn
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: '#444',
            fontWeight: '400',
          }}>
          Choose the part of the body
        </Text>
      </View>

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}
