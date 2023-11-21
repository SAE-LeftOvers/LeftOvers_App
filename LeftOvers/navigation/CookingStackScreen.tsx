import React from 'react'
import { StyleSheet } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import IngredientSelection from '../screens/IngredientSelection';

const CookingStack = createNativeStackNavigator()

export default function CookingStackScreen() {
  return (
    <CookingStack.Navigator>
      <CookingStack.Screen
        name='IngredientSelection'
        component={IngredientSelection}
      />
    </CookingStack.Navigator>
  )
}

const styles = StyleSheet.create({
})