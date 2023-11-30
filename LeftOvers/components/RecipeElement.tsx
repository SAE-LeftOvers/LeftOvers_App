import React from 'react';
import {StyleSheet, Pressable, Text, View, Image, ScrollView} from 'react-native';
import brochette from '../assets/images/brochette.png'; 
import Union_left from '../assets/images/Union_left.png';
import Union_right from '../assets/images/Union_right.png';
import background from '../assets/images/Background.png'; 

interface RecipeElementProps {
  number: string
  title: string
  textList: {title: string}[]
  description: string
}

export default function RecipeElement(props: RecipeElementProps) {
  return (
    <Pressable style={styles.button}>
      <View style={styles.view}>
        <Text style={styles.text}>{props.number}</Text>
        <Text style={styles.title}>{props.title}</Text>
        <Image source={props.image ? props.image : brochette} style={{width: 100, resizeMode: "contain"}}/>
        <View style={styles.horizontalAlignment}>
            <Image source={Union_left} style={{width: "25%", marginRight: "3%", resizeMode: "contain"}} />
            <Text style={styles.text}>Ingredients</Text>
            <Image source={Union_right} style={{ width: "25%", marginLeft: "3%", resizeMode: "contain"}} />
        </View>
        <View style={styles.horizontalAlignment}>
            {props.textList.length > 0 && props.textList.map((source, index) => (
                <Text key={index} style={styles.smallText}>- {source.title} -</Text>
            ))}
        </View>
        <View style={styles.scrollViewContainer}>
            <View style={styles.horizontalAlignment}>
                <Image source={Union_left} style={{width: "27%", marginRight: "3%", resizeMode: "contain"}}/>
                <Text style={styles.text}>Description</Text>
                <Image source={Union_right} style={{width: "27%", marginLeft: "3%", resizeMode: "contain"}}/>
            </View>
            <ScrollView style={{marginTop: "3%", overflow: "hidden"}}>
                <Text style={styles.smallText}>{props.description}</Text>
            </ScrollView>
        </View>
        <Image source={background} style={{width: "80%", resizeMode: "contain"}}></Image>
      </View>
    </Pressable>
  ); 
}


const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
    height: "90%",
    borderRadius: 40,
    backgroundColor: '#E3DEC9',
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#756C28',
    marginTop: "4%",
  },
  smallText: {
    fontSize: 12,
    color: '#71662A',
    textAlign: "center",
    margin : "2%"
  },
  title:{
    fontSize: 18,
    fontWeight: 'bold',
    color: '#524B1A',
  },
  view: {
    width : "95%",
    height: "96.5%",
    borderRadius: 40,
    borderWidth: 2,
    padding: "5%",
    borderColor: '#73692A',
    alignItems: 'center',
    justifyContent: "center",
  },
  horizontalAlignment: {
    display: "flex",
    flexDirection : 'row',
    alignItems: 'center', 
    justifyContent: 'space-between',
    marginTop : "2%",
    flexWrap: 'wrap',
  },
  scrollViewContainer: {
    flex: 1,
  },
});