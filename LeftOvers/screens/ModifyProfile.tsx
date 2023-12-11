import React, {useContext, useEffect, useState} from 'react';
import {StyleSheet, View, ScrollView, useWindowDimensions} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import ProfileModification from '../components/ProfileModification';
import ValidateButton from '../components/ValidateButton';

import ColorContext from '../theme/ColorContext'
import { useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ModifyProfile(props) {
  const {colors} = useContext(ColorContext);
  const [profile, setProfile] = useState(null);
  const route = useRoute();

  const handleGetProfileByName = async (profileName) => {
    try {
      const existingProfiles = await AsyncStorage.getItem('profiles');
      const profiles = JSON.parse(existingProfiles) || [];
  
      const matchedProfile = profiles.find(profile => profile.name === profileName);
      return matchedProfile || null; 
    } catch (error) {
      console.error("Erreur lors de la récupération du profil :", error);
      return null;
    }
  };

  const fetchProfiles = async () => {
      const selectedProfil = await handleGetProfileByName(route.params);
      setProfile(selectedProfil);
  };

useEffect(() => {
  fetchProfiles();
}, []);

  return (
    <SafeAreaProvider style={{flex: 1}}>
        <ScrollView style={{minHeight: useWindowDimensions().height}}>
            <LinearGradient colors={[colors.primary, colors.primaryComplement]} style={[styles.linearGradient, {minHeight: useWindowDimensions().height}]}>
                <View style={{marginTop: "6%"}}/>
                <ProfileModification name={profile.name} avatar={profile.avatar} diets={profile.diets} allergies={profile.allergies}></ProfileModification>
                <View style={{marginTop: "3%"}}/>
                <ValidateButton title="Update Profile" image="update.png" colour={colors.buttonMain} backColour={colors.cardBackground} todo={() => console.log("")}></ValidateButton>
                <View style={{marginTop: "20%"}}/>
            </LinearGradient>
        </ScrollView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  linearGradient: {
    height: "100%",
    width: "100%",
    flex: 1,
    padding: "2%",
    paddingTop: 0,
  },
});