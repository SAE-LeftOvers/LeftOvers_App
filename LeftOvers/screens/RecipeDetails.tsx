import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, ScrollView, useWindowDimensions} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import RecipeElementReduce from '../components/RecipeElementReduce';
import AllergiesTab from '../components/ListWithoutSelect';
import RecipesService from '../Services/Recipes/RecipesServices';
import Recipes from '../Models/Recipes';
import { LinearGradient } from 'expo-linear-gradient';
import ListWithoutSelect from '../components/ListWithoutSelect';


export default function RecipeDetails(props) {

    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();
    const [response, setResponse] = useState<Recipes | undefined>(undefined);
    const recipesService = new RecipesService();

    const loadRecipe = async () => {
      try {
        const recipe = await recipesService.getRecipeById(props.id);
        setResponse(recipe);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    useEffect(() => {
      loadRecipe();
    }, []);

    function convertToHoursMinutes(totalMinutes: number): string {
      const hours = Math.floor(totalMinutes / 60);
      const minutes = totalMinutes % 60;
  
      const hoursString = hours > 0 ? `${hours} h` : '';
      const minutesString = minutes > 0 ? ` ${minutes} min` : '';
  
      return `${hoursString}${minutesString}`.trim();
  }

    return (
      
        <SafeAreaProvider>
          <ScrollView>
            <LinearGradient colors={['#2680AA', '#59BDCD']} style={[styles.linearGradient, {minHeight: useWindowDimensions().height}]}>
                <View style={{marginTop: "6%"}}>
                    <RecipeElementReduce 
                title={response.name}
                number={response.id}
                duration={convertToHoursMinutes(response.time_to_cook)} image={''}/>
                </View>
                <View style={styles.separator}/>
                <View style={styles.background}>
                    <View style={styles.filterBar}>
                        <Text style={styles.filters}>Preparation</Text>
                    </View>
                    <ListWithoutSelect title="Ingredients" content={response.ingredients.map(ingredient => `- ${ingredient.name}`)}></ListWithoutSelect>
                    <View style={{marginTop: "3%"}}/>
                </View>
                <View style={styles.separator}/>
                <View style={styles.background}>
                    <View style={styles.filterBar}>
                        <Text style={styles.filters}>Cooking</Text>
                    </View>
                    <ListWithoutSelect title="Steps" content={response.steps.map((step, index) => `${index + 1} - ${step}`)}></ListWithoutSelect>
                    <View style={{marginTop: "3%"}}/>
                </View>
                <View style={{marginBottom: "20%"}}/>
            </LinearGradient>
          </ScrollView>
        </SafeAreaProvider>
      );
    }
    
    const styles = StyleSheet.create({
      linearGradient: {
            width: "100%",
            flex: 1,
            alignItems: "center",
            justifyContent: "flex-start"
      },
      separator: {
            marginTop: "6%",
      },

      background: {
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 20,
              backgroundColor: '#F2F0E4',
              padding: "3%",
              marginHorizontal: "3%",
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
                color: '#ACA279',
                flex: 1,
      },
      nbSelected: {
                fontSize: 11,
                color: "#3F3C42",
                textAlign: "right",
      },
    });
    