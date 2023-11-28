import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import TopBar from '../components/TopBar';
import RecipeElementReduce from '../components/RecipeElementReduce';
import AllergiesTab from '../components/ListWithoutSelect';
import RecipesService from '../Services/Recipes/RecipesServices';
import Recipes from '../Models/Recipes';


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
          {response && (
  <>
   <TopBar title="Recipe Detail"/>
          <View style={styles.page}>
            <RecipeElementReduce 
                title={response.name} 
                number={response.id}
                duree={convertToHoursMinutes(response.time_to_cook)}/>

            <View style={{height: 20}}></View>

            <View style={styles.element}>
              <View style={[styles.horizontalAlignement, {justifyContent: "flex-start", marginLeft: 10}]}>
                    <Text style={{fontSize: 20, color: '#ACA279'}}>Preparation</Text>
              </View>
              <View style={{margin: 20}}>
              <AllergiesTab title="Ingredient" content={response.ingredients.map(ingredient => `- ${ingredient.name}`)}></AllergiesTab>

                <View style={{height: 5}}></View>
                {/* <AllergiesTab title="Ustensils" content={null}></AllergiesTab>*/}
              </View>
            </View >

            <View style={{height: 20}}></View>
                
            <View style={styles.element}>
              <View style={[styles.horizontalAlignement, {justifyContent: "flex-start", marginLeft: 10}]}>
                  <Text style={{fontSize: 20, color: '#ACA279'}}>Cooking</Text>
              </View>
              <View style={{margin: 20}}>
              <AllergiesTab title="Steps" content={response.steps.map((step, index) => `${index + 1} - ${step}`)}></AllergiesTab>

              </View>
            </View>
            
          </View>
        </>
      )}
          
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
        backgroundColor:'#F2F0E4', 
        borderRadius: 30,
      },
      horizontalAlignement: {
        display: 'flex',
        height: 30,
        width: 350,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 10,
      }
    });
    