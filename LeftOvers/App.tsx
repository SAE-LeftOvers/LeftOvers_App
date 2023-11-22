import React from 'react';
import {StyleSheet, View, Image, Text, Pressable } from 'react-native';
import ProfileModification from './components/ProfileModification';
import ValidateButton from './components/ValidateButton';
import { LinearGradient } from 'expo-linear-gradient';
import RecipeSuggestion from './screens/RecipeSuggestion';
import RecipeDetails from './screens/RecipeDetails';
import IngredientSelection from './screens/IngredientSelection';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BlurView } from 'expo-blur';

import HomeStackScreen from './navigation/HomeStackScreen';
import ProfilesStackScreen from './navigation/ProfileStackScreen';
import CookingStackScreen from './navigation/CookingStackScreen';

import HomeIcon from './assets/images/home.png';
import ProfileIcon from './assets/images/person_icon.png';
import CookingIcon from './assets/images/cook.png';

const Tab = createBottomTabNavigator();

export default function App() {
    // const all = [{value: "Mussels"}, {value: "Skimmed Milk"}, {value: "Nuts"}]
    // const die = [{value: "Dairy free"}, {value: "Gluten free"}, {value: "Porkless"}, {value: "Vegan"}, {value: "Vegetarian"}, {value: "Pescatarian"}]
    // const ingredient = [{value: "Chocolate"}, {value: "Skimmed Milk"}, {value: "Eggs"}, , {value: "Farine"}]
    // const ustensils = [{value: "Bol"}, {value: "Fouet"}, {value: "Casserole"}]
    // const steps = [{value: "Chauffer chocolat"}, 
      //   {value: "1. Casser oeuf"}, 
      //   {value: "2. Melanger la farine, le lait et les oeufs"},
      //   {value: "3. Battre fort"},
      //   {value: "4. Voler la montre de Louison"},
      //   {value: "5. Melanger avec le chocolat"},
      //   {value: "6. Mettre au four"},
    // ]
    
    // function generateList() {
      //   const list = [];
      //   list.push("Meat");
      //   list.push("Meat");
      //   list.push("Meat");
      //   list.push("Meat");
      //   list.push("Teat");
      //   list.push("Meat");
      //   list.push("Meat");
      //   list.push("Meat");
      //   return list;
    // }
    
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName='Home'
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused }) => {
                        let icon;

                        if (route.name === 'Home') {
                            icon = HomeIcon;
                        } else if (route.name === 'Profile') {
                            icon = ProfileIcon;
                        } else if (route.name === 'Cooking') {
                            icon = CookingIcon;
                        }

                        // You can return any component that you like here!
                        return <Image source={icon} style={{width: 35, height: 35}} tintColor={focused ? '#59BDCD' : '#F2F0E4'}/>;
                    },
                    tabBarActiveTintColor: '#59BDCD',
                    tabBarInactiveTintColor: '#F2F0E4',
                    headerShown: false,
                    tabBarStyle: {position: 'absolute', height: 70},
                    tabBarBackground: () => (
                      <BlurView tint="dark" 
                          intensity={50} 
                          style={[
                              StyleSheet.absoluteFill, 
                              {
                                  borderBlockColor: '#F2F0E4', 
                                  borderWidth: 3, 
                                  borderLeftColor: '#F2F0E4', 
                                  borderLeftWidth: 3,
                                  borderRightColor: '#F2F0E4',
                                  borderRightWidth: 3
                              }
                          ]}/>
                    ),
                    tabBarItemStyle: {marginVertical: 5},
                    tabBarLabelStyle: {fontSize: 15}
                })}>
                <Tab.Screen name='Profile' component={ProfilesStackScreen}/>
                <Tab.Screen name='Home' component={HomeStackScreen} />
                <Tab.Screen name='Cooking' component={CookingStackScreen}/>
            </Tab.Navigator>
        </NavigationContainer>
        
        // <IngredientSelection listIngredient={ingredients}></IngredientSelection>
        /*<RecipeSuggestion list={ingredients} diets={die} allergy={all}></RecipeSuggestion>*/
        /*<RecipeDetails ingredient={ingredient} 
        ustensils={ustensils} 
        steps={steps} 
        title="Chocolat Cake" 
        number="63"
        duree="30 minutes"
        ></RecipeDetails>*/
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3F3C42',
        alignItems: 'center',
        justifyContent: 'center',
    },
    linearGradient: {
        //height: 844,
        //width: 390,
        flex: 1,
        padding: 10,
        paddingTop: 0,
        //backgroundColor: "#59BDCD",
        //alignItems: 'center',
        //justifyContent: 'flex-start',
    },
});