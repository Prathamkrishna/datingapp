import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet, 
    Image,
    StatusBar,
    Platform,
    TouchableOpacity,
    Alert
} from 'react-native';
import axios from 'axios';

//utils
import useSpotifyAuth from '../../utils/useSpotifyAuth';
import {windowHeight, windowWidth} from '../../utils/windowdimensions'

//store
import { appAccess, getuserdetails, login, fetchUserSpotifyData } from '../../store/reducer';
import store from '../../store/store';

function LoginSelection(){
    const [heading, setHeading] = useState(true);
    const [imageSize, setImageSize] = useState(true);
    const [usertoken, setuserToken] = useState();
    const { isAuthenticated, error, authenticateAsync } = useSpotifyAuth();
    function spotifyConnect(){
        authenticateAsync().then((res)=>{
            // getUserInfo(res.authentication.accessToken);
            setuserToken(res.authentication.accessToken);
            // store.dispatch(fetchUserSpotifyData(res.authentication.accessToken))
            // fetchUserSpotifyData(res.authentication.accessToken)
        }).catch(err=>{
            console.log(err)
        })
    }
    useEffect(()=>{
        axios.get('https://api.spotify.com/v1/me',  {headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${usertoken}`},
    }).then(res=>{
        console.log(res.data);
        store.dispatch(getuserdetails());
        axios.post('http://localhost:8080/postuserdetails', {
            "username": res.data.display_name,
            "password": "abc",
            "email": res.data.email
        }).then(resp=>{
            console.log(resp.data, "resp")
            // store.dispatch(appAccess());
        }).catch(err=>{
            Alert.alert("An error occured, check your internet connection and try again")
            console.error(err);
        })
    }).catch(err=>{
        console.error(err)
    })
    }, [usertoken])
    console.log(windowWidth);
    return (
        <SafeAreaView style={styles.fullScreen}>
            <View style={styles.selection}>
                {heading ?
                <View>
                    <Text style ={styles.appheading}><Text style={styles.headingColor}>Spotify</Text> meets <Text style={styles.headingColor}>Dating</Text> Online</Text>
                    <Text style={{textAlign: 'center', fontSize: 20, color: '#EB7E85', fontWeight: '900', marginBottom: 10}}>DATING APP</Text>
                </View>
                :
                <>
                </>
                }
                <Image source={
                    require('../../assets/homeimage.png')}
                    style={{width: windowWidth, height: 
                        imageSize ? Platform.OS == 'android' ? windowHeight - 400 : windowWidth < 390 ? (windowHeight - 400) : (windowHeight - 520) : (windowHeight/3)
                    }}
                    
                />
                <View style={{maxWidth: '80%'}}>
                    <TouchableOpacity style={windowHeight < 800 ? styles.buttonStyle : styles.chooseButtonmoreheight}>
                        <Text style={{fontSize: 25, padding: 5, textAlign: 'center'}} onPress={spotifyConnect}>Login with Spotify</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    fullScreen: {
        backgroundColor: '#13151B', 
        flex: 1
    },
    selection: {
        flexDirection: 'column',
        alignItems: 'center'
    },
    appheading: {
        fontWeight: '300',
        fontSize: 50,
        color: 'white',
        marginTop: 10,
        marginBottom: 20,
        textAlign: 'center'
    },
    headingColor: {
        color: '#EB7E85',
        fontWeight: '500'
    },
    chooseButtonlessheight: {
        alignSelf: 'center',
        marginTop: 10,
        marginBottom: 10,
        width: windowWidth - 130,
        backgroundColor: '#EB7E85',
        borderColor: 'white',
        borderWidth: 1,
        color: 'white',
        borderRadius: 15,
    },
    chooseButtonmoreheight: {
        alignSelf: 'center',
        marginTop: 25,
        marginBottom: 25,
        width: windowWidth - 130,
        backgroundColor: '#EB7E85',
        borderColor: 'white',
        borderWidth: 1,
        color: 'white',
        borderRadius: 15,
    },
    buttonStyle: {
        alignSelf: 'center',
        marginTop: 15,
        marginBottom: 15,
        width: windowWidth - 130,
        backgroundColor: '#EB7E85',
        borderColor: 'white',
        borderWidth: 1,
        color: 'white',
        borderRadius: 40,
    },
    goBack: {
        marginTop: 20,
        color: 'white'
    },
    goBackButton: {
        paddingLeft: 10,
        color: '#2fe6fa'
    }
})

export default LoginSelection;