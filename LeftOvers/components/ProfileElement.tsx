import React, { useContext, useState } from 'react';
import {StyleSheet,Pressable, Text, View, Image} from 'react-native';
import ColorContext from '../theme/ColorContext';

type Profile = {
    name: string
    avatar: string
    isActive: string
    disableSelection: boolean
}

export default function ProfileElement(props : Profile) {
    const { colors, toggleColors } = useContext(ColorContext)

    const [waiting, setWaiting] = useState("none")
    const [separator, setSeparator] = useState("none")
    const changeStatus = () => {
        if (props.disableSelection){
            setWaiting("none")
        }
        else if (waiting == "flex"){
            setWaiting("none")
        }
        else{
            setWaiting("flex")
        }
        if (props.disableSelection){
            setSeparator("none")
        }
        else if (props.isActive == "flex" && waiting == "none"){
            setSeparator("flex")
        }
        else{
            setSeparator("none")
        }
        console.log(waiting, separator, props.name)
    }

    let imageSource
    if (props.avatar == "plus.png"){
        imageSource = require('../assets/images/plus.png')
    }
    else if (props.avatar == "plus_small.png"){
        imageSource = require('../assets/images/plus_small.png')
    }
    else{
        imageSource = require('../assets/images/logo.png')
    }

    const styles = StyleSheet.create({
        button: {
            alignItems: 'center',
            justifyContent: 'flex-start',
            height: "80%",
            width: "78%",
            marginVertical: "3%",
        },
        pseudoBar: {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            marginHorizontal: "3%",
            marginBottom: "3%",
        },
        avatar: {
            padding: "5%",
            resizeMode: 'contain',
            borderWidth: 2,
            borderColor: colors.carrouselText,
            borderRadius: 45,
            height: "100%",
            flex: 0.01,
        },
        text: {
            fontSize: 15,
            color: colors.carrouselText,
            alignItems: 'center',
            textAlign: 'left',
            flex: 0.9,
            marginLeft: "10%",
            padding: "2%",
        },
    
        active: {
            borderWidth: 1,
            borderRadius: 20,
            borderColor: colors.carrouselDetail,
            padding: "1%",
        },
        textActive: {
            fontSize: 10,
            color: colors.carrouselDetail,
        },
    
        waiting: {
            borderWidth: 1,
            borderRadius: 20,
            borderColor: "#ACA279",
            padding: "1%",
        },
        textWaiting: {
            fontSize: 10,
            color: "#ACA279",
        },
    });

    return (
        <Pressable onPress={changeStatus} style={styles.button}>
            <View>
                <View style={styles.pseudoBar}>
                    <Image source={imageSource} style={styles.avatar}></Image>
                    <Text style={styles.text}>{props.name}</Text>
                </View>
                <View style={styles.pseudoBar}>
                    <View style={[styles.active, {display: props.isActive}]}>
                        <Text style={styles.textActive}>Activated</Text>
                    </View>
                    <View style={{flex: 0.3, display: separator}}/>
                    <View style={[styles.waiting, {display: waiting}]}>
                        <Text style={styles.textWaiting}>Waiting...</Text>
                    </View>
                </View>
            </View>
        </Pressable>
    );
}