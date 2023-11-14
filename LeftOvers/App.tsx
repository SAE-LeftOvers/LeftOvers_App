import React from 'react';
import {StyleSheet, View } from 'react-native';
import ProfileModification from './components/ProfileModification';
import ValidateButton from './components/ValidateButton';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  const all = [{value: "Mussels"}, {value: "Skimmed Milk"}, {value: "Nuts"}]
  const die = [{value: "Dairy free"}, {value: "Gluten free"}, {value: "Porkless"}, {value: "Vegan"}, {value: "Vegetarian"}, {value: "Pescatarian"}]
  return (
    <View style={styles.container}>
        <LinearGradient colors={['#2680AA', '#59BDCD']} style={styles.linearGradient}>
            <ProfileModification name="Johnny Silverhand" avatar="plus.png" diets={die} allergies={all}></ProfileModification>
            <View style={{marginTop: 10}}/>
            <ValidateButton title="Update Profile" image="update.png" colour="#ACA279" backColour="#F2F0E4"></ValidateButton>
        </LinearGradient>
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