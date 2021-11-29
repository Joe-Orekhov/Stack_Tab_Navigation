import * as React from 'react';
import { Text, View, Button } from 'react-native';

function Details({ navigation }) {
  return (
    <View style={{ flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: "red"
    }}>
      <Text style={{
        color: 'white',
        fontSize: 80
      }}
      >Details!</Text>
      <Button title="PageOne" onPress={()=> navigation.navigate('PageOne')}/>
    </View>
  );
}

export default Details