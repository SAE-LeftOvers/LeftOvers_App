import React from 'react';
import {StyleSheet, Text, TextInput, View, Image, FlatList} from 'react-native';
import ValidateButton from './ValidateButton';
import HeaderFlatList from './HeaderFlatList';

type ListProps = {
    title: string
    content : list<string>
}

type ItemProps = {title: string}

const Item = ({title}: ItemProps) => (
    <View style={styles.itemList}>
        <Text style={styles.itemText}>{title}</Text>
    </View>
)

export default function ListTab(props: ListProps) {
  return (
    <View style={styles.background}>
        <View>
            <FlatList data={props.content} renderItem={({item}) => <Item title={item.title}/>} ListHeaderComponent={<HeaderFlatList title={props.title}/>}/>
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
    backgroundColor: '#E3DEC9',
    marginBottom: 20,
  },
  titleBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "stretch",
    backgroundColor: "#F2F0E4",
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    borderWidth: 2,
    borderColor: "#ACA279",
    width: 250,
  },
  arrow: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
    tintColor: "#3F3C42",
    flex: 0.5,
  },
  title: {
    fontSize: 15,
    color: '#3F3C42',
    alignItems: 'center',
    justifyContent: 'left',
    textAlign: "left",
    flex: 0.5,
    padding: 5,
  },

  itemList: {
      flexDirection: "row",
      alignItems: "flex-start",
      justifyContent: "stretch",
      width: 250,
  },
  itemText: {
      fontSize: 10,
      textAlign: "left",
      flex: 1,
      padding: 5,
      color: "#3F3C42",
  },
});