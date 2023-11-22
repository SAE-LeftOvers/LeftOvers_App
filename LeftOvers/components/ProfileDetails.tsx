import {React, useState} from 'react';
import {StyleSheet, Text, TextInput, View, Image, Pressable} from 'react-native';
import ValidateButton from './ValidateButton';
import ListWithoutSelect from './ListWithoutSelect';

type ProfileProps = {
  name: string
  avatar: string
  diets: list<string>
  allergies: list<string>
  onDeleteProfile: () => void
}

export default function ProfileDetails(props: ProfileProps) {
  const [display, setDisplay] = useState("none")
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
            <Image source={require("../assets/images/modify.png")} style={styles.modify}></Image>
            <Pressable onPress={props.onDeleteProfile} style={{flex: 0.1, marginLeft: "1%",}}>
                <Image source={require("../assets/images/delete.png")} style={styles.delete}></Image>
            </Pressable>
        </View>
        <Pressable onPress={changeListVisibility} style={{height: "5%", marginTop: "6%", flex: 1, marginBottom: "3%"}}>
            <View style={styles.filterBar}>
                <Text style={styles.filters}>Filters</Text>
                <Text style={styles.nbSelected}>{props.diets.length} selected</Text>
                <Image source={require("../assets/images/arrow.png")} style={styles.arrow}></Image>
            </View>
        </Pressable>
        <View style={{display: display, alignItems: "center", justifyContent: "center"}}>
            <ListWithoutSelect title="Diets" content={props.diets}></ListWithoutSelect>
            <View style={{marginTop: "3%"}}/>
            <ListWithoutSelect title="Allergies" content={props.allergies}></ListWithoutSelect>
            <View style={{marginTop: "3%"}}/>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    backgroundColor: '#F2F0E4',
    padding: "3%",
    marginHorizontal: "3%",
  },

  pseudoBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginHorizontal: "3%",
    marginBottom: "3%",
  },
  avatar: {
    padding: "5%",
    resizeMode: 'contain',
    borderWidth: 2,
    borderColor: "#ACA279",
    borderRadius: 45,
    height: "100%",
    flex: 0.03,
  },
  text: {
    flex: 1,
    fontSize: 20,
    color: '#ACA279',
    alignItems: 'center',
    textAlign: 'left',
    marginLeft: "3%",
    padding: "2%",
    height: "100%",
  },
  modify: {
      height: "100%",
      tintColor: "#ACA279",
      resizeMode: 'contain',
      flex: 0.1,
      marginLeft: "3%",
  },
  delete: {
      height: "100%",
      width: "100%",
      tintColor: "#ACA279",
      resizeMode: 'contain',
      flex: 1,
  },

  filterBar: {
      flexDirection: "row",
      width: "90%",
      paddingTop: "3%",
      paddingBottom: "1%",
      alignItems: "flex-end",
      justifyContent: "center",
      flex: 1,
  },
  filters: {
      fontSize: 20,
      color: '#ACA279',
      flex: 1,
      padding: "2%",
      paddingLeft: 0,
      paddingBottom: 0,
  },
  nbSelected: {
      fontSize: 11,
      flex: 1,
      color: "#3F3C42",
      textAlign: "right",
      marginRight: "3%",
  },
  arrow: {
      height: "100%",
      resizeMode: 'contain',
      tintColor: "#3F3C42",
      flex: 0.1,
  },
});