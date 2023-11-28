import React, { useContext } from 'react';
import {StyleSheet,Pressable, Text, View, Image} from 'react-native';
import Separator from '../components/Separator'; 
import ColorContext from '../theme/ColorContext';


interface foodElementImageProps {
    title  : string
}

const componentHeight = 60; 
const componentWidth = 280;


export default function FoodElementText(props : any) {
    const {colors, toggleColors } = useContext(ColorContext)

    const styles = StyleSheet.create({
        button: {
            alignItems: 'center',
            justifyContent: 'center',
            width: "80%",
            borderRadius: 5,
            backgroundColor: colors.carrouselBackground,
        },
        text: {
            fontSize: 10,
            fontWeight: 'bold',
            padding : "2%",
            color: colors.cardDetail,
        },
        view: {
            alignItems: 'flex-start',
            justifyContent: 'center',
        },
        container: {
            width: "100%",
            borderRadius: 5,
            borderWidth: 1,
            borderColor: colors.cardDetail,
            flexDirection: 'column',
            justifyContent: 'center',
        },
    });
    return (
        <Pressable style={styles.button}>
            <View style={styles.container}>
                <View style={styles.view}>
                    <Text style={styles.text}>{props.title}</Text>
                </View>
            </View>
        </Pressable>
    );
}
