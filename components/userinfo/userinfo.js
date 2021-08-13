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
import DateTimePickerModal from "react-native-modal-datetime-picker";
import useSpotifyAuth from '../../utils/useSpotifyAuth';
import {windowHeight, windowWidth} from '../windowdimensions';
import {Picker} from '@react-native-picker/picker';

function UserInfo({route, navigation}){
    const [age, setAge] = useState(18);
    const { isAuthenticated, error, authenticateAsync } = useSpotifyAuth();
    const submitDetails = () => {
        console.log("hi");
    }
    const noDetails = () => {
        Alert.alert("You're not old enough for this app! Come back later")
    }
    const spotifyConnect = () =>{
        authenticateAsync().then(res=>{
            console.log("heeee")
        }).catch(err=>{
            console.log(err)
        })
    }
    return(
        <SafeAreaView style={{backgroundColor: '#13151B', flex: 1}}>
            <Text style={styles.userGreet}>hii</Text>
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
                <Text style={{fontSize: 25, padding: 5, textAlign: 'center'}} onPress={()=>navigation.navigate("PickUserGender")}>Pick your preferences</Text>
            </View>
            <View style={styles.chooseButton}>
            <Text style={{fontSize: 30, padding: 5, textAlign: 'center'}}>Enter your age</Text>
            </View>
            <ScrollView style={{alignSelf: 'center'}} keyboardShouldPersistTaps="never">
                <TextInput style={styles.inputAge} onChangeText={value=>setAge(value)} keyboardType="numeric" />
            </ScrollView>
            <View style={styles.chooseButton}>
            <Text style={{fontSize: 30, padding: 5, textAlign: 'center'}} onPress={spotifyConnect}>Connect to Spotify</Text>
            </View>
            <View style={styles.submitButton}>
            <Text style={{fontSize: 30, padding: 5, textAlign: 'center'}}
                onPress={age>=18 && route.params != undefined ? submitDetails : noDetails}
            >Submit</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    userGreet: {
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
        marginBottom: 15
    },  
    chooseButton: {
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