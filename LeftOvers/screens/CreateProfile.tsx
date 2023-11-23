import React from 'react';
import {StyleSheet, View, ScrollView, useWindowDimensions} from 'react-native';
import ProfileModification from '../components/ProfileModification';
import ValidateButton from '../components/ValidateButton';
import TopBar from '../components/TopBar';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function CreateProfile(props) {
  const all = []
  const die = [{value: "Dairy free"}, {value: "Gluten free"}, {value: "Porkless"}, {value: "Vegan"}, {value: "Vegetarian"}, {value: "Pescatarian"}]
  return (
    <SafeAreaProvider style={{flex: 1}}>
        <ScrollView>
            <LinearGradient colors={['#2680AA', '#59BDCD']} style={[styles.linearGradient, {minHeight: useWindowDimensions().height}]}>
                <View style={{marginTop: "6%"}}/>
                <ProfileModification name="" avatar="plus_small.png" diets={die} allergies={all}></ProfileModification>
                <View style={{marginTop: "3%"}}/>
                <ValidateButton title="Create Profile" image="plus.png" colour="#ACA279" backColour="#F2F0E4" todo={() => (console.log("Profile Created"))}></ValidateButton>
                <View style={{marginTop: "20%"}}/>
            </LinearGradient>
        </ScrollView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    flex: 1,
    backgroundColor: '#3F3C42',
    alignItems: 'center',
    justifyContent: 'center',
  },
  linearGradient: {
    height: "100%",
    width: "100%",
    flex: 1,
    padding: "2%",
    paddingTop: 0,
  },
});