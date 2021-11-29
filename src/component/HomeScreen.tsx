import * as React from 'react';
import { Text, View, Button, FlatList} from 'react-native';
import Stack from './Stacks'



function HomeScreen({ navigation }) {

  return (

      <Stack navigation={navigation} />
  
  );
}
export default HomeScreen