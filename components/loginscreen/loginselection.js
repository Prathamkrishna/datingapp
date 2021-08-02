import React, { useState } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    Button,
    StyleSheet
} from 'react-native';

//components
import CreateNewAcc from './createnewacc';
import LoginToAcc from './logintoacc';

function LoginSelection(){
    const [select, setSelect] = useState(true);
    const [logintype, setLogintype] = useState(true);
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
                <Text style={styles.appheading}>Dating App</Text>
                {select ? 
                <>
                <Button title="Create New Account" onPress={createnew} />
                <Button title="Login" onPress={login} />
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
        backgroundColor: 'pink',
        flex: 1,
    },
    selection: {
        marginTop: 300,
        flexDirection: 'column',
        alignItems: 'center'
    },
    appheading: {
        fontSize: 40,
    }
})

export default LoginSelection;