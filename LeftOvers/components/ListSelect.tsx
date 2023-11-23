import React from 'react';
import {StyleSheet, Text, TextInput, View, Image, FlatList} from 'react-native';
import ValidateButton from './ValidateButton';
import HeaderFlatList from './HeaderFlatList';
import { MultipleSelectList, SelectList } from 'react-native-dropdown-select-list'

type ListProps = {
    title: string
    content : list<string>
}

export default function ListSelect(props: ListProps) {
  const [selected, setSelected] = React.useState([]);
  return (
    <MultipleSelectList
        setSelected={(val) => setSelected(val)}
        data={props.content}
        save="value"
        search={false}
        arrowicon={<Image source={require("../assets/images/arrow.png")} style={styles.arrow}></Image>}
        boxStyles={styles.titleBar}
        inputStyles={styles.title}
        dropdownStyles={styles.itemList}
        dropdownItemStyles={styles.itemCell}
        dropdownTextStyles={styles.itemText}
        badgeStyles={styles.badges}
        badgeTextStyles={styles.badgesText}
        notFoundText="All Diets Already Selected"
        placeholder={props.title}
        label={props.title}/>
  );
}

const styles = StyleSheet.create({
  titleBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "stretch",
    backgroundColor: "#F2F0E4",
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderWidth: 2,
    borderColor: "#ACA279",
    minWidth: "92%",
    maxWidth: "92%",
    marginBottom: 0,
    overflow: "hidden",
  },
  arrow: {
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
      flexDirection: "row",
      alignItems: "flex-start",
      justifyContent: "stretch",
      borderWidth: 0,
      borderTopRightRadius: 0,
      borderTopLeftRadius: 0,
      borderBottomRightRadius: 15,
      borderBottomLeftRadius: 15,
      backgroundColor: "#E3DEC9",
      minWidth: "92%",
      maxWidth: "92%",
  },
  itemCell: {
      padding: 0,
      paddingTop: "5%",
      width: "100%",
      minWidth: 250,
      maxWidth: 250,
  },
  itemText: {
      fontSize: 13,
      textAlign: "left",
      flex: 1,
      padding: "1%",
      paddingLeft: "3%",
      color: "#3F3C42",
  },

  badges: {
      backgroundColor: "#59BDCD",
  },
  badgesText: {
      fontSize: 15,
      color: "#F2F0E4",
  },
});