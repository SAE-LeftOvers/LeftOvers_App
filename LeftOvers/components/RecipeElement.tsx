import React, {useContext} from 'react';
import {StyleSheet, Pressable, Text, View, Image, ScrollView} from 'react-native';
import brochette from '../assets/images/brochette.png'; 
import Union_left from '../assets/images/Union_left.png';
import Union_right from '../assets/images/Union_right.png';
import background from '../assets/images/Background.png';
import ColorContext from '../theme/ColorContext';
import Recipes from '../Models/Recipes';

interface RecipeElementProps {
  recipe: Recipes
  navigateDetails: any
}

function convertToHoursMinutes(totalMinutes: number): string {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  const hoursString = hours > 0 ? `${hours} h` : '';
  const minutesString = minutes > 0 ? ` ${minutes} min` : '';

  return `${hoursString}${minutesString}`.trim();
}

export default function RecipeElement(props: RecipeElementProps) {
  const {colors} = useContext(ColorContext)

  const styles = StyleSheet.create({
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      width: 300,
      height: "90%",
      borderRadius: 40,
      backgroundColor: colors.recipeElementBackground,
    },
    text: {
      fontSize: 15,
      fontWeight: 'bold',
      color: '#6F6532',
      marginTop: "4%",
    },
    smallText: {
      fontSize: 12,
      color: '#71662A',
      textAlign: "center",
      margin : "2%",
      zIndex: 2,
    },
    duration:{
      fontSize: 12,
      color: '#F2F0E4',
      textAlign: "center",
      margin : "2%",
      zIndex: 2,
    },
    title:{
      fontSize: 18,
      fontWeight: 'bold',
      color: '#524B1A',
    },
    view: {
      width : "95%",
      height: "96.5%",
      borderRadius: 40,
      borderWidth: 2,
      padding: "5%",
      borderColor: '#6F6532',
      alignItems: 'center',
      justifyContent: "center",
    },
    horizontalAlignment: {
      display: "flex",
      flexDirection : 'row',
      alignItems: 'center', 
      justifyContent: 'space-between',
      marginTop : "2%",
      flexWrap: 'wrap',
    },
    scrollViewContainer: {
      flex: 1,
    },
  });

  return (
    <Pressable style={styles.button} onPress={props.navigateDetails}>
      <View style={styles.view}>
        <Text style={styles.text}>{props.recipe.id}</Text>
        <Text style={styles.title}>{props.recipe.name}</Text>
        <Image source={brochette} style={{width: 100, resizeMode: "contain"}}/>
        <View style={styles.horizontalAlignment}>
            <Image source={Union_left} style={{width: "25%", marginRight: "3%", resizeMode: "contain"}} />
            <Text style={styles.text}>Ingredients</Text>
            <Image source={Union_right} style={{ width: "25%", marginLeft: "3%", resizeMode: "contain"}} />
        </View>
        <View style={styles.horizontalAlignment}>
            {props.recipe.ingredients.length > 0 && props.recipe.ingredients.map((source, index) => (
                <Text key={index} style={styles.smallText}>- {source.name} -</Text>
            ))}
        </View>
        <View style={styles.scrollViewContainer}>
            <View style={styles.horizontalAlignment}>
                <Image source={Union_left} style={{width: "27%", marginRight: "3%", resizeMode: "contain"}}/>
                <Text style={styles.text}>Description</Text>
                <Image source={Union_right} style={{width: "27%", marginLeft: "3%", resizeMode: "contain"}}/>
            </View>
            <ScrollView style={{marginTop: "3%", overflow: "hidden", maxHeight: 70}}>
                <Text style={styles.smallText}>{props.recipe.description}</Text>
            </ScrollView>
        </View>
        <Image source={background} style={{width: "80%", resizeMode: "contain", position: "absolute", zIndex: 1, top: "97.5%"}}></Image>
        <Text style={styles.duration}>{convertToHoursMinutes(props.recipe.time_to_cook)}</Text>
      </View>
    </Pressable>
  );
}