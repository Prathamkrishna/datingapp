import React, { useState } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet, 
    TextInput,
} from 'react-native';

//utils
import {windowHeight, windowWidth} from '../../utils/windowdimensions'

//store
import {login, logout} from '../../store/reducer';
import store from '../../store/store.js';

function LoginToAcc(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    function submitFormData(){
        store.dispatch(login({email, password}))
    }
    return (
        <View>
            <Text style={styles.textDescription}>Email</Text>
            <TextInput style={styles.inputBoxes} autoCorrect={false} autoCapitalize="none" onChangeText={value=>setEmail(value)} />
            <Text style={styles.textDescription}>Password</Text>
            <TextInput style={styles.inputBoxes} secureTextEntry={true} textContentType="password" onChangeText={value=>setPassword(value)} />
            <Text style={styles.button} onPress={submitFormData}>Submit</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    inputBoxes: {
        backgroundColor: 'white',
        height: 35,
        width: windowWidth - 100,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
    },
    textDescription: {
        fontSize: 20,
        marginTop: 20,
        marginBottom: 5,
        textAlign: 'center'
    },
    button: {
        backgroundColor: 'pink',
        marginTop: windowHeight/25,
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

export default LoginToAcc;