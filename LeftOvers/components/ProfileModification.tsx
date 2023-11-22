import {React, useState} from 'react';
import {StyleSheet, Text, TextInput, View, Image} from 'react-native';
import ValidateButton from './ValidateButton';
import ListSelect from './ListSelect';
import ListWithoutSelect from './ListWithoutSelect';

type ProfileProps = {
  name: string
  avatar: string
  diets: list<string>
  allergies: list<string>
}

export default function ProfileModification(props: ProfileProps) {
  const [name, onChangeName] = useState(props.name);

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
            <TextInput style={styles.textInput} value={name} onChangeText={onChangeName} placeholder="Name"></TextInput>
            <Image source={require("../assets/images/modify.png")} style={styles.modify}></Image>
        </View>
        <View style={styles.filterBar}>
            <Text style={styles.filters}>Filters</Text>
            <Text style={styles.nbSelected}>3 selected</Text>
        </View>
        <ListSelect title="Diets" content={props.diets}></ListSelect>
        <View style={{marginTop: "6%"}}/>
        <ListWithoutSelect title="Allergies" content={props.allergies}></ListWithoutSelect>
        <View style={{marginTop: "3%"}}/>
        <ValidateButton title="Add Allergy" image="plus.png" colour="#59BDCD" backColour="#E3DEC9"></ValidateButton>
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
    flex: 0.04,
  },
  textInput: {
    flex: 0.9,
    fontSize: 15,
    color: '#ACA279',
    borderRadius: 10,
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: '#ACA279',
    alignItems: 'center',
    textAlign: 'left',
    flex: 0.8,
    marginLeft: "7%",
    padding: "2%",
  },
  modify: {
      height: "100%",
      tintColor: "#ACA279",
      resizeMode: 'contain',
      flex: 0.1,
      marginLeft: "3%",
  },

  filterBar: {
      flexDirection: "row",
      width: "85%",
      paddingTop: "3%",
      paddingBottom: "2%",
      alignItems: "flex-end",
      justifyContent: "center",
  },
  filters: {
      fontSize: 20,
      color: '#ACA279',
      flex: 1,
  },
  nbSelected: {
      fontSize: 11,
      color: "#3F3C42",
      textAlign: "right",
    }
});