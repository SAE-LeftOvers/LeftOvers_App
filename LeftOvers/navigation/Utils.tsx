import React from 'react';
import { Text, StyleSheet } from 'react-native';

export function HeaderTitle(props) {
    return (
        <Text 
            style={styles.headerTitle}>
            {props.title}
        </Text>
    )
}

const styles = StyleSheet.create({
    headerTitle: {
        fontSize: 20,
        fontWeight: "bold",
        color: '#3F3C42',
    }
})