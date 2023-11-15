import React from 'react';
import {StyleSheet, View} from 'react-native';
import ProfileModification from '../components/ProfileModification';
import ProfileDetails from '../components/ProfileDetails';
import ValidateButton from '../components/ValidateButton';
import TopBar from '../components/TopBar';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function ModifyProfile(props) {
  const allJohnny = [{value: "Coconut"}, {value: "Skimmed Milk"}, {value: "Nuts"}]
  const dieJohnny = [{value: "Gluten free"}, {value: "Porkless"}, {value: "Pescatarian"}]

  const allJackie = [{value: "Tomato"}, {value: "Relic"}]
  const dieJackie = [{value: "Porkless"}, {value: "Vegetarian"}]

  const allGoro = []
  const dieGoro = [{value: "Pescatarian"}]

  const allViktor = [{value: "Pasta"}, {value: "Fish"}]
  const dieViktor = [{value: "Dairy free"}, {value: "Vegan"}]

  return (
    <SafeAreaProvider>
        <TopBar title="Profiles" isVisible="true"/>
        <View style={styles.container}>
            <LinearGradient colors={['#2680AA', '#59BDCD']} style={styles.linearGradient}>
                <View style={{marginTop: 10}}/>
                <ProfileDetails name="Johnny Silverhand" avatar="plus_small.png" diets={dieJohnny} allergies={allJohnny}></ProfileDetails>
                <View style={{marginTop: 10}}/>
                <ProfileDetails name="Jackie Welles" avatar="plus_small.png" diets={dieJackie} allergies={allJackie}></ProfileDetails>
                <View style={{marginTop: 10}}/>
                <ProfileDetails name="Goro Takemura" avatar="plus_small.png" diets={dieGoro} allergies={allGoro}></ProfileDetails>
                <View style={{marginTop: 10}}/>
                <ProfileDetails name="Viktor Vector" avatar="plus_small.png" diets={dieViktor} allergies={allViktor}></ProfileDetails>
                <View style={{marginTop: 10}}/>
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