import React from 'react';
import {StyleSheet, Pressable, Text, View} from 'react-native';


interface CustomButtonProps {
  title  : string
}

export default function CustomButton(props: CustomButtonProps) {
  return (
    <Pressable style={styles.button}>
      <View style={styles.view}>
        <Text style={styles.text}>{props.title}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width : 150,
    height: 40,
    borderRadius: 4,
    backgroundColor: '#F2F0E4',
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#ACA279',
  },
  view: {
    width : 145,
    height: 35,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#ACA279',
    alignItems: 'center',
    justifyContent: 'center',
    margin: "1%",
  },
});

