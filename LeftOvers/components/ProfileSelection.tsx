import React, { useContext, useState } from 'react';
import {View, StyleSheet, Pressable, Image} from 'react-native';

import ProfileElement from './ProfileElement'
import ColorContext from '../theme/ColorContext';

import bracketLeft from '../assets/images/angle_bracket_left.png';
import bracketRight from '../assets/images/angle_bracket_right.png';

type ProfileSelectionProps = {
    listProfile: Profile[]
    disableSelection: boolean
    changeStatusWaiting: (number) => void
}

type Profile = {
    name: string
    avatar: string
    isActive: string
    isWaiting: string
}

export default function ProfileSelection(props: ProfileSelectionProps) {
    const colors = useContext(ColorContext).colors;
    const [cpt, setCpt] = useState(0);
    const [separator, setSeparator] = useState("none")
    
    const decreaseCounter = () => {
        let index = props.listProfile.length - 1
        if (cpt > 0) {
            setCpt(cpt - 1);
            index = cpt - 1
        }
        else {
            setCpt(props.listProfile.length - 1);
        }
        changeSeparator(index)
    };
    const increaseCounter = () => {
        let index = 0
        if (cpt < props.listProfile.length - 1) {
            setCpt(cpt + 1);
            index = cpt+1
        }
        else {
            setCpt(0);
        }
        changeSeparator(index)
    };

    const changeSeparator = (index) => {
        if (props.disableSelection){
            setSeparator("none")
        }
        else if (props.listProfile[index].isActive == "flex" && props.listProfile[index].isWaiting == "flex"){
            setSeparator("flex")
        }
        else{
            setSeparator("none")
        }
    }

    const changeStatus = () => {
        props.changeStatusWaiting(cpt)
        changeSeparator(cpt)
    }

    const styles = StyleSheet.create({
        background: {
            width: "92%",
            height: 80,
            borderRadius: 20,
            borderWidth: 2,
            borderColor: colors.carrouselText,
            backgroundColor: colors.carrouselBackground,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
        },
    });

    return (
        <View style={styles.background}>
              <Pressable onPress={decreaseCounter}>
                  <Image source={bracketLeft} style={{width: 40, height: 40, resizeMode: "contain"}} tintColor={colors.carrouselText}/>
              </Pressable>
              <ProfileElement name={props.listProfile[cpt].name} avatar={props.listProfile[cpt].avatar} isActive={props.listProfile[cpt].isActive} isWaiting={props.listProfile[cpt].isWaiting} disableSelection={props.disableSelection} changeStatusWaiting={changeStatus} separatorDisplay={separator}/>
              <Pressable onPress={increaseCounter}>
                  <Image source={bracketRight} style={{width: 40, height: 40, resizeMode: "contain"}} tintColor={colors.carrouselText}/>
              </Pressable>
        </View>
    );
}