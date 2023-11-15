import React from 'react';
import {StyleSheet, Text, TextInput, View, Image, FlatList} from 'react-native';
import ValidateButton from './ValidateButton';
import HeaderFlatList from './HeaderFlatList';
import { MultipleSelectList, SelectList } from 'react-native-dropdown-select-list'

type AllergiesProps = {
    title: string
    content : list<string>
}

export default function AllergiesTab(props: AllergiesProps) {
  const [selected, setSelected] = React.useState([]);
  const data = [
        {key:'1', value:'Dairy free'},
        {key:'2', value:'Gluten free'},
        {key:'3', value:'Porkless'},
        {key:'4', value:'Vegan'},
        {key:'5', value:'Vegetatian'},
        {key:'6', value:'Pescatarian'},
  ]
  return (
    <MultipleSelectList
        data={props.content}
        save="value"
        search={false}
        arrowicon={<Image source={require("../assets/images/arrow.png")} style={styles.arrow}></Image>}
        boxStyles={styles.titleBar}
        inputStyles={styles.title}
        dropdownStyles={styles.itemList}
        dropdownItemStyles={styles.itemCell}
        dropdownTextStyles={styles.itemText}
        checkBoxStyles={styles.box}
        placeholder={props.title}
        label={props.title}/>
  );
}

const styles = StyleSheet.create({
  titleBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "stretch",
    minHeight: 25,
    backgroundColor: "#F2F0E4",
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderWidth: 2,
    borderColor: "#ACA279",
    width: 330,
    marginBottom: 0,
    overflow: "hidden",
  },
  arrow: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
    tintColor: "#3F3C42",
    flex: 0.1,
  },
  title: {
    fontSize: 15,
    color: '#3F3C42',
    alignItems: 'center',
    textAlign: "left",
    flex: 0.9,
  },

  itemList: {
      //flexDirection: "row",
      alignItems: "flex-start",
      //justifyContent: "stretch",
      borderWidth: 0,
      borderTopRightRadius: 0,
      borderTopLeftRadius: 0,
      borderBottomRightRadius: 15,
      borderBottomLeftRadius: 15,
      backgroundColor: "#E3DEC9",
      width: 330,
  },
  itemCell: {
      maxHeight: 30,
      flex: 1,
      padding: 0,
      paddingLeft: 10,
  },
  itemText: {
      fontSize: 13,
      textAlign: "left",
      flex: 1,
      padding: 5,
      paddingLeft: 10,
      color: "#3F3C42",
  },

  box: {
      borderWidth: 0,
      flex: 0,
  }
});