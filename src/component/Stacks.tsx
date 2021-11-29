import * as React from 'react';
import { Text, View, Button } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import SuccessfulLandings from './SuccessfulLandings';
import Details from './Details';
import PageOne from './PageOne';

const Stack = createNativeStackNavigator();

function MyStack({ navigation }) {

  return (
    
      <Stack.Navigator>
        <Stack.Screen name="Successful Landings" component={SuccessfulLandings} />
        <Stack.Screen name="PageOne" component={PageOne} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    
  );
}

export default MyStack