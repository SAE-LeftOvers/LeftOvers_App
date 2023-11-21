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

  return (
    <View style={styles.background}>
        <View style={styles.pseudoBar}>
            <Image source={require("../assets/images/"+props.avatar)} style={styles.avatar}></Image>
            <Text style={styles.text}>{props.name}</Text>
            <Image source={require("../assets/images/modify.png")} style={styles.modify}></Image>
            <Pressable onPress={props.onDeleteProfile}>
                <Image source={require("../assets/images/delete.png")} style={styles.delete}></Image>
            </Pressable>
        </View>
        <Pressable onPress={changeListVisibility} style={{height: 20, marginTop: 20,}}>
            <View style={styles.filterBar}>
                <Text style={styles.filters}>Filters</Text>
                <Text style={styles.nbSelected}>3 selected</Text>
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
  modify: {
      height: 20,
      width: 20,
      tintColor: "#ACA279",
      resizeMode: 'contain',
      flex: 0.05,
      marginLeft: 15,
  },
  delete: {
        height: 20,
        width: 20,
        tintColor: "#ACA279",
        resizeMode: 'contain',
        flex: 0.05,
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