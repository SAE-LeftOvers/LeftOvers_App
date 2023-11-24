import React, { useContext } from 'react';
import { Text, StyleSheet } from 'react-native';

import ThemeContext from '../theme/ThemeContext';

export function HeaderTitle(props) {
    const {theme, toggleTheme} = useContext(ThemeContext);

    const styles = StyleSheet.create({
        headerTitle: {
            fontSize: 20,
            fontWeight: "bold",
            color: theme === 'light' ? '#3F3C42' : '#F2F0E4',
        }
    })

    return (
        <Text 
            style={styles.headerTitle}>
            {props.title}
        </Text>
    )
}