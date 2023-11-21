import React from 'react';
import {StyleSheet, Pressable, Text, View, Image, GestureResponderEvent} from 'react-native';


type ValidateButtonProps = {
  title: string
  image: string
  colour: string
  backColour: string
  todo: (event: GestureResponderEvent) => void
}

export default function ValidateButton(props: ValidateButtonProps) {
  return (
    <Pressable 
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 20,
        }}
        onPress={props.todo}>
        <View 
            style={{
                borderRadius: 30,
                borderWidth: 2,
                borderColor: props.colour,
                backgroundColor: props.backColour,
                alignItems: 'center',
                justifyContent: "center",
                flexDirection: "row",
                padding: 5,
                paddingRight: 10,}}>
            <Image 
                source={require('../assets/images/'+props.image)} 
                style={{
                    height: 20,
                    width: 20,
                    marginLeft: 5,
                    marginRight: 10,
                    resizeMode: "center",
                    tintColor: props.colour,}}>
            </Image>
            <Text style={{
                fontSize: 20,
                color: props.colour,
            }}>{props.title}</Text>
        </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    //width : 150,
    //height: 35,
    borderRadius: 20,
    backgroundColor: '#F2F0E4',
  },
  text: {
    fontSize: 20,
    color: '#ACA279',
    paddingLeft: 15,
    flex: 0.7,
  },
  view: {
    //width: 150,
    //height: 35,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#ACA279',
    alignItems: 'center',
    flex: 1,
    flexDirection: "row",
    paddingLeft: 25,
    paddingRight: 30,
    paddingTop: 5,
    paddingBottom: 5,
  },
  image:{
    height: 20,
    width: 20,
    flex: 0.3,
    resizeMode: "center",
    tintColor: "#ACA279",
  },
});