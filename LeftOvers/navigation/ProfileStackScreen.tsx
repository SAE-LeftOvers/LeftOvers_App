import React, { useContext } from 'react'
import { StyleSheet, View, Image, Pressable } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Profiles from '../screens/Profiles';
import CreateProfile from '../screens/CreateProfile';
import ModifyProfile from '../screens/ModifyProfile';
import ColorContext from '../theme/ColorContext';

import { HeaderTitle } from './Utils';

import SearchIcon from '../assets/images/search.png';
import AddIcon from '../assets/images/plus.png'

const ProfilesStack = createNativeStackNavigator()

export default function ProfilesStackScreen({ navigation }) {
    const colors = useContext(ColorContext).colors;

    const styles = StyleSheet.create({
        headerBarContainer: {
            backgroundColor: colors.cardBackground,
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
    
    const _handleSearch = () => {
        console.log('Searching');
    }
    const _handleHeaderAdd = () => navigation.navigate('ProfileCreation', { name: String });
    
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
                                    style={styles.headerBarIcon}
                                    tintColor={colors.cardDetail}/>
                            </Pressable>
                            <Pressable onPress={_handleHeaderAdd}>
                                <Image
                                    source={AddIcon}
                                    style={styles.headerBarIcon}
                                    tintColor={colors.cardDetail}/>
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

