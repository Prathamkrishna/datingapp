import React, {useState} from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native'
import {Picker} from '@react-native-picker/picker'

//utils
import {windowHeight, windowWidth} from '../../utils/windowdimensions'
import useGenderPicker from '../../utils/useGenderPicker';

function PickUserGender({navigation, route}){
    //TODO: create a util for this
    const [selectedGender, setSelectedGender] = useState();
    const [prefferedGender, setPrefferedGender] = useState();
    function submitButtonPressed(){
        navigation.navigate("Home", {
            "usergender": selectedGender,
            "searchpreference": prefferedGender,
            "image": route.params
        })
    }
    return (
        <View style={{backgroundColor: '#13151B', flex: 1}}>
            <Text style={styles.optionText}>How do you identify yourself?</Text>
            <View style={{color: 'white', backgroundColor: '#13151B'}}>
            <Picker itemStyle={{color: 'white'}} selectedValue={selectedGender} onValueChange={(itemVal, itemIndex)=>setSelectedGender(itemVal)}>
                <Picker.Item label="Male" value="Male" />
                <Picker.Item label="Female" value="Female" />
                <Picker.Item label="Non binary" value="Non binary" />
                <Picker.Item label="Other" value="Other" />
            </Picker>
            </View>
            <Text style={{fontSize: 23, color: '#2fe6fa', textAlign: 'center'}}>Your preferred search preference?</Text>
            <View style={{backgroundColor: '#13151B'}}>
            <Picker itemStyle={{color: 'white'}} selectedValue={prefferedGender} onValueChange={(itemVal, itemIndex2)=>setPrefferedGender(itemVal)}>
                <Picker.Item color="white" label="Male" value="Male" />
                <Picker.Item label="Female" value="Female" />
                <Picker.Item label="Everyone" value="Everyone" />
                <Picker label="Non Binary" value="Non Binary" />
            </Picker>
            </View>
            <View style={styles.chooseButton}>
                <Text style={{fontSize: 25, padding: 5, textAlign: 'center'}} onPress={submitButtonPressed}>Save your preferences</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    optionText: {
        color: '#2fe6fa',
        marginTop: 20,
        fontSize: 23,
        textAlign: 'center'
    },
    chooseButton: {
        alignSelf: 'center',
        marginTop: 25,
        marginBottom: 25,
        width: windowWidth - 130,
        backgroundColor: '#EB7E85',
        borderColor: 'white',
        borderWidth: 1,
        color: 'white',
        borderRadius: 10,
    },
})

export default PickUserGender;