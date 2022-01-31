import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Dashboard} from '../screens/dashboard';
import {FlatListMulti, Gents, Ladies, List, MultiList, New, Setting} from '../screens/list';
const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'grey',
        tabBarShowLabel: false,
        // tabBarStyle: {
        //     backgroundColor: '#af24',
        // },
      }}>
      <Tab.Screen
        name="Gents"
        component={Gents}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Ionicons name="man" color={color} size={22} />
          ),
        }}
      />
      <Tab.Screen
        name="Ladies"
        component={Ladies}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Ionicons name="woman" color={color} size={22} />
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Ionicons name="settings" color={color} size={22} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

