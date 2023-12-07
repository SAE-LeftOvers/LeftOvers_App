import React, {useContext} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import brochette from '../assets/images/brochette.png'; 
import background from '../assets/images/Background.png';
import ColorContext from '../theme/ColorContext';


interface RecipeElementReduceProps {
  number : number
  title  : string
  image : string | null
  duration : string
  imageRecipe: any
}

export default function RecipeElementReduce(props: RecipeElementReduceProps) {
    const {colors} = useContext(ColorContext)

    const styles = StyleSheet.create({
      button: {
        alignItems: 'center',
        justifyContent: 'center',
        width : 250,
        height: 250,
        borderRadius: 40,
        backgroundColor: colors.recipeElementBackground,
      },
      text: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#6F6532',
        marginTop: "4%",
        zIndex: 2
      },
      smallText: {
          position: "absolute",
          fontSize: 12,
          color: '#F2F0E4',
          textAlign: "center",
          margin : "2%",
          zIndex: 2,
          fontWeight: "bold",
          top: "89.25%"
      },
      title:{
          fontSize: 18,
          fontWeight: 'bold',
          color: '#524B1A',
          zIndex: 2
      },
      view: {
          width : "95%",
          height: "95%",
          borderRadius: 40,
          borderWidth: 2,
          padding: "5%",
          borderColor: '#73692A',
          alignItems: 'center',
          justifyContent: "center",
      },
    });


  return (
    <View style={styles.button}>
      <View style={styles.view}>
        <Text style={styles.text}>{props.number}</Text>
        <Text style={styles.title}>{props.title}</Text>
        <Image source={props.imageRecipe} style={{ width: 100, height: 100, resizeMode: "contain", zIndex: 2}}/>
        <View style={{marginBottom: "20%"}}/>
        <Image source={background} style={{width: "80%", resizeMode: "contain", position: "absolute", zIndex: 1, top: "90%"}}></Image>
        <Text style={styles.smallText}>{props.duration}</Text>
      </View>
    </View>
  ); 
}