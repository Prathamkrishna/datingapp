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

// components
import {windowWidth, windowHeight} from '../windowdimensions'

function ImagePicker({navigation}){
    console.log(windowWidth);
    const [images, setImage] = useState([]);
    useEffect(()=>{
        MediaLibrary.requestPermissionsAsync().then(res=>{
            console.log(res, "Res")
        }).catch(err=>{
            console.log(err)
        })
        MediaLibrary.getAssetsAsync({
            first: 50,
            mediaType: 'photo'
        }).then(res=>{
            setImage(res.assets);
        }).catch(err=>{
            console.log(err);
        })
    }, [])
    function navigateBack(val){
        console.log(val);
        navigation.navigate("Home", {
            val
        })
    }
    return(
        <SafeAreaView>
            <ScrollView>
            <View style={{flexDirection: 'row', flexWrap: "wrap"}}>
                {images.map((index)=>{
                    return(
                        <TouchableOpacity onPress={()=>navigateBack(index)}>
                            <Image source={index} style={styles.images} key={index} />
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