import React, {useContext} from 'react';
import {StyleSheet, View, ScrollView, useWindowDimensions} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import ProfileModification from '../components/ProfileModification';
import ValidateButton from '../components/ValidateButton';

import ColorContext from '../theme/ColorContext'

export default function ModifyProfile(props) {
  const {colors, toggleColors} = useContext(ColorContext);
  const all = [{value: "Mussels"}, {value: "Skimmed Milk"}, {value: "Nuts"}]
  const die = [{value: "Dairy free"}, {value: "Gluten free"}, {value: "Porkless"}, {value: "Vegan"}, {value: "Vegetarian"}, {value: "Pescatarian"}]
  return (
    <SafeAreaProvider style={{flex: 1}}>
        <ScrollView style={{minHeight: useWindowDimensions().height}}>
            <LinearGradient colors={['#2680AA', '#59BDCD']} style={[styles.linearGradient, {minHeight: useWindowDimensions().height}]}>
                <View style={{marginTop: "6%"}}/>
                <ProfileModification name="Johnny Silverhand" avatar="plus_small.png" diets={die} allergies={all}></ProfileModification>
                <View style={{marginTop: "3%"}}/>
                <ValidateButton title="Update Profile" image="update.png" colour={colors.buttonMain} backColour={colors.buttonBackground} todo={() => (console.log("Profile Modified"))}></ValidateButton>
                <View style={{marginBottom: "20%"}}/>
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