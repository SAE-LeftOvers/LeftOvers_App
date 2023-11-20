import React from 'react';
import {StyleSheet, Pressable, Text, View} from 'react-native';


interface CustomButtonProps {
  title  : string
}

export default function CustomButton(props: CustomButtonProps) {
  return (
    <Pressable style={styles.button}>
      <View style={styles.view}>
        <Text style={styles.text}>{props.title}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width : 150,
    height: 40,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  text: {
    fontSize: 15,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  view: {
    width : 145,
    height: 35,
    borderRadius: 4,
    elevation: 3,
    borderWidth: 1,
    borderColor: 'grey',
    alignItems: 'center', // Centre le contenu verticalement
    justifyContent: 'center', // Centre le contenu horizontalement
  },
});

