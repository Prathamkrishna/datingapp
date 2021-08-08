import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    TextInput,
    StyleSheet,
    Button,
} from 'react-native';

//components
import {windowHeight, windowWidth} from '../windowdimensions.js'
import {login, logout} from '../../store/reducer';

//store
import store from '../../store/store.js';

function CreateNewAcc(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    function submitFormData(){
        store.dispatch(login({email, password}))
    }
    return (
        <View>
            <Text style={styles.textDescription}>Name</Text>
            <TextInput style={styles.inputBoxes} />
            <Text style={styles.textDescription}>E-mail</Text>
            <TextInput style={styles.inputBoxes} onChangeText={value=>setEmail(value)} />
            <Text style={styles.textDescription}>Password</Text>
            <TextInput style={styles.inputBoxes} onChangeText={value=>setPassword(value)} />
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
        marginTop: 12,
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

export default CreateNewAcc;