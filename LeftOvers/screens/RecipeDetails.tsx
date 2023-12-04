import React, { useEffect, useState, useContext } from 'react';
import { View, StyleSheet, Text, ScrollView, useWindowDimensions} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import RecipeElementReduce from '../components/RecipeElementReduce';
import RecipesService from '../Services/Recipes/RecipesServices';
import Recipes from '../Models/Recipes';
import { LinearGradient } from 'expo-linear-gradient';
import ListWithoutSelect from '../components/ListWithoutSelect';
import ColorContext from '../theme/ColorContext';


export default function RecipeDetails(props) {
    const {colors} = useContext(ColorContext);
    
    const [isLoading, setIsLoading] = useState(true)
    const [response, setResponse] = useState<Recipes>();
    const recipesService = new RecipesService();

    const loadRecipe = async () => {
      try {
        const recipe = await recipesService.getRecipeById(120);
        console.log("Recipe.name: "+recipe.name)
        setResponse(recipe);
        console.log("Response.name: "+response.name)
      } catch (error) {
        console.log(error);
      } finally{
        setIsLoading(false)
      }
    };

    useEffect(() => {
      console.log("Je passe ici (useEffect)")
      loadRecipe();
    }, []);

    loadRecipe()
    console.log("Response.name: " + response.name)

    function convertToHoursMinutes(totalMinutes: number): string {
      const hours = Math.floor(totalMinutes / 60);
      const minutes = totalMinutes % 60;
  
      const hoursString = hours > 0 ? `${hours} h` : '';
      const minutesString = minutes > 0 ? ` ${minutes} min` : '';
  
      return `${hoursString}${minutesString}`.trim();
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
                  backgroundColor: colors.cardBackground,
                  padding: "3%",
                  marginHorizontal: "3%",
                  borderWidth: 1,
                  borderColor: colors.blocBorder,
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
    });

    return (
        <SafeAreaProvider>
          <ScrollView>
            <LinearGradient colors={[colors.primary, colors.primaryComplement]} style={[styles.linearGradient, {minHeight: useWindowDimensions().height}]}>
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