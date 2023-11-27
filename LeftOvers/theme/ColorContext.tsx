import React, {createContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { DarkTheme, LightTheme, Theme } from './colors';

interface ColorContextType { 
    colors: Theme, 
    toggleColor: (Theme) => void 
};

const ColorContext = createContext<ColorContextType | null>(null);

export const ColorProvider = ({ children }) => {
    const [colors, setColors] = useState(LightTheme);

    useEffect(() => {
        const getColors = async () => {
            try {
                const savedColors = await AsyncStorage.getItem('colors');
                if (savedColors) {
                    setColors(JSON.parse(savedColors));
                }
            } catch (error) {
                console.log('Error loading colors:', error);
            }
        };
        getColors();
    }, []);

    const toggleColor = (newColors: Theme) => {
        setColors(newColors);
        AsyncStorage.setItem('colors', JSON.stringify(newColors))
    };

    return (
        <ColorContext.Provider value={{colors, toggleColor}}>
            {children}
        </ColorContext.Provider>
    );
};

export default ColorContext;