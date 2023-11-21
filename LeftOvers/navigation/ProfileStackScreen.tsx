import React from 'react'
import { StyleSheet, View, Image, Pressable } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Profiles from '../screens/Profiles';
import CreateProfile from '../screens/CreateProfile';
import ModifyProfile from '../screens/ModifyProfile';

import { HeaderTitle } from './Utils';

import SearchIcon from '../assets/images/search.png';
import AddIcon from '../assets/images/plus.png'

const ProfilesStack = createNativeStackNavigator()

export default function ProfilesStackScreen({ navigation }) {
    const _handleSearch = () => console.log('Searching');
    const _handleHeaderAdd = () => navigation.navigate('ProfileCreation');
    
    return (
        <ProfilesStack.Navigator>
            <ProfilesStack.Screen
                name='Profiles'
                component={Profiles}
                options={{
                    headerStyle: styles.headerBarContainer,
                    headerTitle: () => (
                        <HeaderTitle title='Profiles'/>
                    ),
                    headerRight: () => (
                        <View style={styles.headerBarRightContainer}>
                            <Pressable onPress={_handleSearch}>
                                <Image 
                                    source={SearchIcon}
                                    style={styles.headerBarIcon}/>
                            </Pressable>
                            <Pressable onPress={_handleHeaderAdd}>
                                <Image
                                    source={AddIcon}
                                    style={styles.headerBarIcon}/>
                            </Pressable>
                        </View>
                    )
                }}
            />
            <ProfilesStack.Screen
                name='ProfileCreation'
                component={CreateProfile}
                options={{
                  headerStyle: styles.headerBarContainer,
                    headerTitle: () => (
                        <HeaderTitle title='Profile Creation'/>
                    )
                }}
            />
            <ProfilesStack.Screen
                name='ProfileModification'
                component={ModifyProfile}
                options={{
                    headerStyle: styles.headerBarContainer,
                    headerTitle: () => (
                        <HeaderTitle title='Profile Modification'/>
                    )
                }}
            />
        </ProfilesStack.Navigator>
    )
}

const styles = StyleSheet.create({
    headerBarContainer: {
        backgroundColor: '#F2F0E4',
    },
    headerBarRightContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'space-between',
        marginHorizontal: 10,
    },
    headerBarIcon: {
        width: 30,
        height: 30,
        marginHorizontal: 10
    }
})