import React from 'react';
import {StyleSheet, View } from 'react-native';
import ProfileModification from './components/ProfileModification';
import ValidateButton from './components/ValidateButton';

export default function App() {
  const all = [{title: "Mussels"}, {title: "Skimmed Milk"}, {title: "Nuts"}]
  const die = [{title: "Dairy free"}, {title: "Gluten free"}, {title: "Porkless"}, {title: "Vegan"}, {title: "Vegetarian"}, {title: "Pescatarian"}]
  return (
    <View style={styles.container}>
        <View style={styles.background}>
          <ProfileModification name="Johnny Silverhand" avatar="plus.png" diets={die} allergies={all}></ProfileModification>
          <View style={{marginTop: 10}}/>
          <ValidateButton title="Update Profile" image="plus.png" colour="#ACA279" backColour="#F2F0E4"></ValidateButton>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3F3C42',
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    height: 844,
    width: 390,
    backgroundColor: "linear-gradient(#59BDCD, #59BDCD)",
    alignItems: 'center',
    justifyContent: 'flex-start',
  }
});
