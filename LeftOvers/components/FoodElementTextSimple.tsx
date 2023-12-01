import React, {useContext} from 'react';
import {StyleSheet,Pressable, Text, View} from 'react-native';
import ColorContext from '../theme/ColorContext';

interface FoodElementTextSimpleProps {
  title: string
}

export default function FoodElementTextSimple(props: FoodElementTextSimpleProps) {
  const {colors} = useContext(ColorContext)

  const styles = StyleSheet.create({
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      width: "80%",
      borderRadius: 5,
      backgroundColor: colors.ingredientBackground,
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
      borderColor: colors.foodElementBorder,
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