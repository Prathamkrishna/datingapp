import {
    SafeAreaView,
    View,
    Text,
    Modal
} from 'react-native';
import React, { useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack';

//components
import UserInfo from './userinfo';
import SpotifyConnect from './spotifyconnect';
import ImagePicker from './imagepicker';

const RootStack = createStackNavigator();

function ConnectSpotify(){
    return(
        <RootStack.Navigator>
        <RootStack.Group>
          <RootStack.Screen name="Home" component={UserInfo} options={
            {headerShown: false}
          } />
        </RootStack.Group>
        <RootStack.Group screenOptions={{ presentation: 'modal' }}>
          <RootStack.Screen name="MyModal" component={SpotifyConnect} options={
            {headerShown: false}
          }/>
          <RootStack.Screen name="PickImage" component={ImagePicker} options={
            {headerShown: false}
          }/>
        </RootStack.Group>
      </RootStack.Navigator>
    )
}

export default ConnectSpotify;