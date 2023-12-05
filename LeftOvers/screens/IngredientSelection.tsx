import React, { useEffect, useState, useContext } from 'react';
import { View, StyleSheet, Text, Image, Pressable, ActivityIndicator, FlatList, useWindowDimensions } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Searchbar } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';

import FoodElementText from '../components/FoodElementText';
import Ingredient from '../Models/Ingredient';
import IngredientService from '../Services/Ingredients/IngredientsServices';
import ColorContext from '../theme/ColorContext';
import ValidateButton from '../components/ValidateButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import EventEmitter from './EventEmitter';

import plus from '../assets/images/plus.png';
import moins from '../assets/images/minus.png';

export default function IngredientSelection(props) {
  const colors = useContext(ColorContext).colors

  const alphabetArray: Array<string> = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  const [isLoading, setIsLoading] = useState(true);
  const [response, setResponse] = useState<Ingredient[] | undefined>(undefined);
  const [selectedIngredients, setSelectedIngredients] = useState<Ingredient[]>([]);
  const ingredientService = new IngredientService();
  const [availableSize, setAvailableSize] = useState(0);
  const [listVisibility, setListVisibility] = useState("flex");
  const [availableVisibility, setAvailableVisibility] = useState("none");
  const [searchQuery, setSearchQuery] = useState('');

  const filterIngredients = async (query) => {
    try {
      setIsLoading(true);
      if (query === '') {
        loadIngredients();
      } else {
        const filtered = await ingredientService.getfilteredIngredient(query);
        setResponse(filtered);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    filterIngredients(query);
  };

const loadIngredients = async () => {
    try {
      const ingredients = await ingredientService.getAllIngredient();
      setResponse(ingredients);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadIngredients();
    fetchAvailableIngredient();
    ChangeAvailableSize(true)
  }, []);

  const AvailableItem = ({ value }: { value: Ingredient }) => (
    <>
      <View style={styles.horizontalAlignment}>
        <Pressable onPress={() => SelectIngredient(value)}>
          <FoodElementText title={value.name}/>
        </Pressable>
        <Pressable onPress={() => SelectIngredient(value)}>
          <Image source={plus} style={{ width: 20, height: 20, tintColor: colors.cardDetail }} />
        </Pressable>
      </View>
      <View style={{ height: 20 }}></View>
    </>
  );

  const ChooseItem = ({ value }: { value: Ingredient }) => (
    <>
      <View style={styles.horizontalAlignment}>
        <Pressable onPress={() => RemoveIngredient(value.id)}>
          <FoodElementText title={value.name} />
        </Pressable>
        <Pressable onPress={() => RemoveIngredient(value.id)}>
          <Image source={moins} style={{ width: 20, height: 20, tintColor: colors.cardDetail }} />
        </Pressable>
      </View>
      <View style={{ height: 20 }}></View>
    </>
  );

  const handleGetAvailableIngredient = async () => {
    try {
        const existingAvailableIngredient = await AsyncStorage.getItem('ingredient');
        return JSON.parse(existingAvailableIngredient) || [];
    } catch (error) {
        console.log(error);
        return [];
    }
}

const fetchAvailableIngredient = async () => {
    const existingAvailableIngredient = await handleGetAvailableIngredient();
    if (existingAvailableIngredient.length != 0){
        setSelectedIngredients(existingAvailableIngredient);
    }
    else{
        setSelectedIngredients([{value: "None"}])
    }
};

  const SelectIngredient = async (newIngredient: Ingredient) => {
    try{
      const exists = selectedIngredients.find((ingredient) => ingredient.id === newIngredient.id);
      if (!exists) {
        let existingAvailableIngredient = await AsyncStorage.getItem('ingredient');
        existingAvailableIngredient = existingAvailableIngredient ? JSON.parse(existingAvailableIngredient) : [];
        const updatedAvailableIngredient = [...existingAvailableIngredient, newIngredient];
        await AsyncStorage.setItem('ingredient', JSON.stringify(updatedAvailableIngredient));
        EventEmitter.emit('ingredientAdded');
        console.log('Ingredient Added:', newIngredient);
        ChangeAvailableSize(false)
      }
    }
    catch(error){
      console.log("Error occured during the addition of Ingredient:", error)
    }
  };

  const RemoveIngredient = async (idIngredient: number) => {
    try{
      const updatedIngredients = selectedIngredients.filter((ingredient) => ingredient.id !== idIngredient);
      await AsyncStorage.setItem('ingredient', JSON.stringify(updatedIngredients));
      EventEmitter.emit('ingredientDeleted');
      fetchAvailableIngredient();
      setSelectedIngredients(updatedIngredients);
      ChangeAvailableSize(true)
    }
    catch (error){
      console.log("Error occured during the suppression of Ingredient:", error)
    }
  };

  const subscriptionAddIngredient = EventEmitter.addListener('ingredientAdded', async () => {
    fetchAvailableIngredient();
  });
  const subscriptionDeleteIngredient = EventEmitter.addListener('ingredientDeleted', async () => {
    if (selectedIngredients.length == 1){
        setSelectedIngredients([{title: "None"}])
    }
    else{
        fetchAvailableIngredient();
    }
  });

  const ChangeAvailableSize = (remove: boolean) => {
    if(remove){
        if (selectedIngredients.length == 1){
          setAvailableSize(0)
        }
        else if (selectedIngredients.length == 2){
          setAvailableSize(90)
        }
        else if (selectedIngredients.length == 3){
          setAvailableSize(180)
        }
        else if (selectedIngredients.length == 4){
          setAvailableSize(260)
        }
        else{
          setAvailableSize(280)
        }
    }
    else{
        if (selectedIngredients.length == 0){
          setAvailableSize(90)
        }
        else if (selectedIngredients.length == 1){
          if(selectedIngredients[0].value == "None"){
            setAvailableSize(90)
          }
          else{
            setAvailableSize(180)
          }
        }
        else if (selectedIngredients.length == 2){
          setAvailableSize(260)
        }
        else{
          setAvailableSize(280)
        }
    }
  }

  const handleLetterPress = async (letter: string) => {
    try {
      const ingredientsByLetter = await ingredientService.getIngredientByLetter(letter);
      setResponse(ingredientsByLetter);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const changeListVisibility = () => {
    if(listVisibility == "none"){
      setListVisibility("flex")
    }
    else{
      setListVisibility("none")
    }
  };

  const changeAvailableVisibility = () => {
    if(availableVisibility == "none"){
      setAvailableVisibility("flex")
    }
    else{
      setAvailableVisibility("none")
    }
  };

  const styles = StyleSheet.create({
    linearGradient: {
          width: "100%",
          flex: 1,
          padding: "3%",
          paddingTop: 0,
          alignItems: "center",
          justifyContent: "flex-start",
    },

    element: {
      width: "100%",
      backgroundColor: colors.cardBackground,
      borderRadius: 30,
      borderWidth: 1,
      borderColor: colors.blocBorder,
    },
    horizontalAlignment: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      marginTop: "3%",
    }
  });

  return (
    <SafeAreaProvider style={{flex: 1}}>
            <LinearGradient colors={[colors.primary, colors.primaryComplement]} style={[styles.linearGradient, {minHeight: useWindowDimensions().height}]}>
                <View style={{marginTop: "6%"}}/>
                <View style={styles.element}>
                  <View style={{justifyContent: "center"}}>
                    <Pressable onPress={changeListVisibility} style={{alignItems: "center"}}>
                      <Image source={require("../assets/images/arrow.png")} style={{tintColor: colors.cardDetail}}/>
                    </Pressable>
                  </View>
                  <View style={{display: listVisibility}}>
                    <View style={[styles.horizontalAlignment, { margin: "2%" }]}>
                      {alphabetArray.map((source, index) => (
                        <Pressable key={index} onPress={() => handleLetterPress(source)}>
                          <Text style={{ color: colors.letterFilter }}>{source}</Text>
                        </Pressable>
                      ))}
                    </View>
                    <View>
                          <Searchbar
                              placeholder="Search"
                              onChangeText={handleSearch}
                              value={searchQuery}
                              iconColor={colors.cardDetail}
                              inputStyle={{color: colors.cardDetail}}
                              rippleColor={colors.letterFilter}
                              style={{margin: "3%",
                                      backgroundColor: colors.cardBackground,
                                      borderWidth : 1,
                                      borderColor: colors.cardElementBorder,
                                      borderRadius: 15,
                              }}/>
                    </View>
                    <View style={{height: 280}}>
                          <FlatList
                              data={response ? response : []}
                              renderItem={({ item }) => (
                                <AvailableItem value={item} />
                              )}
                              keyExtractor={(item, index) => index.toString()}
                              ListEmptyComponent={() => (
                                isLoading ? <ActivityIndicator size="large" /> : <Text>Erreur lors du traitement des données</Text>
                              )}
                            style={{ flex: 1 }}
                          />
                          <View style={{ marginTop: '6%' }}></View>
                    </View>
                  </View>
                </View>
                <View style={{marginTop: "6%"}}/>
                <View style={styles.element}>
                    <Pressable onPress={changeAvailableVisibility}>
                      <View style={[styles.horizontalAlignment, {justifyContent: "flex-start", marginHorizontal: "5%", marginBottom: "4%"}]}>
                        <Text style={{fontSize: 20, color: colors.cardElementBorder, flex: 1}}>Available</Text>
                        <Image source={require("../assets/images/arrow.png")} style={{tintColor: colors.cardDetail}}/>
                      </View>
                    </Pressable>
                    <View style={{height: availableSize, display: availableVisibility}}>
                      <FlatList
                              data={selectedIngredients}
                              renderItem={({ item }) => (
                                <ChooseItem value={item} />
                              )}
                              keyExtractor={(item, index) => index.toString()}
                              style={{ flex: 1 }}
                      />
                      <View style={{ height: 20 }}></View>
                    </View>
                </View>
                <View style={{marginTop: "8%"}}></View>
                <ValidateButton title="Find a recipe" image="validate.png" 
                  colour={colors.buttonMain} 
                  backColour={colors.cardBackground} 
                  todo={() => props.navigation.navigate('RecipeSuggestion', 
                  {ingredients: selectedIngredients })}
                />
                <View style={{marginBottom: "20%"}}></View>
            </LinearGradient>
    </SafeAreaProvider>
  );
}