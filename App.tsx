import * as React from 'react';
import { Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import { useState } from 'react';

import HomeScreen from './src/component/HomeScreen';
import PageOne from './src/component/PageOne';
import PageTwo from './src/component/PageTwo';
// import Stacks from './Stacks'

const Tab = createBottomTabNavigator();

const client = new ApolloClient({
  uri: 'https://api.spacex.land/graphql/',
  cache: new InMemoryCache()
});

export interface IsShipData{
  ships: Object
  setShips: Function
}
function App() {
  const [ships, setShips ] = useState({});

  function ShipButtons(){

    if(!!ships[0]){
      return(
        ships.map((ship: Object)=>{
            console.log(ship.id)
        })
      )

    }
  }

  client
    .query({
      query: gql`{
          ships {
            id
            image
          }
        }`
    })
    .then(result => setShips(result.data.ships));

return (
 
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" 
            children={()=><HomeScreen ships={ships}/>}
          />
          <Tab.Screen name="Rockets" 
            children={()=><PageOne ships={ships}/>}
          />
          <Tab.Screen name="PageTwo" component={PageTwo} />
        </Tab.Navigator>
      </NavigationContainer>
    </ApolloProvider>
          // <ShipButtons />

  );
}

export default App