import React from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import RecipeElementImage from './components/RecipeElementImage';

export default function App() {

  return (
    <View style={styles.container}>
      <RecipeElementImage title="Rice whith curry chicken" number="7" description="A delicious rice with a sweet chicken with curry sauce."></RecipeElementImage>
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
