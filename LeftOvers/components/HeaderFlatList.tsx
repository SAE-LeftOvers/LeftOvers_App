import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

type TitleProps = {
    title: string
}

export default function ListTab(props: TitleProps) {
  return (
    <View style={styles.titleBar}>
        <Text style={styles.title}>{props.title}</Text>
        <Image source={require("../assets/images/arrow.png")} style={styles.arrow}></Image>
    </View>
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
    borderWidth: 2,
    borderColor: "#ACA279",
    width: 330,
  },
  arrow: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
    tintColor: "#3F3C42",
    flex: 0.1,
  },
  title: {
    fontSize: 12,
    color: '#3F3C42',
    alignItems: 'center',
    justifyContent: 'left',
    textAlign: "left",
    flex: 0.9,
    padding: 5,
  },
});