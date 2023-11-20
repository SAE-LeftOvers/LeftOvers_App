import {React, useState} from 'react';
import {View, StyleSheet, Pressable, Image, Text} from 'react-native';
import bracketLeft from '../assets/images/angle_bracket_left.png';
import bracketRight from '../assets/images/angle_bracket_right.png';
import ProfileElement from './ProfileElement'

type ProfileSelectionProps = {
  listProfile: Profile[]
  disableSelection: boolean
}

type Profile = {
    name: string
    avatar: string
    isActive: boolean
}

export default function ProfileSelection(props: ProfileSelectionProps) {
  const [cpt, setCpt] = useState(0);
  const decreaseCounter = () => {
    if (cpt > 0) {
      setCpt(cpt - 1);
    }
    else {
      setCpt(props.listProfile.length - 1);
    }
  };
  const increaseCounter = () => {
    if (cpt < props.listProfile.length - 1) {
      setCpt(cpt + 1);
    }
    else {
      setCpt(0);
    }
  };

  return (
      <View style={styles.background}>
          <Pressable onPress={decreaseCounter} style={{}}>
             <Image source={bracketLeft} style={{ width: 40, height: 40 }} />
          </Pressable>
          <ProfileElement name={props.listProfile[cpt].name} avatar={props.listProfile[cpt].avatar} isActive={props.listProfile[cpt].isActive} disableSelection={props.disableSelection}/>
          <Pressable onPress={increaseCounter} style={{}}>
             <Image source={bracketRight} style={{ width: 40, height: 40 }} />
          </Pressable>
      </View>
  );
}

const styles = StyleSheet.create({
  background: {
    //height: 120,
    height: 100,
    borderRadius: 20,
    marginHorizontal: 10,
    borderWidth: 2,
    borderColor: '#ACA279',
    backgroundColor: '#E3DEC9',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});