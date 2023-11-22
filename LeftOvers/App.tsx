import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BlurView } from 'expo-blur';

import HomeStackScreen from './navigation/HomeStackScreen';
import ProfilesStackScreen from './navigation/ProfileStackScreen';
import CookingStackScreen from './navigation/CookingStackScreen';
import BottomBar from './navigation/BottomBar';

import HomeIcon from './assets/images/home.png';
import ProfileIcon from './assets/images/person_icon.png';
import CookingIcon from './assets/images/cook.png';


const Tab = createBottomTabNavigator();

export default function App() {
    
    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName='Home' tabBar={ (props) => <BottomBar {...props}/> }>
                <Tab.Screen name='Profile' component={ProfilesStackScreen} options={{ headerShown: false }} />
                <Tab.Screen name='Home' component={HomeStackScreen} options={{ headerShown: false }}/>
                <Tab.Screen name='Cooking' component={CookingStackScreen} options={{ headerShown: false }}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}