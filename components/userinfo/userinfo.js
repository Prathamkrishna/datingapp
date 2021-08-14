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
import {login, logout} from '../../store/reducer';
import store from '../../store/store.js';

//utils
import useSpotifyAuth from '../../utils/useSpotifyAuth';
import {windowHeight, windowWidth} from '../../utils/windowdimensions';

function UserInfo({route, navigation}){
    const [age, setAge] = useState("*update this!*");
    const { isAuthenticated, error, authenticateAsync } = useSpotifyAuth();
    const submitDetails = () => {
        console.log("hi");
    }
    const noDetails = () => {
        Alert.alert("Oops you missed something? Check if you've filled all the options!")
    }
    const spotifyConnect = () =>{
        authenticateAsync().then(res=>{
            console.log("heeee")
        }).catch(err=>{
            console.log(err)
        })
    }
    const userName = store.getState().name;
    return(
        <SafeAreaView style={{backgroundColor: '#13151B', flex: 1}}>
            <ScrollView>
            <Text style={styles.userGreet}>Hi {userName}!</Text>
            {route.params == undefined ?
                <View style={styles.imageWrapper}>
                    <Image source={require('../../assets/user-undefined.jpg')} style={styles.userImage} />
                </View>
                :
                <View style={styles.imageWrapper}>
                    <Image source={route.params.image} style={styles.userImage} />
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
            <View style={styles.chooseButton}>
                <Text style={{fontSize: 30, padding: 5, textAlign: 'center'}}>Enter your age</Text>
            </View>
            <View style={{height: 50}}>
            <ScrollView style={{alignSelf: 'center'}} keyboardShouldPersistTaps="never">
                <TextInput style={styles.inputAge} onChangeText={value=>setAge(value)} keyboardType="numeric" />
            </ScrollView>
            </View>
            <Text style={{color: 'white', fontSize: 15, marginLeft: 10, textAlign: 'center'}}>You are of {age} years of age!</Text>
            <View style={styles.chooseButton}>
                <Text style={{fontSize: 30, padding: 5, textAlign: 'center'}} onPress={spotifyConnect}>Connect to Spotify</Text>
            </View>
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