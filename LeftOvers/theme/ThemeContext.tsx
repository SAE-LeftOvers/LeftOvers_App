import React, {createContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


interface ThemeContextType { 
    theme: string, 
    toggleTheme: (any)=> void 
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        // Load saved theme from storage
        const getTheme = async () => {
            try {
                const savedTheme = await AsyncStorage.getItem('theme');
                if (savedTheme) {
                    setTheme(savedTheme);
                }
            } catch (error) {
                console.log('Error loading theme:', error);
            }
        };
        getTheme();
    }, []);

    const toggleTheme = newTheme => {
        setTheme(newTheme);
        AsyncStorage.setItem('theme', newTheme)
    };

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeContext;