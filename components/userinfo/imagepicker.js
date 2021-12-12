import { 
    SafeAreaView, 
    View, 
    Image, 
    ScrollView, 
    StyleSheet,
    TouchableOpacity
} from "react-native";
import React, { useEffect, useState } from 'react';
import * as MediaLibrary from 'expo-media-library';

// store
import { userDetails } from "../../store/reducer";
import store from "../../store/store";

// components
import {windowWidth, windowHeight} from '../../utils/windowdimensions'

function ImagePicker({navigation}){
    const [images, setImage] = useState([]);
    let count = 0;
    useEffect(()=>{
        async function fetchUserPerms(){
            MediaLibrary.requestPermissionsAsync().then(()=>{
                fetchUserPhotos();
            }).catch(err=>{
                console.log(err)
            })
        }
        async function fetchUserPhotos(){
            MediaLibrary.getAssetsAsync({
                first: 300,
                mediaType: 'photo'
            }).then(res=>{
                setImage(res.assets);
            }).catch(err=>{
                console.log(err);
            })
        }
        fetchUserPerms();
    }, [])
    function navigateBack(image){
        store.dispatch(userDetails({image}))
        navigation.navigate("Home")
        console.log("dispatched action in image picker and updated" + store.getState().userImage);
        // , {
        //     "image": image
        // })
    }
    return(
        <SafeAreaView>
            <ScrollView>
            <View style={{flexDirection: 'row', flexWrap: "wrap"}}>
                {images.map((index)=>{
                    return(
                        <TouchableOpacity key={index.id} onPress={()=>navigateBack(index)}>
                            <Image source={index} style={styles.images} />
                        </TouchableOpacity>
                    )
                })}
            </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    imageswrapper:{
        flex: 1,
        flexDirection: "row",
    },
    images: {
        width: windowWidth/3,
        height: windowWidth/3,
    }
})

export default ImagePicker;