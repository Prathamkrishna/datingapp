import {
    SafeAreaView,
    View,
    Text,
    ScrollView,
    Image,
    StyleSheet,
    TextInput,
    Alert,
    TouchableOpacity
} from 'react-native';
import React, { useState } from 'react';
import * as AuthSession from 'expo-auth-session'

//store
import {login, appAccess, logout, userDetails} from '../../store/reducer';
import store from '../../store/store.js';

//icon
import Icon from 'react-native-vector-icons/FontAwesome5'

//utils
import useSpotifyAuth from '../../utils/useSpotifyAuth';
import {windowHeight, windowWidth} from '../../utils/windowdimensions';
import axios from 'axios';

function UserInfo({route, navigation}){
    const [age, setAge] = useState("*update this!*");
    const [username, setUsername] = useState(null);
    const [image, setImage] = useState(null);
    const [spotifyConnected, setSpotifyConnected] = useState(false);
    const { isAuthenticated, error, authenticateAsync } = useSpotifyAuth();
    const submitDetails = () => {
        let formdata = new FormData();
        formdata.append('image', {
            uri: store.getState().userImage.uri,
            type: "image/jpeg",
            name: store.getState().userImage.filename
        })
        // axios.post("http://localhost:8080/postuserdetails", {
        //     "username": username,
        //     "age": age,
        //     "image": store.getState().userImage.filename
        // }).then(res=>{
        //     console.log(res, "Ress");
        //     store.dispatch(login({username}))
        //     store.dispatch(appAccess())
        //     // console.log("hi");
        // }).catch(err=>{
        //     Alert.alert("An error occurred, please try again later")
        //     console.log(err);
        // })
        axios({
            url: "http://localhost:8080/image/upload",
            data: formdata,
            method: 'POST',
            headers: {
                'Content-type': 'multipart/form-data'
            }
        }, {
            "name": username
        }).then(res=>{
            console.log(res, "Ress");
            store.dispatch(login({username}))
            store.dispatch(appAccess())
            // console.log("hi");
        }).catch(err=>{
            Alert.alert("Exceeded file size")
            console.log(err);
        })
    }
    const noDetails = () => {
        // Alert.alert(AuthSession.getDefaultReturnUrl())
        Alert.alert("Oops you missed something? Check if you've filled all the options!")
    }
    console.log(windowHeight)
    store.subscribe(()=>{
        setImage(store.getState().userImage);
    })
    return(
        <SafeAreaView style={{backgroundColor: '#13151B', flex: 1}}>
            <ScrollView>
            <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 10, justifyContent: 'center'}}>
                <Text style={{fontSize: 30, padding: 5, textAlign: 'center', color: '#2fe6fa'}}>Your display name</Text>
            </View>
            <View style={{height: 50}}>
            <ScrollView style={{alignSelf: 'center'}} keyboardShouldPersistTaps="never">
                <TextInput style={styles.inputUsername} autoCompleteType="name" autoCapitalize="none" maxLength={10} onChangeText={value=>setUsername(value)} keyboardType="default" />
            </ScrollView>
            </View>
            {image == null ?
                <View style={styles.imageWrapper}>
                    <Image source={store.getState().userImage} style={styles.userImage} />
                </View>
                :
                <View style={styles.imageWrapper}>
                    <Image source={store.getState().userImage} style={styles.userImage} />
                </View>
            }
            <View style={windowHeight < 800 ? styles.chooseButtonlessheight : styles.chooseButtonmoreheight}>
                <Text style={{fontSize: 30, padding: 5, textAlign: 'center'}} onPress={()=>navigation.navigate("PickImage")}>Pick image</Text>
            </View> 
            <View style={windowHeight < 800 ? styles.chooseButtonlessheight : styles.chooseButtonmoreheight} onPress={()=>navigation.navigate("PickUserGender")}>
                <Text style={{fontSize: 25, padding: 5, textAlign: 'center'}} onPress={()=>navigation.navigate("PickUserGender", {
                    "image": image
                })}>Pick your preferences</Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 10, justifyContent: 'center'}}>
                <Text style={{fontSize: 30, padding: 5, textAlign: 'center', color: '#2fe6fa'}}>How old are you?</Text>
            </View>
            <View style={{height: 50}}>
            <ScrollView style={{alignSelf: 'center'}} keyboardShouldPersistTaps="never">
                <TextInput style={styles.inputAge} maxLength={2} onChangeText={value=>setAge(value)} keyboardType="numeric" />
            </ScrollView>
            </View>
            <Text style={{color: 'white', fontSize: 15, marginLeft: 10, textAlign: 'center'}}>You are of {age} years of age!</Text>
            <TouchableOpacity style={styles.submitButton} 
                onPress={age>=18 && username != null && image != undefined ? submitDetails : noDetails}
            >
            <Text style={{fontSize: 30, padding: 5, textAlign: 'center'}}>Submit</Text> 
            </TouchableOpacity>
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
    submitButton:{
        alignSelf: 'center',
        margin: 20,
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
    inputUsername: {
        alignSelf: 'center',
        textAlign: 'center',
        fontSize: 30,
        width: 200,
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