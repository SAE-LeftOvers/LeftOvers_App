import React from 'react';
import { StyleSheet, View } from 'react-native';
import SelectedIngredient from './components/SelectedIngredient';
import RecipeElementReduce from './components/RecipeElementReduce';
import RecipeElement from './components/RecipeElement';

const generateList = () => {
  const list = [];
  list.push('Apple');
  list.push('Pineapple');
  list.push('Tomato');
  list.push('Meat')
  return list;
};

export default function App() {
  const imageList = [];
  const list = generateList();

  return (
    <View style={styles.container}>
      <SelectedIngredient ListImage={imageList} listeIngredient={list}></SelectedIngredient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
