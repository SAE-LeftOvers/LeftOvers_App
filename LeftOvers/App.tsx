import React from 'react';
import {StyleSheet, View } from 'react-native';
import ProfileModification from './components/ProfileModification';
import ValidateButton from './components/ValidateButton';
import { LinearGradient } from 'expo-linear-gradient';
import RecipeSuggestion from './screens/RecipeSuggestion';
import RecipeDetails from './screens/RecipeDetails';

export default function App() {
  const all = [{value: "Mussels"}, {value: "Skimmed Milk"}, {value: "Nuts"}]
  const die = [{value: "Dairy free"}, {value: "Gluten free"}, {value: "Porkless"}, {value: "Vegan"}, {value: "Vegetarian"}, {value: "Pescatarian"}]
  const ingredient = [{value: "Chocolate"}, {value: "Skimmed Milk"}, {value: "Eggs"}, , {value: "Farine"}]
  const ustensils = [{value: "Bol"}, {value: "Fouet"}, {value: "Casserole"}]
  const steps = [{value: "Chauffer chocolat"}, 
  {value: "1. Casser oeuf"}, 
  {value: "2. Melanger la farine, le lait et les oeufs"},
  {value: "3. Battre fort"},
  {value: "4. Voler la montre de Louison"},
  {value: "5. Melanger avec le chocolat"},
  {value: "6. Mettre au four"},
]
  
  function generateList() {
    const list = [];
    list.push("Meat");
    list.push("Meat");
    list.push("Meat");
    list.push("Meat");
    list.push("Teat");
    list.push("Meat");
    list.push("Meat");
    list.push("Meat");
    return list;
}

const ingredients = generateList();
  
  return (
    /*<RecipeSuggestion list={ingredients} diets={die} allergy={all}></RecipeSuggestion> */
    <RecipeDetails ingredient={ingredient} 
    ustensils={ustensils} 
    steps={steps} 
    title="Chocolat Cake" 
    number="63"
    duree="30 minutes"
    ></RecipeDetails>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3F3C42',
    alignItems: 'center',
    justifyContent: 'center',
  },
  linearGradient: {
    //height: 844,
    //width: 390,
    flex: 1,
    padding: 10,
    paddingTop: 0,
    //backgroundColor: "#59BDCD",
    //alignItems: 'center',
    //justifyContent: 'flex-start',
  },
});