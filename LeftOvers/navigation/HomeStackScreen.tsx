import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomePage from '../screens/HomePage';
import Profiles from '../screens/Profiles';
import appLogo from '../assets/images/icon.png';

const HomeStack = createNativeStackNavigator()

export default function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen 
        name="Home" 
        component={HomePage}
        options={{
          headerStyle: styles.headerBarContainer,
          headerLeft: () => (
            <View style={styles.headerAppIconContainer}>
              <Image 
                source={appLogo}
                style={styles.headerAppIcon}/>
            </View>
          ),
          headerTitle: () => (
            <Text style={styles.headerTitle}>
              LeftOvers
            </Text>
          ),
          headerRight: () => (
            <Image 
              source={appLogo}
              style={styles.headerAppIcon}/>
          ),
          headerTitleAlign: 'center'
        }} 
      />
      <HomeStack.Screen
        name='Profiles'
        component={Profiles}
      />
    </HomeStack.Navigator>
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