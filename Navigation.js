import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import logIn from './loginPage';
import signUp from './signUp';
import profilePage from './profilePage'
import details from './details'
import allDetails from './allDetails'
import UserProfile from './UserProfile'
import UserDetails from './UserDetails'

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="allDetail"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="logIn" component={logIn}></Stack.Screen>
        <Stack.Screen name="signUp" component={signUp}></Stack.Screen>
        <Stack.Screen name="profilePage" component={profilePage}></Stack.Screen>
        <Stack.Screen name="details" component={details}></Stack.Screen>
        <Stack.Screen name="allDetails" component={allDetails}></Stack.Screen>
        <Stack.Screen name="UserProfile" component={UserProfile}></Stack.Screen>
        <Stack.Screen name="UserDetails" component={UserDetails}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigation;
