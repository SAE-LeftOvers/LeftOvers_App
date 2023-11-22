import {React, useState} from 'react';
import {StyleSheet, Text, TextInput, View, Image, Pressable} from 'react-native';
import ValidateButton from './ValidateButton';
import ListWithoutSelect from './ListWithoutSelect';

type ProfileProps = {
  name: string
  avatar: string
  diets: list<string>
  allergies: list<string>
}

export default function ProfileDelete(props: ProfileProps) {
  const [display, setDisplay] = useState("flex")
  const changeListVisibility = () => {
    if (display == "none"){
        setDisplay("flex")
    }
    else{
        setDisplay("none")
    }
  };

  let imageSource

  if (props.avatar == "plus.png"){
     imageSource = require('../assets/images/plus.png')
  }
  else if (props.avatar == "plus_small.png"){
     imageSource = require('../assets/images/plus_small.png')
  }
  else{
     imageSource = require('../assets/images/logo.png')
  }

  return (
    <View style={styles.background}>
        <View style={styles.pseudoBar}>
            <Image source={imageSource} style={styles.avatar}></Image>
            <Text style={styles.text}>{props.name}</Text>
        </View>
        <Pressable onPress={changeListVisibility} style={{height: 20, marginTop: 20,}}>
            <View style={styles.filterBar}>
                <Text style={styles.filters}>Filters</Text>
                <Image source={require("../assets/images/arrow.png")} style={styles.arrow}></Image>
            </View>
        </Pressable>
        <View style={{display: display}}>
            <ListWithoutSelect title="Diets" content={props.diets}></ListWithoutSelect>
            <View style={{marginTop: 10}}/>
            <ListWithoutSelect title="Allergies" content={props.allergies}></ListWithoutSelect>
            <View style={{marginTop: 10}}/>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    //maxWidth: 370,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    backgroundColor: '#F2F0E4',
    padding: 10,
    marginHorizontal: 10,
  },
  pseudoBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flex: 0.7,
    width: 330,
    marginBottom: 10,
  },
  avatar: {
    padding: 20,
    resizeMode: 'contain',
    borderWidth: 2,
    borderColor: "#ACA279",
    borderRadius: 45,
  },
  text: {
    fontSize: 20,
    color: '#ACA279',
    alignItems: 'center',
    justifyContent: 'left',
    flex: 0.8,
    marginLeft: 20,
    padding: 5,
  },



  filterBar: {
      flexDirection: "row",
      width: 300,
      paddingTop: 10,
      paddingBottom: 5,
      alignItems: "flex-end",
      justifyContent: "center",
      flex: 0.2,
  },
  filters: {
      flex: 0.5,
      fontSize: 20,
      color: '#ACA279',
      flex: 1,
      padding: 5,
      paddingLeft: 0,
      paddingBottom: 0,
  },
  nbSelected: {
      fontSize: 11,
      flex: 1,
      color: "#3F3C42",
      textAlign: "right",
  },
  arrow: {
      height: 20,
      width: 20,
      resizeMode: 'contain',
      tintColor: "#3F3C42",
      flex: 0.1,
  },
});