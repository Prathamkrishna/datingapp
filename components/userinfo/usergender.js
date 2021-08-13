import React, {useState} from 'react';
import {
    View,
    Text
} from 'react-native'
import {Picker} from '@react-native-picker/picker'

function PickUserGender({navigation}){
    //create a util for this
    const [selectedGender, setSelectedGender] = useState();
    return (
        <View>
            <Text>Your gender?</Text>
            <Picker style={{backgroundColor: 'white'}} selectedValue={selectedGender} onValueChange={(itemVal, itemIndex)=>setSelectedGender(itemVal)}>
                <Picker.Item label="Male" value="Male" />
                <Picker.Item label="Female" value="Female" />
            </Picker>
            <Text>Your preferred search preference?</Text>
            <Picker style={{backgroundColor: 'white'}} selectedValue={selectedGender} onValueChange={(itemVal2, itemIndex2)=>setSelectedGender(itemVal2)}>
                <Picker.Item label="Male" value="Male" />
                <Picker.Item label="Female" value="Female" />
            </Picker>
        </View>
    )
}

export default PickUserGender;