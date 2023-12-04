import React, { useContext, useState } from 'react';
import { View, Text, TouchableOpacity, Image, Pressable, GestureResponderEvent, StyleSheet } from 'react-native';
import { BlurView } from 'expo-blur';
import ThemeContext from '../theme/ThemeContext';
import ColorContext from '../theme/ColorContext';
import { LightTheme, DarkTheme } from '../theme/colors';

import HomeIcon from '../assets/images/home.png';
import ProfileIcon from '../assets/images/person_icon.png';
import CookingIcon from '../assets/images/cook.png';
import LightIcon from '../assets/images/sun.png';
import DarkIcon from '../assets/images/moon.png';



export default function BottomBar({ state, descriptors, navigation }) {
    const {theme, toggleTheme} = useContext(ThemeContext);
    const { colors, toggleColors } = useContext(ColorContext);
    const [iconThemeButton, setThemeIconButton] = useState(( theme === 'dark' ) ? LightIcon : DarkIcon)
    const [textThemeButton, setTextThemeButton] = useState(( theme === 'dark' ) ? 'Light' : 'Dark');
    
    const onThemeButtonPress = (event: GestureResponderEvent) => {
        if (textThemeButton === "Light") {
            setThemeIconButton(DarkIcon);
            setTextThemeButton("Dark");
            toggleTheme('light');
            toggleColors(LightTheme)
        } else {
            setThemeIconButton(LightIcon);
            setTextThemeButton("Light");
            toggleTheme('dark')
            toggleColors(DarkTheme)
        }
        console.log('TextThemeButton is now: ' + textThemeButton);
    }

    const styles = StyleSheet.create({
        BottomBarMainContainer: {
            position: 'absolute',
            bottom: 0,
            right: 0,
            left: 0,
            height: "8%",
            backgroundColor: theme === 'dark' ? "#3F3C42" : "transparent"
        },
        BottomBarBlurContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            alignContent: 'space-around',
            borderBlockColor: theme === 'light' ? '#F2F0E4' : '#222222', 
            borderWidth: 2,
            borderLeftColor: theme === 'light'? '#F2F0E4' : '#222222',
            borderRightColor: theme === 'light'? '#F2F0E4' : '#222222',
        },
        BottomBarIcon: {
            width: 25,
            height: 25,
            resizeMode: "contain",
        },
        BottomBarElementContainer: {
            flexDirection: 'column',
            alignItems: 'center',
        }
    })

    return (
        <View style={styles.BottomBarMainContainer}>
            <BlurView 
                style={[StyleSheet.absoluteFill, styles.BottomBarBlurContainer]}
                tint='dark'
                intensity={theme === 'light' ? 50 : 0}
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
                    if (route.name === 'HOME') {
                        icon = HomeIcon;
                    } else if (route.name === 'PROFILES') {
                        icon = ProfileIcon;
                    } else if (route.name === 'COOKING') {
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
                        key={route.name}
                        >
                            <Image source={icon} style={[styles.BottomBarIcon, {tintColor: isFocused ? (theme === 'light' ? '#59BDCD': '#8DB4D9'): '#F2F0E4'}]} />
                            <Text style={{ color: isFocused ? colors.textBottomBarFocussed : '#F2F0E4' }}>
                                {label}
                            </Text>
                    </TouchableOpacity>
                    );
                })}
                <Pressable onPress={ onThemeButtonPress } style={{paddingHorizontal: "7%"}}>
                    <View style={{alignItems: "center", justifyContent: "center"}}>
                        <Image source={iconThemeButton} style={[styles.BottomBarIcon, {tintColor: '#F2F0E4'}]} />
                        <Text style={{color: '#F2F0E4'}}>
                            {textThemeButton}
                        </Text>
                    </View>
                </Pressable>
            </BlurView>
        </View>
    );
}