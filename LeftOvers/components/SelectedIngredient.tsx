import React, { useState, useContext } from 'react';
import {View, StyleSheet, Pressable, Image, Text} from 'react-native';
import bracketLeft from '../assets/images/angle_bracket_left.png';
import bracketRight from '../assets/images/angle_bracket_right.png';
import parameter from '../assets/images/parameter.png';
import FoodElementText from './FoodElementText';
import ColorContext from '../theme/ColorContext';
import Ingredient from '../Models/Ingredient';

interface SelectedIngredientProps {
  ingredientList: Ingredient[]
  onEvent: () => void
}

export default function SelectedIngredient(props: SelectedIngredientProps) {
  const [cpt, setCpt] = useState(0);
  const {colors} = useContext(ColorContext)

  const decreaseCounter = () => {
    if(cpt > 0){
      setCpt(cpt - 1);
    }
    else{
      setCpt(props.ingredientList.length - 1);
    }
  };
  const increaseCounter = () => {
    if(cpt < props.ingredientList.length - 1){
      setCpt(cpt + 1);
    }
    else{
      setCpt(0);
    }
  };

  const styles = StyleSheet.create({
    view: {
      width: "90%",
      paddingBottom: "5%",
      borderRadius: 15,
      borderWidth: 1,
      borderColor: colors.blocBorder,
      backgroundColor: colors.buttonBackground,
      alignItems: "center",
      justifyContent: "center",
    },
    horizontalAlignment: {
      width: "90%",
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      marginTop: "3%",
    },
    text: {
      fontSize: 15,
      fontWeight: 'bold',
      color: colors.cardDetail,
      flex: 1,
      marginLeft: "8%",
    },
  });  

  return (
    <View style={styles.view}>
      <View style={styles.horizontalAlignment}>
        <Text style={styles.text}>Selected ingredients</Text>
        <Pressable onPress={props.onEvent}>
          <Image source={parameter} style={{tintColor: colors.cardDetail, resizeMode: "contain", flex: 1, marginRight: "8%"}}/>
        </Pressable>
      </View>

      <View style={styles.horizontalAlignment}>
        <Pressable onPress={decreaseCounter}>
          <Image source={bracketLeft} style={{width: 40, height: 40, tintColor: colors.cardDetail, resizeMode: "contain"}}/>
        </Pressable>
        <FoodElementText title={props.ingredientList[cpt].name}/>
        <Pressable onPress={increaseCounter}>
          <Image source={bracketRight} style={{width: 40, height: 40, tintColor: colors.cardDetail, resizeMode: "contain"}}/>
        </Pressable>
      </View>
    </View>
  );
}