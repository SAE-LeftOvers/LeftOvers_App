import React, {useContext, useState} from 'react';
import {StyleSheet, Pressable, Text, View, Image, ScrollView, ImageSourcePropType} from 'react-native';
import brochette from '../assets/images/brochette.png'; 
import Union_left from '../assets/images/Union_left.png';
import Union_right from '../assets/images/Union_right.png';
import background from '../assets/images/Background.png';
import cake from '../assets/images/cake.png';
import Carrot_Cake from '../assets/images/Carrot_Cake.png';
import inconnu from '../assets/images/inconnu.png';
import fish from '../assets/images/fish.png';
import fish_meat from '../assets/images/fish_meat.png';
import vegan from '../assets/images/vegan.png';
import egg  from '../assets/images/egg.png';
import pizza from '../assets/images/pizza.png';
import soupVeggie  from '../assets/images/soupVeggie.png';
import soupFish from '../assets/images/soupfish.png'
import soupMeat from '../assets/images/soupMeat.png'
import meat_with_vegetable from '../assets/images/meat_with_vegetables.png';
import riceVegetable from '../assets/images/rice_vegetables.png';
import riceMeat from '../assets/images/Meat_and_Rice.png';
import riceFish from '../assets/images/rice_fish.png'; 
import riceEgg from '../assets/images/riceEgg.png';
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
  const meatDictionary: string[] =  ["beef", "chicken", "turkey", "steak", "rabbit", "duck"]
  const porkDictionary: string[] = ["pork", "lardon", "bacon", "ham"]
  const fishDictionary: string[] = ["tuna", "whiting", "mullet", "sardine", "mackerel", "salmon", "monkfish", "conger", "bass", "cod", "hake"]
  const vegetablesDictionary: string[] = ["artichoke", "aubergine", "beet", "chard", "broccoli", "carrot", "celery", "cabbage", "cauliflower", "zucchini", "spinach", "fennel", "curly", "bean", "lettuce", "apple", "lettuce", "corn", "onion", "parsnips", "leek", "pepper", "potato", "pumpkin", "radish", "scarole", "tomato"]
  const riceDictionary: string[] =  ['rice', 'quinoa', 'barley']
  const eggDictionary: string[] = ['egg', 'omelette'];
  const soupDictionary: string[] = ['soup'];
  const pizzaDictionary: string[] = ['pizza'];

  const dessertDictionary: string[] = ['cake', 'cupcake', 'muffin', 'cookie', 'brownie', 'pie', 'tart', 'macaron', 'doughnut', 'eclair', 'pancake', 'waffle', 'crepe', 'pudding', 'gelato', 'sorbet', 'ice cream', 'cheesecake'];

  const imagesDictionary = {
    meat: meatDictionary,
    pork: porkDictionary,
    fish: fishDictionary,
    vegetables: vegetablesDictionary,
    rice: riceDictionary,
    MeatAndVegetables: [...meatDictionary, ...vegetablesDictionary],
    FishAndMeat: [...fishDictionary, ...meatDictionary],
    egg: eggDictionary,
    dessertDictionary: dessertDictionary,
    fruitCake : [...vegetablesDictionary, ...dessertDictionary],
    riceEgg : [...riceDictionary, ...eggDictionary],
    riceMeat : [...riceDictionary, ...meatDictionary],
    riceFish : [...riceDictionary, ...fishDictionary],
    riceVegetable : [...riceDictionary, ...vegetablesDictionary],
    // pizzaMeat : [...pizzaDictionary, ...meatDictionary],
    // pizzaVeggie : [...riceDictionary, ...vegetablesDictionary],
    // pizzaFish : [...riceDictionary, ...fishDictionary],
    pizza : pizzaDictionary,
    soupMeat : [...soupDictionary, ...meatDictionary],
    soupVeggie : [...soupDictionary, ...vegetablesDictionary],
    soupFish : [...soupDictionary, ...fishDictionary],
    unknown: [],
  };

  function getImageForRecipe(recipeName: string) {
    for (const [category, words] of Object.entries(imagesDictionary)) {
      const matchedWords = words.filter((word) => recipeName.toLowerCase().includes(word));
      if (matchedWords.length > 0) {
        switch (category) {
          case 'meat':
            return meat_with_vegetable;
          case 'pork':
            return brochette;
          case 'fish':
            return fish;
          case 'vegetables':
            return vegan;
          case 'MeatAndVegetables':
            return meat_with_vegetable; // Choisis l'image appropriée
          case 'FishAndMeat':
            return fish_meat; // Choisis l'image appropriée
          case 'egg':
            return egg; // Choisis l'image appropriée
          case 'dessert':
            return cake; // Choisis l'image appropriée
          case 'fruitCake':
            return Carrot_Cake; // Choisis l'image appropriée
          case 'riceEgg':
            return riceEgg; // Choisis l'image appropriée
          case 'riceMeat':
            return riceMeat; // Choisis l'image appropriée
          case 'riceFish':
            return riceFish; // Choisis l'image appropriée
          case 'riceVegetable':
            return riceVegetable; // Choisis l'image appropriée
          case 'pizza':
            return pizza;
          case 'soupVeggie':
            return soupVeggie;
          case 'soupMeat':
              return soupMeat;
          case 'soupFish':
                return soupFish;
          default:
            return inconnu;
        }
      }
    }
    return inconnu;
  }
  


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
        <Image source={getImageForRecipe(props.recipe.name)} style={{width: 100, resizeMode: "contain"}}/>
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
            <ScrollView style={{marginTop: "3%", overflow: "hidden"}}>
                <Text style={styles.smallText}>{props.recipe.description}</Text>
            </ScrollView>
        </View>
        <Image source={background} style={{width: "80%", resizeMode: "contain", position: "absolute", zIndex: 1, top: "97.5%"}}></Image>
        <Text style={styles.duration}>{convertToHoursMinutes(props.recipe.time_to_cook)}</Text>
      </View>
    </Pressable>
  ); 

  
}