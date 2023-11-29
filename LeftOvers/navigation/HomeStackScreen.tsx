import React, { useContext } from 'react';
import { Image, Text, StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomePage from '../screens/HomePage';
import Profiles from '../screens/Profiles';
import CreateProfile from '../screens/CreateProfile';
import ModifyProfile from '../screens/ModifyProfile';
import ThemeContext from '../theme/ThemeContext';
import ColorContext from '../theme/ColorContext';
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
    const colors = useContext(ColorContext).colors
    
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen 
                name='Home'
                component={HomePage}
                options={{
                    headerStyle: {backgroundColor: colors.cardBackground},

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
                    headerStyle: {backgroundColor: colors.cardBackground},
                    headerTitle: () => (
                      <HeaderTitle title='Profiles'/>
                    )
                }}
            />
            <HomeStack.Screen
                name='ProfileModification'
                component={ModifyProfile}
                options={{
                    headerStyle: {backgroundColor: colors.cardBackground},
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