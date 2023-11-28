import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeStackScreen from './navigation/HomeStackScreen';
import ProfilesStackScreen from './navigation/ProfileStackScreen';
import CookingStackScreen from './navigation/CookingStackScreen';
import BottomBar from './navigation/BottomBar';
import { ThemeProvider } from './theme/ThemeContext';
import { ColorProvider } from './theme/ColorContext';


const Tab = createBottomTabNavigator();

export default function App() {
    
    return (
        <ThemeProvider>
            <ColorProvider>
                <NavigationContainer>
                    <Tab.Navigator initialRouteName='HOME' tabBar={ (props) => <BottomBar {...props}/> }>
                        <Tab.Screen name='PROFILE' component={ProfilesStackScreen} options={{ headerShown: false, title: 'Profile' }} />
                        <Tab.Screen name='HOME' component={HomeStackScreen} options={{ headerShown: false, title: 'Home' }}/>
                        <Tab.Screen name='COOKING' component={CookingStackScreen} options={{ headerShown: false, title: 'Cooking' }}/>
                    </Tab.Navigator>
                </NavigationContainer>
            </ColorProvider>
        </ThemeProvider>
    );
}
