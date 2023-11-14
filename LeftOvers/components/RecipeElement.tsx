import React from 'react';
import {StyleSheet,Pressable, Text, View, Image, SafeAreaView, ScrollView} from 'react-native';
import brochette from '../assets/images/brochette.png'; 
import Union_left from '../assets/images/Union_left.png';
import Union_right from '../assets/images/Union_right.png';
import background from '../assets/images/Background.png'; 

interface recipeElementProps {
  number : number
  title  : string
  description : string
  imageList : string[]
  image : string
}

export default function RecipeElement(props : any) {

  const totalContentCount = props.imageList.length + 11;
  const dynamicHeight = totalContentCount * 40;
  const scrollViewHeight = 100;



  return (
    <Pressable style={[styles.button, { height: dynamicHeight }]}>
      <View style={[styles.view, { height: dynamicHeight - 10}]}>
        <Text style={styles.text}>{props.number}</Text>
        <Text style={styles.title}>{props.title}</Text>
        <Image source={props.image ? props.image : brochette} style={{ width: 100, height: 100 }}/>
          <View style={styles.horizontalAlignement}>
            <Image source={Union_left} style={{ width: 70, height: 4, marginRight: 6 }} />
            <Text style={styles.text}>Ingredients</Text>
            <Image source={Union_right} style={{ width: 70, height: 4, marginLeft: 6 }} />
          </View>
        
        <View style={styles.horizontalAlignement}>
          {props.imageList.length > 0 && props.imageList.map((source, index) => (
          <Image key={index} source={source} style={{ width: 40, height: 40 }} />
          ))}
        </View>

        
        {props.imageList.length <= 0 ? (
          <View style={styles.horizontalAlignement}>
                  {props.textList.length > 0 && props.textList.map((source, index) => (
                    <Text key={index} style={styles.smallText}>{source}</Text>
                  ))}
          </View>
          ) : null}


        <View style={styles.scrollViewContainer}>
          <SafeAreaView>
            <View style={styles.horizontalAlignement}>
              <Image source={Union_left} style={{ width: 70, height: 4, marginRight: 6 }} />
              <Text style={styles.text}>Description</Text>
              <Image source={Union_right} style={{ width: 70, height: 4, marginLeft: 6 }} />
            </View>
            <ScrollView style={{ marginTop: 5, height: scrollViewHeight }}>
              <Text style={styles.smallText}>{props.description}</Text>
            </ScrollView>
          </SafeAreaView>
        </View>

        <Image source={background} style={{width: 210, height: 20, marginTop: dynamicHeight - 50, position: 'absolute'}}></Image>
      </View>
    </Pressable>
  ); 
}


const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width : 300,
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
    fontSize: 12,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#71662A',
    textAlign: "center",
    margin : 5
  },
  title:{
    fontSize: 18,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#524B1A',
  },
  view: {
    width : 290,
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
    justifyContent: 'space-between',
    marginTop : 5,
    flexWrap: 'wrap',
  },
  scrollViewContainer: {
    flex: 1, // Assurez-vous que le reste du contenu occupe l'espace restant
  },
});