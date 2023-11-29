import React, { useEffect, useState, useContext } from 'react';
import { View, StyleSheet, Text, Image, Pressable, ActivityIndicator, FlatList, ScrollView, useWindowDimensions } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Searchbar } from 'react-native-paper';
import FoodElementText from '../components/FoodElementText';
import CustomButton from '../components/CustomButton';

import plus from '../assets/images/plus.png';
import moins from '../assets/images/minus.png';
import Ingredient from '../Models/Ingredient';
import IngredientService from '../Services/Ingredients/IngredientsServices';
import { LinearGradient } from 'expo-linear-gradient';
import ColorContext from '../theme/ColorContext';

export default function IngredientSelection(props) {
  const alphabetArray: Array<string> = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const [response, setResponse] = useState<Ingredient[] | undefined>(undefined);
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const ingredientService = new IngredientService();
  const {colors} = useContext(ColorContext);

  const [searchQuery, setSearchQuery] = useState('');

  const filterIngredients = async (query) => {
    try {
      setIsLoading(true);
      if (query === '') {
        // Si le query (prompt) est vide, charger tous les ingrédients
        loadIngredients();
      } else {
        const filtered = await ingredientService.getfilteredIngredient(query);
        setResponse(filtered);
      }
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  // Appelée à chaque changement de la recherche
  const handleSearch = (query) => {
    setSearchQuery(query);
    filterIngredients(query);
  };

const loadIngredients = async () => {
    try {
      const ingredients = await ingredientService.getAllIngredient();
      setResponse(ingredients);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadIngredients();
  }, []);

  const AvailableItem = ({ value }: { value: Ingredient }) => (
    <>
      <View style={styles.horizontalAlignment}>
        <FoodElementText title={value.name} />
        <Pressable onPress={() => SelectIngredient(value)}>
          <Image source={plus} style={{ width: 20, height: 20 }} />
        </Pressable>
      </View>
      <View style={{ height: 30 }}></View>
    </>
  );

  const ChooseItem = ({ value }: { value: Ingredient }) => (
    <>
      <View style={styles.horizontalAlignment}>
        <FoodElementText title={value.name} />
        <Pressable onPress={() => RemoveIngredient(value.id)}>
          <Image source={moins} style={{ width: 20, height: 20 }} />
        </Pressable>
      </View>
      <View style={{ height: 30 }}></View>
    </>
  );

  const SelectIngredient = (newIngredient: Ingredient) => {
    const exists = selectedIngredients.find((ingredient) => ingredient.id === newIngredient.id);

    if (!exists) {
      setSelectedIngredients([...selectedIngredients, newIngredient]);
    }
  };

  const RemoveIngredient = (idIngredient: number) => {
    const updatedIngredients = selectedIngredients.filter((ingredient) => ingredient.id !== idIngredient);
    setSelectedIngredients(updatedIngredients);
  };

  const handleLetterPress = async (letter: string) => {
    try {
      const ingredientsByLetter = await ingredientService.getIngredientByLetter(letter);
      setResponse(ingredientsByLetter);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
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
      backgroundColor:'#F2F0E4',
      borderRadius: 30,
      borderWidth: 1,
      borderColor: colors.blocBorder,
    },
    horizontalAlignment: {
      width: "100%",
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      marginTop: "3%",
    }
  });

  return (
    <SafeAreaProvider style={{flex: 1}}>
        <ScrollView>
            <LinearGradient colors={['#2680AA', '#59BDCD']} style={[styles.linearGradient, {minHeight: useWindowDimensions().height}]}>
                <View style={{marginTop: "6%"}}/>
                <View style={styles.element}>
                  <View style={[styles.horizontalAlignment, { margin: 10 }]}>
                    {alphabetArray.map((source, index) => (
                      <Pressable key={index} onPress={() => handleLetterPress(source)}>
                      <Text style={{ color: "blue" }}>{source}</Text>
                      </Pressable>
                    ))}
                  </View>
                    <View>
                        <Searchbar
                            placeholder="Search"
                            onChangeText={handleSearch}
                            value={searchQuery}
                            style={{margin: "3%",
                                    backgroundColor: '#F2F0E4',
                                    borderWidth : 1,
                                    borderColor: "#ACA279",
                                    borderRadius: 15,
                            }}/>
                    </View>
                    <View style={{flex: 1, maxHeight: 300}}>
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
                <View style={{marginTop: "6%"}}/>
                <View style={styles.element}>
                    <View style={[styles.horizontalAlignment, {justifyContent: "flex-start", marginLeft: "5%"}]}>
                      <Text style={{fontSize: 20, color: '#ACA279'}}>Available</Text>
                    </View>
                    <View style={{flex: 1, maxHeight: 300}}>
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
                <CustomButton title="Find a recipe"/>
                <View style={{marginBottom: "20%"}}></View>
            </LinearGradient>
        </ScrollView>
    </SafeAreaProvider>
  );
}