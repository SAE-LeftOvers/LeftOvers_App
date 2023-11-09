import React from 'react';
import { StyleSheet, View } from 'react-native';
import RecipeElementImage from './components/RecipeElementImage';

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
      <RecipeElementImage title="Rice whith curry chicken" number="7" description="A delicious rice with a sweet chicken with curry sauce."  imageList={imageList}></RecipeElementImage>
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
