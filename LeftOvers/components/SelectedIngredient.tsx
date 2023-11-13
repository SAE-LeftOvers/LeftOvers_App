import React,  { useState }  from 'react';
import {StyleSheet,Pressable, Text, View, Image} from 'react-native';
import bracketLeft from '../assets/images/angle_bracket_left.png'; 
import bracketRight from '../assets/images/angle_bracket_right.png';
import parameter from '../assets/images/parameter.png';
import FoodElementText from './FoodElementText';

interface selectedIngredientProps {
    listeIngredient : string[]
    listeImage  : string[]
    
}

export default function SelectedIngredient(props : any) {

    const [cpt, setCpt] = useState(0);

  const decreaseCounter = () => {
    if (cpt > 0) {
      setCpt(cpt - 1);
    }
    else{
        setCpt( props.listeIngredient.length - 1);
    }
  };

  const increaseCounter = () => {
    if (cpt < props.listeIngredient.length - 1) {
      setCpt(cpt + 1);
    }else{
        setCpt(0);
    }
  };

    return (
      <View style={styles.view}>
        <View id="Top" style={styles.horizontalAlignement}>
            <Text style={styles.text}>Selected ingredients</Text>
            <Pressable>
                <Image source={parameter} style={{ width: 15, height: 15 }} />
            </Pressable>
        </View>

        <View id="IngredientList" style={styles.horizontalAlignement}>
            <Pressable onPress={decreaseCounter} id="GoLeft" style={{}}>
                <Image source={bracketLeft} style={{ width: 40, height: 40 }} />
            </Pressable>

            <FoodElementText title={props.listeIngredient[cpt]} />

            <Pressable onPress={increaseCounter} id="GoRight" style={{}}>
                <Image source={bracketRight} style={{ width: 40, height: 40 }} />
            </Pressable>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
      view: {
        width : 350,
        height: 110,
        borderRadius: 15,
        elevation: 3,
        borderWidth: 2,
        borderColor: 'black',
        display: "flex",
        flexWrap: "wrap",
        backgroundColor: '#E3DEC9',
      },
      horizontalAlignement: {
        display: "flex",
        height : 30,
        width: 350,
        flexDirection : 'row',
        justifyContent : 'space-around',
        alignItems: 'center',
        marginTop: 10,
      },
      text: {
        fontSize: 14,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'black',
      }
  });


