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
  let imageSource
  if (props.image == "cook.png"){
    imageSource = require('../assets/images/cook.png')
  }
  else if (props.image == "cross.png"){
      imageSource = require('../assets/images/cross.png')
    }
  else if (props.image == "delete.png"){
      imageSource = require('../assets/images/delete.png')
  }
  else if (props.image == "modify.png"){
      imageSource = require('../assets/images/modify.png')
  }
  else if (props.image == "parameter.png"){
      imageSource = require('../assets/images/parameter.png')
  }
  else if (props.image == "plus.png"){
      imageSource = require('../assets/images/plus.png')
  }
  else if (props.image == "plus_small.png"){
      imageSource = require('../assets/images/plus_small.png')
  }
  else if (props.image == "save.png"){
      imageSource = require('../assets/images/save.png')
  }
  else if (props.image == "search.png"){
      imageSource = require('../assets/images/search.png')
  }
  else if (props.image == "update.png"){
      imageSource = require('../assets/images/update.png')
  }
  else if (props.image == "validate.png"){
      imageSource = require('../assets/images/validate.png')
  }
  else if (props.image == "warehouse.png"){
      imageSource = require('../assets/images/warehouse.png')
  }
  else{
      imageSource = require('../assets/images/logo.png')
  }

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
                padding: "2%",
                paddingRight: "3%",}}>
            <Image 
                source={imageSource}
                style={{
                  height: "90%",
                  width: "9%",
                  marginLeft: "2%",
                  marginRight: "3%",
                  resizeMode: "contain",}}
                tintColor={props.colour}/>
            <Text style={{
                fontSize: 15,
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