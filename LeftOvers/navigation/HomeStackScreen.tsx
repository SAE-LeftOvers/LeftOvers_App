import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomePage from '../screens/HomePage';
import Profiles from '../screens/Profiles';
import appLogo from '../assets/images/icon.png';

const HomeStack = createNativeStackNavigator()

function AppIcon() {
    return (
        <Image
            source={appLogo}
            style={styles.headerAppIcon}/>
    )
}

function TextTitle(props) {
    return (
      <Text 
          style={styles.headerTitle}>
          {props.title}
      </Text>
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
                        <TextTitle title='LeftOvers'/>
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
                      <TextTitle title='Profiles'/>
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
    headerTitle: {
        fontSize: 20,
        fontWeight: "bold",
        color: '#3F3C42',
    },
    headerAppIcon: {
        width: 35,
        height: 35,
        borderRadius: 20,
        overflow:'hidden',
        marginHorizontal: 10,
    }
})