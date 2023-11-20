import {React, useState} from 'react';
import {StyleSheet,Pressable, Text, View, Image} from 'react-native';

type Profile = {
  name: string
  avatar: string
  isActive: string
  disableSelection: boolean
}

export default function ProfileElement(props : Profile) {
  const [waiting, setWaiting] = useState("none")
  const [separator, setSeparator] = useState("none")
  const changeStatus = () => {
      if (props.disableSelection){
          setWaiting("none")
      }
      else if (waiting == "flex"){
          setWaiting("none")
      }
      else{
          setWaiting("flex")
      }
      if (props.isActive == "flex" && waiting == "none"){
          setSeparator("flex")
      }
      else{
          setSeparator("none")
      }
      console.log(waiting, separator, props.name)
  };
  return (
      <Pressable onPress={changeStatus} style={styles.button}>
          <View style={{flexDirection: "column"}}>
              <View style={styles.pseudoBar}>
                  <Image source={require("../assets/images/"+props.avatar)} style={styles.avatar}></Image>
                  <Text style={styles.text}>{props.name}</Text>
              </View>
              <View style={styles.pseudoBar}>
                  <View style={[styles.active, {display: props.isActive}]}>
                      <Text style={styles.textActive}>Activated</Text>
                  </View>
                  <View style={{flex: 0.3, display: separator}}/>
                  <View style={[styles.waiting, {display: waiting}]}>
                      <Text style={styles.textWaiting}>Waiting...</Text>
                  </View>
              </View>
          </View>
      </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: 80,
    //width: "75%",
    marginVertical: 15,
  },
  pseudoBar: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      //width: "120%",
      width: 225,
      marginHorizontal: 10,
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
      fontSize: 15,
      color: '#ACA279',
      alignItems: 'center',
      justifyContent: 'left',
      flex: 0.8,
      marginLeft: 20,
      padding: 5,
      width: "100%"
  },

  active: {
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "#59BDCD",
    padding: 5,
  },
  textActive: {
    fontSize: 10,
    color: "#59BDCD",
  },

  waiting: {
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "#ACA279",
    padding: 5,
  },
  textWaiting: {
    fontSize: 10,
    color: "#ACA279",
  },
});