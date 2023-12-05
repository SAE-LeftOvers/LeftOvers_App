import React, { useContext } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import IngredientSelection from '../screens/IngredientSelection';
import { HeaderTitle } from './Utils';
import ThemeContext from '../theme/ThemeContext';
import RecipeSuggestion from '../screens/RecipeSuggestion';
import RecipeDetails from '../screens/RecipeDetails';

const CookingStack = createNativeStackNavigator()

export default function CookingStackScreen() {
    const theme = useContext(ThemeContext).theme;
    
    return (
        <CookingStack.Navigator>
            <CookingStack.Screen
                name='IngredientSelection'
                component={IngredientSelection}
                options={{
                    headerStyle: {backgroundColor: theme === 'light' ? '#F2F0E4' : '#3F3C42'},
                    headerTitle: () => (
                        <HeaderTitle title='Ingredient Selection'/>
                    )
                }}
            />
            <CookingStack.Screen
                name='RecipeSuggestion'
                component={RecipeSuggestion}
                options={{
                    headerStyle: {backgroundColor: theme === 'light' ? '#F2F0E4' : '#3F3C42'},
                    headerTitle: () => (
                        <HeaderTitle title='Recipe Suggestion'/>
                    )
                }}
            />
            <CookingStack.Screen
                name='RecipeDetails'
                component={RecipeDetails}
                options={{
                    headerStyle: {backgroundColor: theme === 'light' ? '#F2F0E4' : '#3F3C42'},
                    headerTitle: () => (
                        <HeaderTitle title='Recipe Details'/>
                    )
                }}
            />
        </CookingStack.Navigator>
    )
}