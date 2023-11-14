import React from 'react';
import {StyleSheet, Text, TextInput, View, Image} from 'react-native';
import ValidateButton from './ValidateButton';
import ListTab from './ListTab';

type ProfileProps = {
  name: string
  avatar: string
  diets: list<string>
  allergies: list<string>
}

export default function ProfileModification(props: ProfileProps) {
  return (
    <View style={styles.background}>
        <View style={styles.pseudoBar}>
            <Image source={require("../assets/images/"+props.avatar)} style={styles.avatar}></Image>
            <TextInput style={styles.textInput} value={props.name}></TextInput>
            <Image source={require("../assets/images/modify.png")} style={styles.modify}></Image>
        </View>
        <View style={styles.filterBar}>
            <Text style={styles.filters}>Filters</Text>
            <Text style={styles.nbSelected}>3 selected</Text>
        </View>
        <ListTab title="Diets" content={props.diets}></ListTab>
        <ListTab title="Allergies" content={props.allergies}></ListTab>
        <ValidateButton title="Add Allergy" image="plus.png" colour="#59BDCD" backColour="#E3DEC9"></ValidateButton>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    width: 370,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    backgroundColor: '#F2F0E4',
    padding: 10,
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
    height: 45,
    width: 45,
    resizeMode: 'contain',
    borderWidth: 2,
    borderColor: "#ACA279",
    borderRadius: 45,
  },
  textInput: {
    flex: 0.5,
    fontSize: 15,
    color: '#ACA279',
    width : 150,
    borderRadius: 10,
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: '#ACA279',
    alignItems: 'center',
    justifyContent: 'left',
    flex: 0.8,
    marginLeft: 20,
    padding: 5,
  },
  modify: {
      height: 20,
      width: 20,
      tintColor: "#ACA279",
      resizeMode: 'contain',
      flex: 0.1,
      marginLeft: 5,
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
    }
});