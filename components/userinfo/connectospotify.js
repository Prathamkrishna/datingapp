import {
    SafeAreaView,
    View,
    Text,
    Modal
} from 'react-native';
import WebView from 'react-native-webview';
import React, { useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack';

const RootStack = createStackNavigator();

function ConnectSpotify(){
    return(
        <RootStack.Navigator>
        <RootStack.Group>
          <RootStack.Screen name="Home" component={Hi} />
        </RootStack.Group>
        <RootStack.Group screenOptions={{ presentation: 'modal' }}>
          <RootStack.Screen name="MyModal" component={Spotify} />
        </RootStack.Group>
      </RootStack.Navigator>
    )
}

function Spotify(){
    return(
        <WebView source={{uri: "https://www.spotify.com/us/home/"}} />
    )
}

function Hi({navigation}){
    return(
        <SafeAreaView>
            <View>
                <Text onPress={()=>navigation.navigate("MyModal")}>hi</Text>
            </View>
        </SafeAreaView>
    )
}

export default ConnectSpotify;