import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

//icon
import {Icon} from 'react-native-vector-icons';

//store
import store from '../../store/store';

function UserProfile(){
    const [image, setImage] = useState();
    useEffect(()=>{
        axios.get("http://localhost:8080/random")
            .then(res=>{
                console.log(res.data.image)
                setImage(res.data.image)
            })
            .catch(err=>{
                console.log(err);
            })
    })
    console.log(store.getState().userImage)
    return(
        <SafeAreaView style={{backgroundColor: '#13151B', flex: 1}}>
            <View>
                <View style={styles.imageWrapper}>
                    {/* <Image source={store.getState().userImage} style={styles.userImage} /> */}
                    <Image source={image} style={styles.userImage} />
                </View>
                <Text style={styles.usergreet}>{store.getState().name}, age</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    usergreet: {
        color: 'white',
        fontSize: 30,
        textAlign: 'center'
    },
    imageWrapper: {
        alignItems: 'center',
    },
    userImage: {
        borderRadius: 100,
        width: 200,
        height: 200
    }
})

export default UserProfile;