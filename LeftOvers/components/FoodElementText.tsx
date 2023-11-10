import React from 'react';
import {StyleSheet,Pressable, Text, View, Image} from 'react-native';
import Separator from '../components/Separator';
import plus from '../assets/images/plus.png'; 
import moins from '../assets/images/minus.png'; 



interface foodElementImageProps {
  source : string
  title  : string
}


export default function FoodElementText(props : any) {
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
    width : 270,
    height: 60,
    borderRadius: 5,
    elevation: 3,
    backgroundColor: '#E3DEC9',
  },
  text: {
    fontSize: 15,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    padding : 7,
    color: 'black',
  },
  view: {

    alignItems: 'flex-start',
    justifyContent: 'center',
    marginRight: 5 // Centre le contenu horizontalement
  },
  container: {
    width :260,
    height: 50,
    borderRadius: 5,
    elevation: 3,
    borderWidth: 2,
    borderColor: 'black',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
