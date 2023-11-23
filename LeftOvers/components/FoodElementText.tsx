import React from 'react';
import {StyleSheet,Pressable, Text, View, Image} from 'react-native';
import Separator from '../components/Separator';



interface foodElementImageProps {
  title  : string
}


export default function FoodElementText(props : any) {
  return (
    <Pressable style={styles.button}>
      <View style={styles.container}>
        <View style={styles.view}>
            <Text style={styles.text}>{props.title}</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: "80%",
    borderRadius: 5,
    backgroundColor: '#E3DEC9',
  },
  text: {
    fontSize: 10,
    fontWeight: 'bold',
    padding : "2%",
    color: 'black',
  },
  view: {
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  container: {
    width: "100%",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#3F3C42',
    flexDirection: 'column',
    justifyContent: 'center',
  },
});
