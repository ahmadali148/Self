import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SignUp} from '../screens/signUp/SignUp';
import {Basics} from '../screens/Basics';
import {Dashboard} from '../screens/dashboard';
import {EditProfile} from '../screens/editProfile';
import {List, MultiList, Test, FlatListMulti, New, Ladies, Gents, Setting,} from '../screens/list';
import {TabNavigator} from './TabNavigator';


const Stack = createNativeStackNavigator();

export const ScreenNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      {/* <Stack.Screen
          name="Setting"
          component={Setting}
          options={{headerShown: false}}
        /> */}
      <Stack.Screen
          name="TabNavigator"
          component={TabNavigator}
          options={{headerShown: false}}
        />
      {/* <Stack.Screen
          name="New"
          component={New}
          options={{headerShown: false}}
        /> */}
      {/* <Stack.Screen
          name="FlatListMulti"
          component={FlatListMulti}
          options={{headerShown: false}}
        /> */}
        {/* <Stack.Screen
        name="MultiList"
        component={MultiList}
        options={{headerShown: false}}
      /> */}
        {/* <Stack.Screen
          name="List"
          component={List}
          options={{headerShown: false}}
        /> */}
        {/* <Stack.Screen
          name="Test"
          component={Test}
          options={{headerShown: false}}
        /> */}

        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="EditProfile"
          component={EditProfile}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Basics"
          component={Basics}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
