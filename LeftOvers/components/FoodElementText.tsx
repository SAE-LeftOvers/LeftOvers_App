import React, { useContext } from 'react';
import {StyleSheet,Pressable, Text, View} from 'react-native';
import Separator from '../components/Separator'; 
import ColorContext from '../theme/ColorContext';


interface FoodElementTextProps {
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
            marginHorizontal: "3%",
        },
        text: {
          fontSize: 15,
          lineHeight: 20,
          fontWeight: 'bold',
          padding : "3%",
          color: colors.cardDetail,
        },
        view: {
          alignItems: 'flex-start',
          justifyContent: 'center',
          marginRight: "3%",
          width: "100%"
        },
        container: {
          width: "100%",
          height: 50,
          borderRadius: 5,
          borderWidth: 2,
          borderColor: colors.cardDetail,
          flexDirection: 'row',
          justifyContent: 'space-between',
        },
    });
    return (
      <Pressable style={styles.button}>
        <View style={styles.container}>
          <View style={styles.view}>
              <Text style={styles.text}>{props.title}</Text>
              <Separator/>
          </View>
        </View>
      </Pressable>
    );
}
