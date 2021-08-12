import {
    SafeAreaView,
    View,
    Text
} from 'react-native';
import React, { useEffect } from 'react';
import WebView from 'react-native-webview';
import * as AuthSession from 'expo-auth-session';
import useSpotifyAuth from '../../utils/useSpotifyAuth';

function SpotifyConnect({route, navigation}){
    const { isAuthenticated, error, authenticateAsync } = useSpotifyAuth();
    // const insets = useSafeArea();

    useEffect(()=>{
        authenticateAsync().then(res=>{
            console.log("heeee")
        }).catch(err=>{
            console.log(err)
        })
    }, [])
    // TODO: Sort this mess out
    useEffect(() => {
      if (isAuthenticated) {
        // navigation.replace("MyPlaylists");
        console.log("meow");
      }
    }, [isAuthenticated]);

    // useEffect(() => {
    //   if (isAuthenticated) {
    //     setCurrentUser({ isAuthenticated: true });
    //   }
    // }, [isAuthenticated]);

    useEffect(() => {
      if (error) {
        alert(error);
      }
    }, [error]);
    return(
        <View>
            <Text>hi</Text>
        </View>
    )
}

export default SpotifyConnect;
