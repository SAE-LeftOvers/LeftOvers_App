import React from 'react';
import { StyleSheet, View } from 'react-native';
import RecipeElement from './components/RecipeElement';
import RecipeElementReduce from './components/RecipeElementReduce';

const generateImageList = () => {
  const imageList = [];
  const meat =  '../assets/images/meat.png'; 
  for (let i = 0; i < 5; i++) {
     imageList.push(meat);
  }
  return imageList;
};

export default function App() {
  const imageList = [];

  return (
    <View style={styles.container}>
      <RecipeElement title="Rice whith curry chicken" number="7" description="A delicious rice with a sweet chicken with curry sauce.  je teste des trucs en vrai
      en sah on fait des test parceque parfois la vie est dur faut etre solide
      hahahaha je comprends pas comment c'est possible 
      Perfect recipes for winter, delicious and healthy"  imageList={imageList}></RecipeElement>
      <View style={{width: 50, height: 50}}></View>
      <RecipeElementReduce title="Chocolate cake" number="12" duree="4h30"></RecipeElementReduce>

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
