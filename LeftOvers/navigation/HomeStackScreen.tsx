import React from 'react';
import { Image, Text, StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomePage from '../screens/HomePage';
import Profiles from '../screens/Profiles';
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
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen 
                name='Home'
                component={HomePage}
                options={{
                    headerStyle: styles.headerBarContainer,

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
                    headerStyle: styles.headerBarContainer,
                    headerTitle: () => (
                      <HeaderTitle title='Profiles'/>
                    )
                }}
            />
        </HomeStack.Navigator>
    )
}

const styles = StyleSheet.create({
    headerBarContainer: {
        backgroundColor: '#F2F0E4',
    },
    headerAppIcon: {
        width: 45,
        height: 45,
        marginHorizontal: 10,
    }
})