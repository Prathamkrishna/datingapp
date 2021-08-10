import {
    SafeAreaView,
    View,
    Text,
    ScrollView,
    Image,
    StyleSheet
} from 'react-native';
import React from 'react';

function UserInfo({navigation}){
    
    return(
        <SafeAreaView>
            <Text style={styles.nameboxes}>hi</Text>
            <Text style={styles.pickimage} onPress={()=>navigation.navigate("PickImage")}>pick image</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    nameboxes: {
        textAlign: 'center',
        fontSize: 30
    },
    pickimage: {
        fontSize: 30
    }
})

export default UserInfo;