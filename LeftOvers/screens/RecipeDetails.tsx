import React, { useEffect, useState, useContext } from 'react';
import { View, StyleSheet, Text, ScrollView, useWindowDimensions} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RecipeElementReduce from '../components/RecipeElementReduce';
import RecipesService from '../Services/Recipes/RecipesServices';
import Recipes from '../Models/Recipes';
import { LinearGradient } from 'expo-linear-gradient';
import ListWithoutSelect from '../components/ListWithoutSelect';
import ColorContext from '../theme/ColorContext';
import Ingredient from '../Models/Ingredient';
import cake from '../assets/images/cake.png';
import Carrot_Cake from '../assets/images/Carrot_Cake.png';
import inconnu from '../assets/images/inconnu.png';
import fish from '../assets/images/fish.png';
import fish_meat from '../assets/images/fish_meat.png';
import vegan from '../assets/images/vegan.png';
import egg  from '../assets/images/egg.png';
import pizza from '../assets/images/pizza.png';
import soupVeggie  from '../assets/images/soupVeggie.png';
import soupFish from '../assets/images/soupfish.png'
import soupMeat from '../assets/images/soupMeat.png'
import meat_with_vegetable from '../assets/images/meat_with_vegetables.png';
import riceVegetable from '../assets/images/rice_vegetables.png';
import riceMeat from '../assets/images/Meat_and_Rice.png';
import riceFish from '../assets/images/rice_fish.png'; 
import riceEgg from '../assets/images/riceEgg.png';
import brochette from '../assets/images/brochette.png'; 
import pasta from '../assets/images/pasta.png';



export default function RecipeDetails({ route }) {
    const {colors} = useContext(ColorContext);
    
    const [isLoading, setIsLoading] = useState(true)

    const ingredientList = [new Ingredient(3, "Carrot"), new Ingredient(4, "Potato"), new Ingredient(5, "Peach")]

    const [response, setResponse] = useState<Recipes>(new Recipes (120, "Carrot", "Delicious", 90, ["Fork", "Fish", "Knife"], ingredientList))
    const recipesService = new RecipesService();

    const { recipeId } = route.params; 

    const meatDictionary: string[] =  ["beef", "chicken", "turkey", "steak", "rabbit", "duck"]
  const porkDictionary: string[] = ["pork", "lardon", "bacon", "ham"]
  const fishDictionary: string[] = ["tuna", "whiting", "mullet", "sardine", "mackerel", "salmon", "monkfish", "conger", "bass", "cod", "hake"]
  const vegetablesDictionary: string[] = ["vegan", "vegetarian", "lentil", "artichoke", "aubergine", "beet", "chard", "broccoli", "carrot", "celery", "cabbage", "cauliflower", "zucchini", "spinach", "fennel", "curly", "bean", "lettuce", "apple", "corn", "onion", "parsnips", "leek", "pepper", "potato", "pumpkin", "radish", "scarole", "tomato"]
  const riceDictionary: string[] =  ["ric", "quinoa"]
  const eggDictionary: string[] = ["egg", "omelette"];
  const soupDictionary: string[] = ["soup"];
  const pizzaDictionary: string[] = ["pizza"];
  const dessertDictionary: string[] = ['cake', 'cupcake', 'muffin', 'cookie', 'brownie', 'pie', 'tart', 'macaron', 'doughnut', 'eclair', 'pancake', 'waffle', 'crepe', 'pudding', 'gelato', 'sorbet', 'ice cream', 'cheesecake', 'sugar'];
  const pastaDictionary: string[] = [
    'pasta',
    'spaghetti',
    'penne',
    'fettuccine',
    'macaroni',
    'rigatoni',
    'farfalle',
    'linguine',
    'lasagne',
    'ravioli',
    'tortellini',
    'gnocchi',
    'spaetzle',
    'noodles',
    'spatzle',
    'spatzen',
  ];

  const imagesDictionary = {
    meat: meatDictionary,
    pork: porkDictionary,
    fish: fishDictionary,
    egg: eggDictionary,
    vegetables: vegetablesDictionary,
    rice: riceDictionary,
    pizza : pizzaDictionary,
    soup : soupDictionary,
    dessert : dessertDictionary,
    pasta : pastaDictionary,
    unknown: [],
  };

  function getCategoryFromList(categories: string[]) {
    const categoryMappings = {
      MeatAndVegetables: ['meat', 'vegetables'],
      FishAndMeat: ['fish', 'meat'],
      dessertDictionary: ['dessert'],
      fruitCake: ['vegetables', 'dessert'],
      riceEgg: ['rice', 'egg'],
      riceMeat: ['rice', 'meat'],
      riceFish: ['rice', 'fish'],
      riceVegetable: ['rice', 'vegetables'],
      soupMeat: ['soup', 'meat'],
      soupVeggie: ['soup', 'vegetables'],
      soupFish: ['soup', 'fish'],
    };

    if(categories.length == 1){
      return categories[0];
    }
  
    console.log("LA LISTE DES CATEGORY : " + categories)
    let bestMatch = { category: '', similarity: 0 };

      for (const [name, categoriesList] of Object.entries(categoryMappings)) {
        const matchingCategories = categories.filter(category => categoriesList.includes(category));
        const similarity = matchingCategories.length;

        if (similarity > bestMatch.similarity) {
          bestMatch = { category: name, similarity };
        }
  }

  return bestMatch.category;
  }

  function getImageForRecipe(recipeName: string) {
    const categories = [];
  
    for (const [category, words] of Object.entries(imagesDictionary)) {
      const matchedWords = words.filter((word) => recipeName.toLowerCase().includes(word));
      if (matchedWords.length > 0) {
        categories.push(category);
      }
    }
  
    const categoryName = getCategoryFromList(categories);
  
    switch (categoryName) {
      case 'meat':
        return brochette;
      case 'pork':
        return brochette;
      case 'fish':
        return fish;
      case 'vegetables':
        return vegan;
      case 'pasta':
        return pasta;
      case 'MeatAndVegetables':
        return meat_with_vegetable;
      case 'FishAndMeat':
        return fish_meat;
      case 'egg':
        return egg;
      case 'dessert':
        return cake;
      case 'fruitCake':
        return Carrot_Cake;
      case 'riceEgg':
        return riceEgg;
      case 'riceMeat':
        return riceMeat;
      case 'riceFish':
        return riceFish;
      case 'riceVegetable':
        return riceVegetable;
      case 'pizza':
        return pizza;
      case 'soupVeggie':
        return soupVeggie;
      case 'soupMeat':
        return soupMeat;
      case 'soupFish':
        return soupFish;
      default:
        return inconnu;
    }
  }

    const loadRecipe = async () => {
      try {
        const recipe = await recipesService.getRecipeById(recipeId);
        setResponse(recipe);
      } catch (error) {
        console.log(error);
      } finally{
        setIsLoading(false)
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
                        imageRecipe={getImageForRecipe(response.name)}
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