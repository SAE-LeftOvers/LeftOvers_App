import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeStackScreen from './navigation/HomeStackScreen';
import ProfilesStackScreen from './navigation/ProfileStackScreen';
import CookingStackScreen from './navigation/CookingStackScreen';
import BottomBar from './navigation/BottomBar';
import { ThemeProvider } from './theme/ThemeContext';


const Tab = createBottomTabNavigator();

export default function App() {
    
    return (
        <ThemeProvider>
            <NavigationContainer>
                <Tab.Navigator initialRouteName='Home' tabBar={ (props) => <BottomBar {...props}/> }>
                    <Tab.Screen name='Profile' component={ProfilesStackScreen} options={{ headerShown: false }} />
                    <Tab.Screen name='Home' component={HomeStackScreen} options={{ headerShown: false }}/>
                    <Tab.Screen name='Cooking' component={CookingStackScreen} options={{ headerShown: false }}/>
                </Tab.Navigator>
            </NavigationContainer>
        </ThemeProvider>
    );
}