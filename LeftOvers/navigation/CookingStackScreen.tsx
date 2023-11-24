import React, { useContext } from 'react'
import { StyleSheet } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import IngredientSelection from '../screens/IngredientSelection';
import { HeaderTitle } from './Utils';
import ThemeContext from '../theme/ThemeContext';

const CookingStack = createNativeStackNavigator()

export default function CookingStackScreen() {
    const {theme, toggleTheme} = useContext(ThemeContext);
    
    return (
        <CookingStack.Navigator>
            <CookingStack.Screen
                name='IngredientSelection'
                component={IngredientSelection}
                options={{
                    headerStyle: {backgroundColor: theme === 'light' ? '#F2F0E4' : '#3F3C42'},
                    headerTitle: () => (
                        <HeaderTitle title='Profile Modification'/>
                    )
                }}
            />
        </CookingStack.Navigator>
    )
}

const styles = StyleSheet.create({
    headerBarContainer: {
        backgroundColor: '#F2F0E4',
    },
})