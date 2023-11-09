import React from 'react';
import {StyleSheet,Pressable, Text, View, Image} from 'react-native';
import brochette from '../assets/images/brochette.png'; 
import Union_left from '../assets/images/Union_left.png';
import Union_right from '../assets/images/Union_right.png';
import meat from '../assets/images/meat.png'; 
import background from '../assets/images/Background.png'; 




export default function RecipeElementImage(props) {
  return (
    <Pressable style={styles.button}>
      <View style={styles.view}>
        <Text style={styles.text}>{props.number}</Text>
        <Text style={styles.title}>{props.title}</Text>
        <Image source={brochette} style={{width: 100, height: 100}}/>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Text style={styles.smallText}>{props.description}</Text>
        </View>
        <View style={styles.horizontalAlignement}>
            <Image source={Union_left} style={{ width: 70, height: 4, marginRight: 6}}></Image>
            <Text style={styles.smallText}>Ingredients</Text>
            <Image source={Union_right} style={{ width: 70, height: 4, marginLeft: 6}}></Image>
        </View>
        <View style={styles.horizontalAlignement}>
            <Image source={meat} style={{width: 40, height: 40}}/>
            <Image source={meat} style={{width: 40, height: 40}}/>
            <Image source={meat} style={{width: 40, height: 40}}/>
            <Image source={meat} style={{width: 40, height: 40}}/>
            <Image source={meat} style={{width: 40, height: 40}}/>   
        </View>
        <Image source={background} style={{width: 210, height: 20, marginTop: 20}}></Image>
      </View>
    </Pressable>
  ); 
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width : 250,
    height: 370,
    borderRadius: 40,
    elevation: 3,
    backgroundColor: '#ACA279',
  },
  text: {
    fontSize: 14,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#756C28',
  },
  smallText: {
    fontSize: 12,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#71662A',
    textAlign: "center",
  },
  title:{
    fontSize: 18,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#524B1A',
  },
  view: {
    width : 240,
    height: 360,
    borderRadius: 40,
    elevation: 3,
    borderWidth: 2,
    borderColor: 'grey',
    alignItems: 'center', // Centre le contenu verticalement
    display: "flex",
    flexWrap: "wrap",
  },
  horizontalAlignement: {
    display: "flex",
    flexDirection : 'row',
    alignItems: 'center', 
    marginTop: 10,
  }
});