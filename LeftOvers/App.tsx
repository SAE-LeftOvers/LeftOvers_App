import React from 'react';
import {StyleSheet, View, SafeAreaView, ScrollView, Text} from 'react-native';
import HomePage from './screens/HomePage';
import Profiles from './screens/Profiles';
import ModifyProfile from './screens/ModifyProfile';
import CreateProfile from './screens/CreateProfile';
import FiltersSelection from './screens/FiltersSelection';
import RecipeSuggestion from './screens/RecipeSuggestion';
import RecipeDetails from './screens/RecipeDetails';
import IngredientSelection from './screens/IngredientSelection';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {LinearGradient} from 'expo-linear-gradient';

export default function App(props) {
  return(
    //<HomePage/>
    //<Profiles/>
    //<ModifyProfile/>
    //<CreateProfile/>
    //<FiltersSelection/>
    //<RecipeSuggestion/>
    //<RecipeDetails/>
    <IngredientSelection/>
  );
}