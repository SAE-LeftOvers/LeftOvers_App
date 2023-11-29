import React from 'react';
import {StyleSheet,Pressable, Text, View, Image} from 'react-native';
import Separator from '../components/Separator';
import plus from '../assets/images/plus.png';
import moins from '../assets/images/minus.png';

interface foodElementTextProps {
  title  : string
}

export default function FoodElementText(props : foodElementTextProps) {
  return (
    <Pressable style={styles.button}>
      <View style={styles.container}>
        <View style={styles.view}>
            <Text style={styles.text}>{props.title}</Text>
            <Separator/>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width : "80%",
    borderRadius: 5,
    backgroundColor: '#E3DEC9',
    marginHorizontal: "3%",
  },
  text: {
    fontSize: 15,
    lineHeight: 20,
    fontWeight: 'bold',
    padding : "3%",
    color: '#3F3C42',
  },
  view: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginRight: "3%",
    width: "100%"
  },
  container: {
    width: "100%",
    height: 50,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#3F3C42',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});