import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, Pressable } from 'react-native';
import { GestureResponderEvent, StyleSheet } from 'react-native';
import {Appearance } from 'react-native';
import type { AppearancePreferences, ColorSchemeName } from 'react-native/Libraries/Utilities/NativeAppearance';
import { BlurView } from 'expo-blur';

import HomeIcon from '../assets/images/home.png';
import ProfileIcon from '../assets/images/person_icon.png';
import CookingIcon from '../assets/images/cook.png';
import LightIcon from '../assets/images/update.png';
import DarkIcon from '../assets/images/validate.png';

export default function BottomBar({ state, descriptors, navigation }) {
    const [colorScheme, setScheme] = useState<ColorSchemeName | string>(
        Appearance.getColorScheme(),
    );
    const [iconThemeButton, setThemeIconButton] = useState(( colorScheme === 'dark' ) ? LightIcon : DarkIcon)
    const [textThemeButton, setTextThemeButton] = useState(( colorScheme === 'dark' ) ? 'Light' : 'Dark');
    
    
    
    useEffect(() => {
        const subscription = Appearance.addChangeListener(
            (preferences: AppearancePreferences) => {
                const {colorScheme: scheme} = preferences;
                setScheme(scheme);
            },
        );

        return () => subscription?.remove();
    }, [setScheme]);
    
    const onThemeButtonPress = (event: GestureResponderEvent) => {
        if (textThemeButton === "Light") {
            setThemeIconButton(ProfileIcon);
            setTextThemeButton("Dark");
            //Appearance.setColorScheme('light')
        } else {
            setThemeIconButton(HomeIcon);
            setTextThemeButton("Light");
            //Appearance.setColorScheme('dark')
        }
        console.log('TextThemeButton is now: ' + textThemeButton);
    }

    return (
        <View style={styles.BottomBarMainContainer}>
            <BlurView 
                style={[StyleSheet.absoluteFill, styles.BottomBarBlurContainer]}
                tint='dark'
                intensity={50}
            >
                {state.routes.map((route, index) => {
                    const { options } = descriptors[route.key];
                    const label =
                        options.tabBarLabel !== undefined
                            ? options.tabBarLabel
                            : options.title !== undefined
                            ? options.title
                            : route.name;

                    let icon;
                    if (route.name === 'Home') {
                        icon = HomeIcon;
                    } else if (route.name === 'Profile') {
                        icon = ProfileIcon;
                    } else if (route.name === 'Cooking') {
                        icon = CookingIcon;
                    }

                    const isFocused = state.index === index;

                    const onPress = () => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                            canPreventDefault: true,
                        });

                        if (!isFocused && !event.defaultPrevented) {
                            navigation.navigate(route.name, route.params);
                        }
                    };

                    return (
                    <TouchableOpacity
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        style={[styles.BottomBarElementContainer, { flex: 1 }]}
                    >
                            <Image source={icon} style={[styles.BottomBarIcon, {tintColor: isFocused ? '#59BDCD': '#F2F0E4'}]} />
                            <Text style={{ color: isFocused ? '#59BDCD' : '#F2F0E4' }}>
                                {label}
                            </Text>
                    </TouchableOpacity>
                    );
                })}
                <Pressable onPress={ onThemeButtonPress }>
                        <Image source={iconThemeButton} style={[styles.BottomBarIcon, {tintColor: '#F2F0E4'}]} />
                        <Text style={{color: '#F2F0E4'}}>
                            {textThemeButton}
                        </Text>
                </Pressable>
            </BlurView>
        </View>
    );
}

const styles = StyleSheet.create({
    BottomBarMainContainer: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        left: 0,
        height: 70
    },
    BottomBarBlurContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'space-around',
        padding: 2,
        borderBlockColor: '#F2F0E4', 
        borderWidth: 3, 
        borderLeftColor: '#F2F0E4', 
        borderLeftWidth: 3,
        borderRightColor: '#F2F0E4',
        borderRightWidth: 3
    },
    BottomBarIcon: {
        width: 35,
        height: 35
    },
    BottomBarElementContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        margin: 3
    }
})