import React from 'react'
import { StyleSheet } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import IngredientSelection from '../screens/IngredientSelection';
import { HeaderTitle } from './Utils';

const CookingStack = createNativeStackNavigator()

export default function CookingStackScreen() {
  return (
      <CookingStack.Navigator>
          <CookingStack.Screen
              name='IngredientSelection'
              component={IngredientSelection}
              options={{
                  headerStyle: styles.headerBarContainer,
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