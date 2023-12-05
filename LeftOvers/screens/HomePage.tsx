import React, { useContext, useState, useEffect } from 'react';
import { StyleSheet, View, Text, Pressable, Image, ScrollView } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import ValidateButton from '../components/ValidateButton';
import ProfileSelection from '../components/ProfileSelection';
import FoodElementText from '../components/FoodElementText';
import ColorContext from '../theme/ColorContext';

import bracketLeft from '../assets/images/angle_bracket_left.png';
import bracketRight from '../assets/images/angle_bracket_right.png';

import AsyncStorage from '@react-native-async-storage/async-storage';
import  EventEmitter  from './EventEmitter';

export default function HomePage({ navigation, props }) {
    const {colors} = useContext(ColorContext);

    const profilesHand = [
        {name: "None", avatar: "logo.png", isActive: "none"}
    ]
    const ingredientListHand = [{name: "None"}]

    const [profiles, setProfiles] = useState(profilesHand);
    const [ingredientList, setIngredientList] = useState(ingredientListHand)

    const handleGetProfiles = async () => {
        try {
            const existingProfiles = await AsyncStorage.getItem('profiles');
            return JSON.parse(existingProfiles) || [];
        } catch (error) {
            console.log(error);
            return [];
        }
    }

    const handleGetAvailableIngredient = async () => {
        try {
            const existingAvailableIngredient = await AsyncStorage.getItem('ingredient');
            return JSON.parse(existingAvailableIngredient) || [];
        } catch (error) {
            console.log(error);
            return [];
        }
    }

    const fetchProfiles = async () => {
        const existingProfiles = await handleGetProfiles();
        if (existingProfiles.length != 0){
            setProfiles(existingProfiles);
        }
        else{
            setProfiles(profilesHand)
        }
    };

    const fetchAvailableIngredient = async () => {
        const existingAvailableIngredient = await handleGetAvailableIngredient();
        if (existingAvailableIngredient.length != 0){
            setIngredientList(existingAvailableIngredient);
        }
        else{
            setIngredientList(ingredientListHand)
        }
    };

    const subscriptionAddProfile = EventEmitter.addListener('profileAdded', async () => {
        fetchProfiles();
    });

    const subscriptionDeleteProfile = EventEmitter.addListener('profileDeleted', async () => {
        if (profiles.length == 1){
            setProfiles(profilesHand)
        }
        else{
            fetchProfiles();
        }
    });

    const subscriptionAddIngredient = EventEmitter.addListener('ingredientAdded', async () => {
        fetchAvailableIngredient();
    });

    const subscriptionDeleteIngredient = EventEmitter.addListener('ingredientDeleted', async () => {
        if (ingredientList.length == 1){
            setIngredientList(ingredientListHand)
        }
        else{
            fetchAvailableIngredient();
        }
    });

    useEffect(() => {
        //AsyncStorage.clear()
        fetchProfiles();
        if(profiles.length == 0){
            setProfiles([{name: "None", avatar: "plus_small.png", isActive: "none"}])
        }
        fetchAvailableIngredient();
    }, []);

    const [cpt, setCpt] = useState(0);
    const decreaseCounter = () => {
        if (cpt > 0) {
            setCpt(cpt - 1);
        }
        else {
            setCpt(ingredientList.length - 1);
        }
    };
    const increaseCounter = () => {
        if (cpt < ingredientList.length - 1) {
            setCpt(cpt + 1);
        }
        else {
            setCpt(0);
        }
    };

    const styles = StyleSheet.create({
        container: {
            width: "100%",
            flex: 1,
            backgroundColor: '#3F3C42',
            alignItems: 'center',
            justifyContent: 'center',
        },
        linearGradient: {
            width: "100%",
            flex: 1,
            padding: "2%",
            paddingTop: 0,
        },
        separator: {
            marginTop: "6%"
        },
        
        filterBar: {
            flexDirection: "row",
            width: "85%",
            paddingTop: "3%",
            paddingBottom: "2%",
            alignItems: "flex-end",
            justifyContent: "center",
        },
        filters: {
            fontSize: 20,
            color: colors.cardElementBorder,
            flex: 1,
        },
        nbSelected: {
            fontSize: 11,
            color: colors.cardDetail,
            textAlign: "right",
        },
      
        profilesSelection: {
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 20,
            backgroundColor: colors.cardBackground,
            marginHorizontal: "3%",
            paddingBottom: "3%",
            borderWidth: 1,
            borderColor: colors.blocBorder,
        },
      
        welcome: {
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 20,
            backgroundColor: colors.cardBackground,
            paddingVertical: "3%",
            paddingHorizontal: "7%",
            marginHorizontal: "3%",
        },
        text: {
            fontSize: 20,
            color: colors.welcomeText,
        },
        name: {
            fontSize: 20,
            fontWeight: "bold",
            color: colors.welcomeName,
        },
      
        ingredientSelection: {
            width: "90%",
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 20,
            backgroundColor: colors.carrouselBackground,
            borderWidth: 2,
            borderColor: colors.carrouselText,
            padding: "2%"
        }
    });

    const nbActiveProfiles = () => {
        let cpt = 0
        profiles.forEach((val) => {
            if(val.isActive == "flex"){
                cpt += 1
            }
        })
        return cpt
    }

    return (
        <SafeAreaProvider style={{flex: 1}}>
            <ScrollView>
                <LinearGradient colors={[colors.primary, colors.primaryComplement]} style={styles.linearGradient}>
                    <View style={styles.separator}/>
                    <View style={styles.welcome}>
                        <View style={{flexDirection: "column", alignItems: "flex-start", justifyContent: "center", width: "100%"}}>
                            <View style={{flexDirection: "row"}}>
                                <Text style={styles.text}>Welcome </Text>
                                <Text style={styles.name}>Louison</Text>
                                <Text style={styles.text}>,</Text>
                            </View>
                            <Text style={styles.text}>Glad to see you again!</Text>
                        </View>
                    </View>
                    <View style={styles.separator}/>
                    <View style={styles.profilesSelection}>
                        <View style={styles.filterBar}>
                            <Text style={styles.filters}>Profiles</Text>
                            <Text style={styles.nbSelected}>{nbActiveProfiles()} selected</Text>
                        </View>
                        <View style={{marginTop: "3%"}}/>
                        <ProfileSelection listProfile={profiles} disableSelection={true}/>
                        <View style={{marginTop: "4%"}}/>
                        <ValidateButton title="Change Active Filters" image="update.png" colour={colors.buttonDetail} backColour={colors.buttonBackground} todo={() => navigation.navigate('FiltersSelection')}/>
                        <View style={{marginTop: "3%"}}/>
                        <ValidateButton title="Modify Profiles" image="parameter.png" colour={colors.buttonDetail} backColour={colors.buttonBackground} todo={() => navigation.navigate('Profiles')}/>
                    </View>
                    <View style={styles.separator}/>
                    <View style={styles.profilesSelection}>
                        <View style={styles.filterBar}>
                            <Text style={styles.filters}>Cooking</Text>
                        </View>
                        <View style={{marginTop: "3%"}}/>
                        <View style={styles.ingredientSelection}>
                            <Text style={{fontSize: 15, color: colors.carrouselText}}>Selected Ingredient</Text>
                            <View style={{flexDirection: "row", padding: "4%", justifyContent: "center", alignItems: "center", marginLeft: "8%"}}>
                                <Pressable onPress={decreaseCounter}>
                                    <Image source={bracketLeft} style={{width: 40, height: 40, resizeMode: "contain"}} tintColor={colors.carrouselText}/>
                                </Pressable>
                                <FoodElementText title={ingredientList[cpt].name} mainColour={colors.carrouselBackground} secondaryColour={colors.cardDetail}/>
                                <Pressable onPress={increaseCounter}>
                                    <Image source={bracketRight} style={{width: 40, height: 40, resizeMode: "contain"}} tintColor={colors.carrouselText} />
                                </Pressable>
                            </View>
                        </View>
                        <View style={{marginTop: "4%"}}/>
                        <ValidateButton title="Change Selected Ingredients" image="cook.png" colour={colors.buttonDetail} backColour={colors.buttonBackground} todo={ () => navigation.navigate("IngredientSelection")}/>
                        <View style={{marginTop: "3%"}}/>
                        <ValidateButton title="Search Recipes" image="search.png" colour={colors.buttonDetail} backColour={colors.buttonBackground} todo={ () => navigation.navigate("RecipeSuggestion")}/>
                    </View>
                    <View style={{marginBottom: "20%"}}/>
                </LinearGradient>
            </ScrollView>
        </SafeAreaProvider>
    );
}
