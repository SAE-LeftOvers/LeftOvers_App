import React from 'react';
import {StyleSheet, View } from 'react-native';
import ProfileModification from './components/ProfileModification';

export default function App() {
    const all = [{title: "Mussels"}, {title: "Skimmed Milk"}, {title: "Nuts"}]
    const die = [{title: "Dairy free"}, {title: "Porkless"}, {title: "Pescatarian"}]
  return (
    <View style={styles.container}>
      <ProfileModification name="Johnny Silverhand" avatar="plus.png" diets={die} allergies={all}></ProfileModification>
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
});
