import React, { useState, useContext, useEffect } from 'react';
import {View, StyleSheet, Text, Image, Pressable, useWindowDimensions, ScrollView} from 'react-native';
import {SafeAreaProvider } from 'react-native-safe-area-context';
import {Modal, Portal, PaperProvider} from 'react-native-paper';
import {LinearGradient} from 'expo-linear-gradient';
import RecipeElement from '../components/RecipeElement';
import SelectedIngredient from '../components/SelectedIngredient';
import FoodElementTextSimple from '../components/FoodElementTextSimple';
import CustomButton from '../components/CustomButton';
import ColorContext from '../theme/ColorContext';
import ParameterTopBar from '../components/ParameterTopBar';
import ListWithoutSelect from '../components/ListWithoutSelect';
import ValidateButton from '../components/ValidateButton';
import bracketLeft from '../assets/images/angle_bracket_left.png';
import bracketRight from '../assets/images/angle_bracket_right.png';
import plus from '../assets/images/plus_small.png';
import minus from '../assets/images/minus.png';
import RecipesServices from '../Services/Recipes/RecipesServices';
import Recipes from '../Models/Recipes';


export default function RecipeSuggestion({ route, navigation })  {
  const {colors} = useContext(ColorContext)
  const [visible, setVisible] = React.useState(false);
  const [visibleFilters, setVisibleFilters] = React.useState(false);
  const [visibleIngredients, setVisibleIngredients] = React.useState(true);
  const [minCpt, setMinCpt] = useState(0);
  const [maxCpt, setMaxCpt] = useState(4);
  const [colorIngredients, setColorIngredients] = useState("#59BDCD");
  const [colorFilters, setColorFilters] = useState(colors.cardDetail);
  const [selectedRecipes, setSelectedRecipes] = useState<Recipes[]>([]);
  const recipeService = new RecipesServices();
  const {ingredients} = route.params; 
  const limitedList = ingredients.slice(minCpt, maxCpt);

  let selectedIngredients: string[]; 

  const die = [{value: "Gluten free"}, {value: "Porkless"}, {value: "Gluten free"}, {value: "Porkless"}]
  const all = []

  
  const containerStyle = {
    //minHeight: useWindowDimensions().height/2,
    //width: useWindowDimensions().width,
    height: "75%",
    width: "100%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  };
  
  const handleChildEvent = () => {
    setVisible(!visible)
  }
  const handleChildEventGoFilters = () => {
    setVisibleIngredients(false);
    setVisibleFilters(true);
    setColorFilters(colors.buttonDetail)
    setColorIngredients(colors.cardDetail)
  }
  const handleChildEventGoIngredients = () => {
      setVisibleFilters(false);
      setVisibleIngredients(true);
      setColorFilters(colors.cardDetail)
      setColorIngredients(colors.buttonDetail)
  }

  const decreaseCounter = () => {
    if (minCpt > 0) {
      setMinCpt(minCpt - 4);
      setMaxCpt(maxCpt - 4)
    }
    else{
        setMaxCpt(ingredients.length+ingredients.length%4)
        let cpt=ingredients.length-(ingredients.length%4)
        setMinCpt(cpt)
    }
  }
  const increaseCounter = () => {
    if (maxCpt < ingredients.length) {
      setMinCpt(minCpt + 4);
      setMaxCpt(maxCpt + 4)
    }
    else{
        setMinCpt(0)
        setMaxCpt(4)
    }
  }
  const getIngredientsIds = (ingredients) => {
    selectedIngredients = ingredients.map(ingredient => ingredient.id).join(':');
    return selectedIngredients;
  };

  const loadRecipes = async () => {
    const ids: string[] = getIngredientsIds(ingredients);
    try {
      const recipes: Recipes[] = await recipeService.getRecipeWithIngredients(ids);
      if(recipes[0].id != -1 ){
        setSelectedRecipes(recipes);
      }
    
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    loadRecipes();
  }, []);

  const styles = StyleSheet.create({
    linearGradient: {
        width: "100%",
        flex: 1,
        //padding: "2%",
        paddingTop: 0,
        alignItems: "center",
        justifyContent: "center",
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

    horizontalAlignment: {
      display: 'flex',
      height: "10%",
      width: "100%",
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
    },

    recipes: {
          flexDirection: "row",
          overflow: "scroll",
          alignItems: "flex-start",
          justifyContent: "center",
    },

    noRecipeView: {
      width: "90%",
      padding: "5%",
      borderRadius: 15,
      borderWidth: 1,
      borderColor: colors.blocBorder,
      backgroundColor: colors.buttonBackground,
      alignItems: "center",
      justifyContent: "center",
      height: "40%",
      marginLeft: 12,
    },
    textNoRecipe: {
      color: colors.cardElementBorder,
      fontSize: 20,
      textAlign: "center",
    },
    smallText: {
      color: colors.cardDetail,
      fontSize: 15,
      alignItems: "center",
      justifyContent: "center",
    },
    horizontalAlignmentNoRecipe: {
      width: "100%",
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      flex: 0.9,
    },
  });


  const ingredientElements = limitedList.map((source, index) => (
    <View style={[styles.horizontalAlignment, {marginVertical: "3%"}]} key={index}>
      <FoodElementTextSimple title={source.name}/>
      <Image source={plus} style={{width: 20, resizeMode: "contain", tintColor: colors.cardDetail}}/>
      <Image source={minus} style={{width: 20, resizeMode: "contain", tintColor: colors.cardDetail}}/>
    </View>
  ));

  const goDetails = (recipeId: number) => navigation.navigate('RecipeDetails', { recipeId });

  return (
    <SafeAreaProvider style={{flex: 1}}>
    <PaperProvider>
      <ScrollView>
        <LinearGradient colors={[colors.primary, colors.primaryComplement]} style={[styles.linearGradient, {minHeight: useWindowDimensions().height}]}>
            <View style={{marginTop: "6%"}}/>
            <SelectedIngredient
              ingredientList={ingredients}
              onEvent={handleChildEvent}/>
                  <ScrollView style={{ marginTop: "6%" }} horizontal={true} contentContainerStyle={{ flexDirection: 'row' }}>
                        {Array.isArray(selectedRecipes) && selectedRecipes.length === 0 ? (
                          <View style={styles.noRecipeView}>
                            <Text style={styles.textNoRecipe}>No recipes found with those ingredients:</Text>
                            <ScrollView contentContainerStyle={styles.horizontalAlignmentNoRecipe}>
                                {ingredients.length > 0 && ingredients.map((source, index) => (
                                    <Text key={index} style={styles.smallText}>- {source.name} -</Text>
                                ))}
                            </ScrollView>
                          </View>
                        ) : (
                          selectedRecipes.map((recipe) => (
                            <View style={{ marginRight: 10, marginLeft: 20}} key={recipe.id}> 
                              <RecipeElement
                                key={recipe.id}
                                recipe={recipe}
                                navigateDetails={() => goDetails(Number(recipe.id))}
                              />
                            </View>
                          ))
                        )}
                    </ScrollView>
            <View style={{marginBottom: "20%"}}/>
        </LinearGradient>
      </ScrollView>
      <Portal>
            <Modal visible={visible} onDismiss={handleChildEvent} contentContainerStyle={containerStyle} style={{marginTop: 0, justifyContent: "flex-end"}}>
                <ParameterTopBar onEventFilter={handleChildEventGoFilters} onEventIngredient={handleChildEventGoIngredients} colorFilters={colorFilters} colorIngredients={colorIngredients}/>
                {visibleIngredients &&(
                    <LinearGradient colors={[colors.primary, colors.primaryComplement]} style={[styles.linearGradient, {paddingHorizontal: "3%", justifyContent: "flex-start"}]}>
                        {ingredientElements}
                        <View style={[styles.horizontalAlignment, {marginTop: "3%"}]}>
                             <Pressable onPress={decreaseCounter}>
                                  <Image source={bracketLeft} style={{width: 30, height: "100%", resizeMode: "contain", tintColor: colors.cardDetail}}/>
                             </Pressable>
                             <CustomButton title="Save"></CustomButton>
                             <Pressable onPress={increaseCounter}>
                                  <Image source={bracketRight} style={{width: 30, height: "100%", resizeMode: "contain", tintColor: colors.cardDetail}}/>
                             </Pressable>
                        </View>
                    </LinearGradient>

                )}
                {visibleFilters &&(
                    <ScrollView>
                    <LinearGradient colors={[colors.primary, colors.primaryComplement]} style={[styles.linearGradient, {paddingHorizontal: "3%"}]}>
                        <View style={{marginTop: "10%"}}/>
                        <View style={styles.background}>
                            <View style={styles.filterBar}>
                                <Text style={styles.filters}>Additional Filters</Text>
                                <Text style={styles.nbSelected}>{die.length} selected</Text>
                            </View>
                            <ListWithoutSelect title="Diets" content={die}></ListWithoutSelect>
                            <View style={{marginTop: "3%"}}/>
                            <ListWithoutSelect title="Allergies" content={all}></ListWithoutSelect>
                            <View style={{marginTop: "3%"}}/>
                            <ValidateButton title="Change Filters" image="update.png" colour={colors.buttonDetail} backColour={colors.buttonBackground} todo={() => navigation.navigate("FiltersSelection")}></ValidateButton>
                        </View>
                        <View style={{marginTop: "6%"}}/>
                        <View>
                            <CustomButton title="Save"></CustomButton>
                        </View>
                        <View style={{marginTop: "43%"}}/>
                    </LinearGradient>
                    </ScrollView>
                )}
            </Modal>
      </Portal>
    </PaperProvider>
    </SafeAreaProvider>
  );
}