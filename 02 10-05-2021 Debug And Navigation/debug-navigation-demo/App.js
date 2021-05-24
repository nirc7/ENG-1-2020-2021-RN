import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import FirstPage from './Pages/FirstPage';
import SecondPage from './Pages/SecondPage';
import MaterialTabbedPageNavigator from './Pages/MaterialTabbedPageNavigator';
import ThirdPage from './Pages/ThirdPage';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName="FirstPage"
      drawerPosition="left">
      <Drawer.Screen
        name="FirstPage"
        component={FirstPage}
        options={{ drawerLabel: 'First Page' }}
      />
      <Drawer.Screen
        name="SecondPage"
        component={SecondPage}
        options={{ drawerLabel: 'Second Page' }}
      />
      <Drawer.Screen
        name="ThirdPage"
        component={ThirdPage}
        options={{ drawerLabel: 'ThirdPage Page' }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer>
        <Stack.Navigator initialRouteName="ThirdPage"   >
          <Stack.Screen name="FirstPage" component={FirstPage} />
          <Stack.Screen name="SecondPage" component={SecondPage} />
          <Stack.Screen name="ThirdPage" component={ThirdPage} />
          <Stack.Screen name="MaterialTabbedPageNavigator" component={MaterialTabbedPageNavigator} />
        </Stack.Navigator>
      </MyDrawer>
    </NavigationContainer>
  );
}
