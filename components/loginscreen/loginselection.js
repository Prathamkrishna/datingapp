import React, { useState } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet, 
    Image,
    StatusBar,
    Platform
} from 'react-native';

//components
import CreateNewAcc from './createnewacc';
import LoginToAcc from './logintoacc';

//utils
import {windowHeight, windowWidth} from '../../utils/windowdimensions'

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
        setHeading(true)
        setBackButton(false)
        setSelect(true)
        setImageSize(true);
    }
    return (
        <SafeAreaView style={styles.fullScreen}>
            <View style={styles.selection}>
                {heading ?
                <Text style ={styles.appheading}><Text style={styles.headingColor}>Spotify</Text> meets <Text style={styles.headingColor}>Dating</Text> Online</Text>
                :
                <>
                </>
                }
                <Image source={
                    require('../../assets/homeimage.png')}
                    style={{width: windowWidth, height: 
                        imageSize ? Platform.OS == 'ios' ? (windowHeight - 520) : (windowHeight - 400) : (windowHeight/3)
                    }}
                />
                {select ? 
                <>
                <View style={{maxWidth: '80%'}}>
                    <View style={styles.buttonStyle}>
                        <Text style={{fontSize: 25, padding: 15, textAlign: 'center'}} onPress={createnew}>Create new account</Text>
                    </View>
                    <View style={styles.buttonStyle}>
                        <Text style={{fontSize: 25, padding: 15, textAlign: 'center'}} onPress={login}>Login</Text>
                    </View>
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
        marginBottom: 40,
        textAlign: 'center'
    },
    headingColor: {
        color: '#EB7E85',
        fontWeight: '500'
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
        marginTop: 10,
        color: 'white'
    },
    goBackButton: {
        paddingLeft: 10,
        color: '#2fe6fa'
    }
})

export default LoginSelection;