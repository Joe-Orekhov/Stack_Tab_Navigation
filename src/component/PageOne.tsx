import * as React from 'react';
import { Text, View, FlatList, SafeAreaView, StyleSheet, StatusBar, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { isTemplateElement } from '@babel/types';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const SettingsStack = createNativeStackNavigator();



function PageOne({ ships }) {

 
  return (
    <View style={{ flex: 1, 
      justifyContent: 'center', 
      alignItems: 'center',
      backgroundColor: '#b6b3b3'
    }}>
       <Text style={{ color: 'white', fontSize: 80 }}>Details!</Text>
    </View>
  );
}

export default PageOne