import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import  { NavigationContainer }  from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import FirstPage from './Pages/FirstPage';
import SecondPage from './Pages/SecondPage';
import MaterialTabbedPageNavigator from './Pages/MaterialTabbedPageNavigator';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator  initialRouteName="FirstPage"   >
        <Stack.Screen name="FirstPage" component={FirstPage} />
        <Stack.Screen name="SecondPage" component={SecondPage} />
        <Stack.Screen name="MaterialTabbedPageNavigator" component={MaterialTabbedPageNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
