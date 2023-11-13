import React from 'react';
import { StyleSheet, View } from 'react-native';
import TopBar from './components/TopBar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RecipeSuggestion from './screens/RecipeSuggestion';

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
    <RecipeSuggestion list={list}></RecipeSuggestion>  
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
