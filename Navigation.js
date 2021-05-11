import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import logIn from './loginPage';
import signUp from './signUp';
import ProfilePage from './profilePage'
import Details from './details'

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
        <Stack.Screen name="ProfilePage" component={ProfilePage}></Stack.Screen>
        <Stack.Screen name="details" component={Details}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigation;
