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
    elevation: 3,
    backgroundColor: '#E3DEC9',
  },
  text: {
    fontSize: 15,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    padding: 7,
    color: 'black',
    width: 250,
  },
  view: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginRight: 5 // Centre le contenu horizontalement
  },
  container: {
    width : componentWidth - 10,
    minHeight : componentHeight - 10,
    borderRadius: 5,
    elevation: 3,
    borderWidth: 2,
    borderColor: 'black',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
