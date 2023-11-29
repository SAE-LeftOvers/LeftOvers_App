import React, {useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import ColorContext from '../theme/ColorContext';

export default function Separator (){
    const {colors, toggleColors } = useContext(ColorContext)

    const styles = StyleSheet.create({
        separator: {
          width: "90%",
          backgroundColor: colors.cardDetail,
          borderWidth : 1,
          marginLeft : "5%",
          marginRight : "5%",
          borderColor: colors.cardDetail,
        },
    });

    return <View style={styles.separator} />;
};