import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//components
import LoginSelection from './components/loginscreen/loginselection';
import store from './store/store';
import UserDetails from './components/userinfo/userconnect';

const Stack = createStackNavigator();

export default function App() {
  const [userLoginStatus, setUserLoginStatus] = useState(true);
  store.subscribe(()=>{
    setUserLoginStatus(store.getState().loginState);
  })
  return (
    <NavigationContainer>
      {userLoginStatus ?
      <Stack.Navigator>
        <Stack.Screen name="login" component={LoginSelection} options={
          {headerShown: false}
        }/>
      </Stack.Navigator>
      :
      <UserDetails />
      }
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
