import React, { useContext } from 'react';
import { Image, Text, StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomePage from '../screens/HomePage';
import Profiles from '../screens/Profiles';
import CreateProfile from '../screens/CreateProfile';
import ModifyProfile from '../screens/ModifyProfile';
import ThemeContext from '../theme/ThemeContext';
import { HeaderTitle } from './Utils';

import appLogo from '../assets/images/logo.png';

const HomeStack = createNativeStackNavigator()

function AppIcon() {
    return (
        <Image
            source={appLogo}
            style={styles.headerAppIcon}/>
    )
}

export default function HomeStackScreen() {
    const {theme, toggleTheme} = useContext(ThemeContext)
    
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen 
                name='Home'
                component={HomePage}
                options={{
                    headerStyle: {backgroundColor: theme === 'light' ? '#F2F0E4' : '#3F3C42'},

                    headerLeft: () => (
                        <AppIcon/>
                    ),

                    headerTitle: () => (
                        <HeaderTitle title='LeftOvers'/>
                    ),
                    headerTitleAlign: 'center',

                    headerRight: () => (
                        <AppIcon/>
                    ),
                }} 
            />
            <HomeStack.Screen
                name='Profiles'
                component={Profiles}
                options={{
                    headerStyle: {backgroundColor: theme === 'light' ? '#F2F0E4' : '#3F3C42'},
                    headerTitle: () => (
                      <HeaderTitle title='Profiles'/>
                    )
                }}
            />
            <HomeStack.Screen
                name='ProfileModification'
                component={ModifyProfile}
                options={{
                    headerStyle: {backgroundColor: theme === 'light' ? '#F2F0E4' : '#3F3C42'},
                    headerTitle: () => (
                        <HeaderTitle title='Profile Modification'/>
                    )
                }}
            />
        </HomeStack.Navigator>
    )
}

const styles = StyleSheet.create({
    headerAppIcon: {
        width: 45,
        height: 45,
        marginHorizontal: 10,
    }
})