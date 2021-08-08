import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//components
import LoginSelection from './components/loginscreen/loginselection';
import store from './store/store';
import ConnectSpotify from './components/userinfo/connectospotify';

const Stack = createStackNavigator();

export default function App() {
  const [userLoginStatus, setUserLoginStatus] = useState(true);
  store.subscribe(()=>{
    console.log(store.getState());
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
      <ConnectSpotify />
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
