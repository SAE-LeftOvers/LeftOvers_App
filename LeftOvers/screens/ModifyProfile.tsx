import React from 'react';
import {StyleSheet, View} from 'react-native';
import ProfileModification from '../components/ProfileModification';
import ValidateButton from '../components/ValidateButton';
import TopBar from '../components/TopBar';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function ModifyProfile(props) {
  const all = [{value: "Mussels"}, {value: "Skimmed Milk"}, {value: "Nuts"}]
  const die = [{value: "Dairy free"}, {value: "Gluten free"}, {value: "Porkless"}, {value: "Vegan"}, {value: "Vegetarian"}, {value: "Pescatarian"}]
  return (
    <SafeAreaProvider>
        <TopBar title="Modify Profile" isVisible="true"/>
        <View style={styles.container}>
            <LinearGradient colors={['#2680AA', '#59BDCD']} style={styles.linearGradient}>
                <View style={{marginTop: 10}}/>
                <ProfileModification name="Johnny Silverhand" avatar="plus_small.png" diets={die} allergies={all}></ProfileModification>
                <View style={{marginTop: 10}}/>
                <ValidateButton title="Update Profile" image="update.png" colour="#ACA279" backColour="#F2F0E4"></ValidateButton>
            </LinearGradient>
        </View>
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
    padding: 10,
    paddingTop: 0,
  },
});