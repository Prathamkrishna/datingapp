import {
    SafeAreaView
} from 'react-native';
import React from 'react';
import WebView from 'react-native-webview';


function SpotifyConnect(){
    return(
        <WebView source={{uri: "https://www.spotify.com/us/home/"}} />
    )
}

export default SpotifyConnect;