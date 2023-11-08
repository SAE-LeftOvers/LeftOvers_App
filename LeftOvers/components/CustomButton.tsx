import React from 'react';
import {StyleSheet,Pressable, Text, Image} from 'react-native';


export default function CustomButton(props) {
    return (
    <Pressable style={styles.button} >
      <Text style={styles.text}>{props.title}</Text>
    </Pressable>
    );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  text: {
    width: '100%', // L'image prend toute la largeur du conteneur
    height: '100%',
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});

