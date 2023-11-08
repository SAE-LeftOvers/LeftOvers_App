import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import CustomButton from './components/CustomButton';
import FoodElementText from './components/FoodElementText';

export default function App() {

  return (
    <View style={styles.container}>
      <FoodElementText title="Apple" image="plus" />
      <FoodElementText title="Pineaple" image="moins" />
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
