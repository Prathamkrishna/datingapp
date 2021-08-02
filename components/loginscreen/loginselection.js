import React, { useState } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet, 
    Image,
    Dimensions,
    StatusBar
} from 'react-native';

//components
import CreateNewAcc from './createnewacc';
import LoginToAcc from './logintoacc';

function LoginSelection(){
    const [select, setSelect] = useState(true);
    const [logintype, setLogintype] = useState(true);
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    function createnew(){
        setSelect(false);
        setLogintype(true);
    }
    function login(){
        setSelect(false);
        setLogintype(false)
    }
    return (
        <SafeAreaView style={styles.fullScreen}>
            <View style={styles.selection}>
                <Image source={
                    {uri: "https://media.istockphoto.com/photos/couple-together-listening-music-in-cafe-smiling-picture-id1159441480?k=6&m=1159441480&s=612x612&w=0&h=KSqGQ4wDF4oWybV-lpyZJ5nxLX4LBz_oPq9wxdv89t0="}}
                    style={{width: windowWidth, height: (windowHeight - 310)}}
                />
                <Text style={styles.appheading}>Dating App</Text>
                {select ? 
                <>
                <View style={{maxWidth: '80%'}}>
                <Text style={styles.buttonStyle} onPress={createnew}>Create new account</Text>
                <Text style={styles.buttonStyle} onPress={login}>Login</Text>
                </View>
                </>
                :
                   logintype ?
                   <CreateNewAcc />
                   : 
                   <LoginToAcc />
                }
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    fullScreen: {
        backgroundColor: '#ff8080',
        flex: 1,
    },
    statusBar: {
        backgroundColor: 'white',
        color: 'white'
    },
    selection: {
        flexDirection: 'column',
        alignItems: 'center'
    },
    appheading: {
        fontSize: 70,
        marginTop: 10,
    },
    buttonStyle: {
        backgroundColor: 'pink',
        marginTop: 20,
        fontSize: 25,
        padding: 10,
        paddingLeft: 30,
        paddingRight: 30,
        borderColor: 'black',
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 0,
        textAlign: 'center'
    }
})

export default LoginSelection;