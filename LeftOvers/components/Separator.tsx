import React from 'react';
import {StyleSheet, View} from 'react-native';

export default function Separator (){
    return <View style={styles.separator} />;
};
  
  const styles = StyleSheet.create({
    separator: {
      width: "90%",
      backgroundColor: '#3F3C42',
      borderWidth : 1,
      marginLeft : "5%",
      marginRight : "5%",
    },
  });
  