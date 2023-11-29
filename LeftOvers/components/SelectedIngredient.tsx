import React, { useState } from 'react';
import {View, StyleSheet, Pressable, Image, Text} from 'react-native';
import bracketLeft from '../assets/images/angle_bracket_left.png';
import bracketRight from '../assets/images/angle_bracket_right.png';
import parameter from '../assets/images/parameter.png';
import FoodElementText from './FoodElementText';

interface SelectedIngredientProps {
  ingredientList: string[]
  onEvent: () => void
}

export default function SelectedIngredient(props: SelectedIngredientProps) {
  const [cpt, setCpt] = useState(0);

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

  return (
    <View style={styles.view}>
      <View style={styles.horizontalAlignment}>
        <Text style={styles.text}>Selected ingredients</Text>
        <Pressable onPress={props.onEvent}>
          <Image source={parameter} style={{tintColor: "#3F3C42", resizeMode: "contain", flex: 1, marginRight: "8%"}}/>
        </Pressable>
      </View>

      <View style={styles.horizontalAlignment}>
        <Pressable onPress={decreaseCounter}>
          <Image source={bracketLeft} style={{width: 40, height: 40, tintColor: "#3F3C42", resizeMode: "contain"}}/>
        </Pressable>
        <FoodElementText title={props.ingredientList[cpt].title}/>
        <Pressable onPress={increaseCounter}>
          <Image source={bracketRight} style={{width: 40, height: 40, tintColor: "#3F3C42", resizeMode: "contain"}}/>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    width: "90%",
    paddingBottom: "5%",
    borderRadius: 15,
    borderColor: '#3F3C42',
    backgroundColor: '#E3DEC9',
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
    color: '#3F3C42',
    flex: 1,
    marginLeft: "8%",
  },
});
