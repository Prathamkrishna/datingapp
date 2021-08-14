import {
    SafeAreaView,
    View,
    Text,
    Modal,
    Button,
    Alert
} from 'react-native';
import React, { useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack';

//components
import UserInfo from './userinfo';
import SpotifyConnect from './spotifyconnect';
import ImagePicker from './imagepicker';
import PickUserGender from './usergender';

const RootStack = createStackNavigator();

function UserDetails(){
    return(
        <RootStack.Navigator>
        <RootStack.Group>
          <RootStack.Screen name="Home" component={UserInfo} options={
            {headerShown: false,
            title: "Go Back"}
          } />
        </RootStack.Group>
        <RootStack.Group screenOptions={{ presentation: 'modal' }}>
          <RootStack.Screen name="PickImage" component={ImagePicker} options={
            {title: "Photos"}
          }/>
          <RootStack.Screen name="PickUserGender" component={PickUserGender} options={{
            title: "Pick your preferences",
            headerStyle:{
              backgroundColor: '#13151B',
              elevation: 0,
              shadowOpacity: 0,
            },
            // headerBackTitle: "Save",
            headerTintColor: 'white'
          }} />
        </RootStack.Group>
      </RootStack.Navigator>
    )
}

export default UserDetails;