import * as React from 'react';
import { Text, View } from 'react-native';

function PageTwo() {
  return (
    <View style={{ flex: 1, 
      justifyContent: 'center', 
      alignItems: 'center',
      backgroundColor: "yellow"
    }}>
      <Text style={{
        color: 'black',
        fontSize: 80
      }}
      >PageTwo!</Text>
    </View>
  );
}

export default PageTwo