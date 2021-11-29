import * as React from 'react';
import { Text, View, Button } from 'react-native';

  function SuccessfulLandings({ navigation }) {
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
        >PageB!</Text>
        <Button title="PageOne" onPress={()=> navigation.navigate('PageOne')}/>
        <Button title="HELLO" onPress={()=> navigation.navigate('PageB')}/>
        <Button title="HELLO" onPress={()=> navigation.navigate('PageC')}/>
      </View>
    );
  }
  export default SuccessfulLandings