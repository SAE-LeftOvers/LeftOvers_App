import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, Image, Pressable, ActivityIndicator, FlatList } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Searchbar } from 'react-native-paper';

import FoodElementText from '../components/FoodElementText';
import CustomButton from '../components/CustomButton';
import Ingredient from '../Models/Ingredient';
import IngredientService from '../Services/Ingredients/IngredientsServices';

import plus from '../assets/images/plus.png';
import moins from '../assets/images/minus.png';

export default function IngredientSelection(props) {
  const alphabetArray: Array<string> = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const [response, setResponse] = useState<Ingredient[] | undefined>(undefined);
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const ingredientService = new IngredientService();

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
      <View style={styles.horizontalAlignement}>
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
      <View style={styles.horizontalAlignement}>
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

  return (
    <SafeAreaProvider>
      <View style={styles.page}>
        <View style={styles.element}>

          <View style={[styles.horizontalAlignement, { margin: 10 }]}>
            {alphabetArray.map((source, index) => (
              <Pressable key={index} onPress={() => handleLetterPress(source)}>
                <Text style={{ color: "blue" }}>{source}</Text>
              </Pressable>
            ))}
          </View>

          <View>
            <Searchbar
              placeholder="Rechercher"
              onChangeText={handleSearch}
              value={searchQuery}
              style={{
                margin: 10,
                backgroundColor: '#F2F0E4',
                borderWidth: 1,
                borderColor: "#ACA279",
                borderRadius: 15,
                height: 50,
              }} />
          </View>
          
          <View style={{ alignItems: 'center', height: 300}}>
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
          </View>
          <View style={{ height: 20 }}></View>
        </View>

        <View style={[styles.element, { marginTop: 40 }]}>
          <View style={[styles.horizontalAlignement, { justifyContent: "flex-start", marginLeft: 10 }]}>
            <Text style={{ fontSize: 20, color: '#ACA279' }}>Selected</Text>
          </View>
          <View style={{ height: 5 }}></View>

          <View style={{ alignItems: 'center', maxHeight: 200}}>
              <FlatList
                data={selectedIngredients}
                renderItem={({ item }) => (
                  <ChooseItem value={item} />
                )}
                keyExtractor={(item, index) => index.toString()}
                style={{ flex: 1 }}
              />
          </View>

          <View style={{ height: 20 }}></View>
        </View>

        <View style={{ height: 15 }}></View>
        <CustomButton title="Find a recipe" />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#59BDCD',
    alignItems: 'center',
    display: 'flex',
    flexWrap: 'wrap',
    padding: 20,
  },
  element: {
    backgroundColor: '#F2F0E4',
    borderRadius: 30,
  },
  horizontalAlignement: {
    display: 'flex',
    height: 30,
    width: 350,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 15,
  }
});
