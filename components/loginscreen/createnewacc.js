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
            <View style={styles.button}>
                <Text style={{fontSize: 25, padding: 15, textAlign: 'center'}} onPress={submitFormData}>Submit</Text>
            </View>
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
        alignSelf: 'center',
        marginTop: 18,
        marginBottom: 15,
        width: windowWidth - 130,
        backgroundColor: '#EB7E85',
        borderColor: 'white',
        borderWidth: 1,
        color: 'white',
        borderRadius: 40,
    }
})

export default CreateNewAcc;