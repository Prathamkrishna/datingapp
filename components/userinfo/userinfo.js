import {
    SafeAreaView,
    View,
    Text,
    ScrollView,
    Image,
    StyleSheet,
    TextInput,
    Alert
} from 'react-native';
import React, { useState } from 'react';
import DateTimePickerModal from "react-native-modal-datetime-picker";

function UserInfo({route, navigation}){
    const [age, setAge] = useState(18);
    const submitDetails = () => {
        console.log("hi");
    }
    const noDetails = () => {
        Alert.alert("You're not old enough for this app! Come back later")
    }
    const checkDetails = () => {
        if(age >= 18){
            return true;
        }else return false;
    }
    return(
        <SafeAreaView>
            {route.params == undefined ?
                <View style={styles.imageWrapper}>
                    <Image source={require('../../assets/user-undefined.jpg')} style={styles.userImage} />
                </View>
                :
                <View style={styles.imageWrapper}>
                    <Image source={route.params.image} style={styles.userImage} />
                </View>
            }
            <Text style={styles.chooseButton} onPress={()=>navigation.navigate("PickImage")}>pick image</Text>
            <Text style={styles.chooseButton}>Select Birth Date</Text>
            <ScrollView keyboardShouldPersistTaps="never">
                <TextInput style={styles.inputAge} placeholder="18" onChangeText={value=>setAge(value)} keyboardType="numeric" />
            </ScrollView>
            <Text style={styles.chooseButton} onPress={()=>navigation.navigate("Spotify")}>Connect to Spotify</Text>
            <Text style={styles.chooseButton}
                onPress={age>=18 && route.params != undefined ? submitDetails : noDetails}
            >Submit</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    chooseButton: {
        textAlign: 'center',
        fontSize: 30
    },
    submitButton:{
        textAlign: 'center',
        fontSize: 30
    },
    inputAge: {
        alignSelf: 'center',
        textAlign: 'center',
        fontSize: 30,
        width: 50,
        height: 30,
        borderWidth: 1,
        borderColor: 'black'
    },
    imageWrapper: {
        alignItems: 'center',
    },
    userImage: {
        borderRadius: 100,
        width: 150,
        height: 150
    }
})

export default UserInfo;