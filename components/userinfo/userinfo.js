import {
    SafeAreaView,
    View,
    Text,
    ScrollView,
    Image,
    StyleSheet,
    TextInput,
    Alert
} from 'react-native';
import React, { useState } from 'react';

//store
import {login, logout, userDetails} from '../../store/reducer';
import store from '../../store/store.js';

//icon
import Icon from 'react-native-vector-icons/FontAwesome5'

//utils
import useSpotifyAuth from '../../utils/useSpotifyAuth';
import {windowHeight, windowWidth} from '../../utils/windowdimensions';
import axios from 'axios';

function UserInfo({route, navigation}){
    const [age, setAge] = useState("*update this!*");
    const [username, setUsername] = useState();
    const [spotifyConnected, setSpotifyConnected] = useState(false);
    const { isAuthenticated, error, authenticateAsync } = useSpotifyAuth();
    const submitDetails = () => {
        console.log("hi");
    }
    const noDetails = () => {
        Alert.alert("Oops you missed something? Check if you've filled all the options!")
    }
    const spotifyConnect = () =>{
        authenticateAsync().then(res=>{
            getUserInfo(res.authentication.accessToken);
        }).catch(err=>{
            console.log(err)
        })
    }
    async function getUserInfo(token){
        axios.get('https://api.spotify.com/v1/me', {headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`},
        }).then(res=>{
            setUsername(res.data.display_name)
            setSpotifyConnected(true)
        }).catch(err=>{
            console.error(err)
        })
      }
    const userName = store.getState().name;
    return(
        <SafeAreaView style={{backgroundColor: '#13151B', flex: 1}}>
            <ScrollView>
            <Text style={styles.userGreet}>Hi {userName}!</Text>
            {route.params == undefined ?
                <View style={styles.imageWrapper}>
                    <Image source={store.getState().userImage} style={styles.userImage} />
                </View>
                :
                <View style={styles.imageWrapper}>
                    <Image source={store.getState().userImage} style={styles.userImage} />
                </View>
            }
            <View style={styles.chooseButton}>
                <Text style={{fontSize: 30, padding: 5, textAlign: 'center'}} onPress={()=>navigation.navigate("PickImage")}>Pick image</Text>
            </View>
            <View style={styles.chooseButton}>
                <Text style={{fontSize: 25, padding: 5, textAlign: 'center'}} onPress={()=>navigation.navigate("PickUserGender", {
                    "image": route.params
                })}>Pick your preferences</Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 10, justifyContent: 'center'}}>
                <Text style={{fontSize: 30, padding: 5, textAlign: 'center', color: '#2fe6fa'}}>How old are you?</Text>
            </View>
            <View style={{height: 50}}>
            <ScrollView style={{alignSelf: 'center'}} keyboardShouldPersistTaps="never">
                <TextInput style={styles.inputAge} onChangeText={value=>setAge(value)} keyboardType="numeric" />
            </ScrollView>
            </View>
            <Text style={{color: 'white', fontSize: 15, marginLeft: 10, textAlign: 'center'}}>You are of {age} years of age!</Text>
            {spotifyConnected ?
            <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 20, marginTop: 10, justifyContent: 'center'}}>
            <Icon name="spotify" size={30} color="#17d46c"/>
                <Text style={{fontSize: 30, padding: 5, textAlign: 'center', color: '#2fe6fa'}}>{username}</Text>
            </View>
            :
            <View style={styles.chooseButton}>
                <Text style={{fontSize: 30, padding: 5, textAlign: 'center'}} onPress={spotifyConnect}>Connect to Spotify</Text>
            </View>
            }
            <View style={styles.submitButton}>
            <Text style={{fontSize: 30, padding: 5, textAlign: 'center'}}
                onPress={age>=18 && route.params != undefined ? submitDetails : noDetails}
            >Submit</Text>
            </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    userGreet: {
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
        marginBottom: 7,
        marginTop: 7,
    },  
    chooseButton: {
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
    submitButton:{
        alignSelf: 'center',
        width: windowWidth - 130,
        backgroundColor: 'white',
        borderColor: 'white',
        borderWidth: 1,
        color: 'black',
        borderRadius: 15,
    },
    inputAge: {
        alignSelf: 'center',
        textAlign: 'center',
        fontSize: 30,
        width: 50,
        backgroundColor: 'white',
        height: 32,
        borderWidth: 1,
        borderColor: 'black'
    },
    imageWrapper: {
        alignItems: 'center',
    },
    userImage: {
        borderRadius: 100,
        width: 200,
        height: 200
    }
})

export default UserInfo;