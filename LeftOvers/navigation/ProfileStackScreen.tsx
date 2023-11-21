import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Profiles from '../screens/Profiles';

const ProfilesStack = createNativeStackNavigator()

export default function ProfilesStackScreen() {
  return (
    <ProfilesStack.Navigator>
      <ProfilesStack.Screen
        name='Profiles'
        component={Profiles}
      />
    </ProfilesStack.Navigator>
  )
}

const styles = StyleSheet.create({
    headerBarContainer: {
        flexDirection: 'row',
        width: "100%",
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F2F0E4',
        padding: 5,
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: "bold",
        color: '#3F3C42',
        textAlign: "center",
        textAlignVertical: 'center',
        flex: 0.8,
    },
    headerAppIcon: {
        width: 35,
        height: 35
    },
    headerAppIconContainer: {
        
    }
})