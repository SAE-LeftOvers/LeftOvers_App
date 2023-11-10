import React from 'react';
import {StyleSheet, View} from 'react-native';

export default function Separator (){
    return <View style={styles.separator} />;
};
  
  const styles = StyleSheet.create({
    separator: {
      width: 250, // Largeur de la ligne
      backgroundColor: 'black', // Couleur de la ligne
      borderWidth : 1,
      marginLeft : 10,
      marginRight : 10,
    },
  });
  