import React from 'react';
import {StyleSheet,Pressable, Text, View, Image} from 'react-native';
import Separator from '../components/Separator'; 



interface foodElementImageProps {
  source : string | null
  title  : string
}

const componentHeight = 60; 
const componentWidth = 280;


export default function FoodElementText(props : any) {
  const isTextOverflowing = props.title.length * 10 > 260;

  return (
    <Pressable style={styles.button}>
      <View style={styles.container}>
        <View style={styles.view}>
            <Text style={styles.text}>{props.title}</Text>
            {!isTextOverflowing && <Separator />}
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({

  
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width : componentWidth,
    minHeight: componentHeight,
    borderRadius: 5,
    backgroundColor: '#E3DEC9',
  },
  text: {
    fontSize: 10,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    padding: 7,
    color: 'black',
    width: 250,
  },
  view: {
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  container: {
    width : componentWidth - 10,
    minHeight : componentHeight - 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#3F3C42',
    flexDirection: 'column',
    justifyContent: 'center',
  },
});
