import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//components
import LoginScreen from './components/loginscreen/LoginScreen';
import store from './store/store';
import UserDetails from './components/userinfo';
import UserApp from './components/mainapp';

const Stack = createStackNavigator();

export default function App() {
  const [userLoginStatus, setUserLoginStatus] = useState(false);
  const [appAccess, setAppAccess] = useState(false);
  store.subscribe(()=>{
    console.log(store.getState().loginState, "updated app.js")
    setUserLoginStatus(store.getState().loginState);
    setAppAccess(store.getState().isLogin);
  })
  return (
    <NavigationContainer>
      {appAccess ?
        <UserApp />
        :
        userLoginStatus ?
        <UserDetails />
        :
        <Stack.Navigator>
          <Stack.Screen name="login" component={LoginScreen} options={
            {headerShown: false}
          }/>
        </Stack.Navigator>
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
