import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import TabbedAlternatePage from './TabbedAlternatePage';
import TabbedPage from './TabbedPage';

const Tab = createMaterialBottomTabNavigator();
export default function MaterialTabbedPageNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="TabbedPage"
      activeColor="#55ff00"
      inactiveColor='black'
      barStyle={{ backgroundColor: '#694fad' }}
    >
      <Tab.Screen
        name="TabbedPage"
        component={TabbedPage}
        options={{
          tabBarLabel: 'bell',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="TabbedAlternatePage"
        component={TabbedAlternatePage}
        options={{
          tabBarLabel: 'ball',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="basketball" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}