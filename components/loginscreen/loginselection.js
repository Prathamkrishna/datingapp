import React, { useState } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet, 
    Image,
    StatusBar
} from 'react-native';

//components
import CreateNewAcc from './createnewacc';
import LoginToAcc from './logintoacc';
import {windowHeight, windowWidth} from '../windowdimensions.js'

function LoginSelection(){
    const [select, setSelect] = useState(true);
    const [logintype, setLogintype] = useState(true);
    const [heading, setHeading] = useState(true);
    const [imageSize, setImageSize] = useState(true);
    const [backbutton, setBackButton] = useState(false);
    function createnew(){
        setSelect(false);
        setLogintype(true);
        setHeading(false)
        setImageSize(false)
        setBackButton(true);
    }
    function login(){
        setSelect(false);
        setLogintype(false)
        setHeading(false)
        setImageSize(false);
        setBackButton(true);
    }
    function goBack(){
        setHeading(false)
        setBackButton(false)
        setSelect(true)
        setImageSize(true);
    }
    return (
        <SafeAreaView style={styles.fullScreen}>
            <View style={styles.selection}>
                <Image source={
                    {uri: "https://media.istockphoto.com/photos/couple-together-listening-music-in-cafe-smiling-picture-id1159441480?k=6&m=1159441480&s=612x612&w=0&h=KSqGQ4wDF4oWybV-lpyZJ5nxLX4LBz_oPq9wxdv89t0="}}
                    style={{width: windowWidth, height: 
                        imageSize ? (windowHeight - 310) : (windowHeight/3)
                    }}
                />
                {heading ?
                <Text style ={styles.appheading}>Dating App</Text>
                :
                <>
                </>
                }
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
                {
                    backbutton ?
                    <Text style={styles.goBack}>
                        Think you made a mistake?
                        <Text style={styles.goBackButton} onPress={goBack}>Go back</Text>
                    </Text>
                    :
                    <>
                    </>
                }
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    fullScreen: {
        backgroundColor: '#9fdf9f',
        // backgroundColor: '#28a428',
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
        fontFamily: "Optima",
        fontSize: 70,
        marginTop: 10,
    },
    buttonStyle: {
        // backgroundColor: '#28a428',
        // backgroundColor: '#9fdf9f',
        backgroundColor: 'white',
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
    },
    goBack: {
        marginTop: 10,
    },
    goBackButton: {
        color: 'blue'
    }
})

export default LoginSelection;