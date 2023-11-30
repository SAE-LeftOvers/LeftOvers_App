import React, {useContext} from 'react';
import {StyleSheet, Pressable, Text, View} from 'react-native';
import ColorContext from '../theme/ColorContext';


interface CustomButtonProps {
  title  : string
}

export default function CustomButton(props: CustomButtonProps) {
  const {colors} = useContext(ColorContext)

  const styles = StyleSheet.create({
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      width : 150,
      height: 40,
      borderRadius: 4,
      backgroundColor: colors.cardBackground,
    },
    text: {
      fontSize: 15,
      fontWeight: 'bold',
      color: colors.cardElementBorder,
    },
    view: {
      width : 145,
      height: 35,
      borderRadius: 4,
      borderWidth: 1,
      borderColor: colors.cardElementBorder,
      alignItems: 'center',
      justifyContent: 'center',
      margin: "1%",
    },
  });
  
  return (
    <Pressable style={styles.button}>
      <View style={styles.view}>
        <Text style={styles.text}>{props.title}</Text>
      </View>
    </Pressable>
  );
}