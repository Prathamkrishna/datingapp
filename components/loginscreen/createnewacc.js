import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    TextInput,
    StyleSheet,
    Button,
} from 'react-native';

//utils
import {windowHeight, windowWidth} from '../../utils/windowdimensions.js'

//store
import {login, logout} from '../../store/reducer';
import store from '../../store/store.js';

function CreateNewAcc(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    function submitFormData(){
        store.dispatch(login({email, password, name}))
    }
    return (
        <View>
            <Text style={styles.textDescription}>Name</Text>
            <TextInput style={styles.inputBoxes}  onChangeText={value=>setName(value)} />
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