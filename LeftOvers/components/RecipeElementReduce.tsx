import React from 'react';
import {StyleSheet,Pressable, Text, View, Image} from 'react-native';
import brochette from '../assets/images/brochette.png'; 
import background from '../assets/images/Background.png'; 


interface recipeElementReduceProps {
  number : number
  title  : string
  image : string
  duree : string
}



export default function RecipeElementReduce(props : any) {
  return (
    <Pressable style={styles.button}>
      <View style={styles.view}>
        <Text style={styles.text}>{props.number}</Text>
        <Text style={styles.title}>{props.title}</Text>
        <Image source={props.image ? props.image : brochette} style={{ width: 100, height: 100 }}/>
        <View style={{marginTop: 200, position: 'absolute'}}>
            <Image source={background} style={{width: 210, height: 20}}></Image>
            <Text style={styles.smallText}>{props.duree}</Text>
        </View>
      </View>
    </Pressable>
  ); 
}


const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width : 250,
    height: 250,
    borderRadius: 40,
    elevation: 3,
    backgroundColor: '#E3DEC9',
  },
  text: {
    fontSize: 14,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#756C28',
    marginTop: 10,
  },
  smallText: {
    position: 'absolute', 
    textAlign: 'center', 
    left: 0, 
    right: 0, 
    marginHorizontal: 'auto', 
    color: '#E3DEC9',

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
    height: 240,
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