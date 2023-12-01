import React, { useContext } from 'react';
import {StyleSheet, View, ScrollView, useWindowDimensions} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import ProfileModification from '../components/ProfileModification';
import ValidateButton from '../components/ValidateButton';
import ColorContext from '../theme/ColorContext';

export default function CreateProfile(props) {
    const { colors } = useContext(ColorContext)
    const all = []
    const die = [{value: "Dairy free"}, {value: "Gluten free"}, {value: "Porkless"}, {value: "Vegan"}, {value: "Vegetarian"}, {value: "Pescatarian"}]

    const handleCreateProfile = () => {
        const profileData = {
          name: "Nom du profil", // Remplacez par le nom du profil
          avatar: "Lien de l'avatar", // Remplacez par le lien de l'avatar
          diets: die.map(item => item.value), // Liste des régimes
          allergies: all, // Liste des allergies
        };
      
        localStorage.setItem('profile', JSON.stringify(profileData));
        console.log("Profil créé :", profileData);
      
        // Redirection vers la page précédente avec un message de confirmation
        props.navigation.goBack();
        // Affichage d'un message
        alert("Profil créé !");
      };
    
    const styles = StyleSheet.create({
        linearGradient: {
            height: "100%",
            width: "100%",
            flex: 1,
            padding: "2%",
            paddingTop: 0,
        },
    });

    return (
        <SafeAreaProvider style={{flex: 1}}>
            <ScrollView>
                <LinearGradient colors={[colors.primary, colors.primaryComplement]} style={[styles.linearGradient, {minHeight: useWindowDimensions().height}]}>
                    <View style={{marginTop: "6%"}}/>
                        <View style={styles.background}>
                            <View style={styles.pseudoBar}>
                                <Pressable onPress={pickImage}>
                                    <Image source={imageSource} style={styles.avatar}></Image>
                                </Pressable>
                                <TextInput style={styles.textInput} value={name} onChangeText={onChangeName} placeholder="Name"></TextInput>
                            </View>
                            <View style={styles.filterBar}>
                                <Text style={styles.filters}>Filters</Text>
                                <Text style={styles.nbSelected}>"0 diets selected</Text>
                            </View>
                            <ListSelect title="Diets" content={die} setSelected={handleSelectedDiets}></ListSelect>
                            <View style={{marginTop: "6%"}}/>
                            <ListWithoutSelect title="Allergies" content={all}></ListWithoutSelect>
                            <View style={{marginTop: "3%"}}/>
                        </View>
                    <View style={{marginTop: "3%"}}/>
                    <ValidateButton title="Create Profile" image="plus.png" colour={colors.buttonMain} backColour={colors.cardBackground} todo={handleCreateProfile}></ValidateButton>
                    <View style={{marginTop: "20%"}}/>
                </LinearGradient>
            </ScrollView>
        </SafeAreaProvider>
    );
}

