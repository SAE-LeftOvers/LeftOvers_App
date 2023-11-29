import React, { useContext } from 'react';
import { Text, StyleSheet } from 'react-native';

import ColorContext from '../theme/ColorContext';

export function HeaderTitle(props) {
    const {colors} = useContext(ColorContext)

    const styles = StyleSheet.create({
        headerTitle: {
            fontSize: 20,
            fontWeight: "bold",
            color: colors.cardDetail,
        }
    })

    return (
        <Text 
            style={styles.headerTitle}>
            {props.title}
        </Text>
    )
}