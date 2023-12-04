import React, { useContext, useState } from 'react';
import {StyleSheet, Text, TextInput, View, Image} from 'react-native';

import ValidateButton from './ValidateButton';
import ListSelect from './ListSelect';
import ListWithoutSelect from './ListWithoutSelect';
import ColorContext from '../theme/ColorContext';

type ProfileProps = {
    name: string
    avatar: string
    diets: {value: string}[]
    allergies: {value: string}[]
}

export default function ProfileModification(props: ProfileProps) {
    const [name, onChangeName] = useState(props.name);
    const colors = useContext(ColorContext).colors;

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

    const styles = StyleSheet.create({
        background: {
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 15,
            backgroundColor: colors.cardBackground,
            padding: "3%",
            marginHorizontal: "3%",
            borderWidth: 1,
            borderColor: colors.blocBorder,
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
            borderColor: colors.cardElementBorder,
            borderRadius: 45,
            height: "100%",
            flex: 0.04,
        },
        textInput: {
            fontSize: 15,
            color: colors.cardDetail,
            borderRadius: 10,
            borderWidth: 2,
            borderStyle: 'dashed',
            borderColor: colors.cardElementBorder,
            alignItems: 'center',
            textAlign: 'left',
            flex: 0.8,
            marginLeft: "7%",
            padding: "2%",
        },
        modify: {
            height: "100%",
            tintColor: colors.cardElementBorder,
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
            color: colors.cardElementBorder,
            flex: 1,
        },
    });

    return (
        <View style={styles.background}>
            <View style={styles.pseudoBar}>
                <Image source={imageSource} style={styles.avatar}></Image>
                <TextInput style={styles.textInput} value={name} onChangeText={onChangeName} placeholder="Name"></TextInput>
                <Image source={require("../assets/images/modify.png")} style={styles.modify}></Image>
            </View>
            <View style={styles.filterBar}>
                <Text style={styles.filters}>Filters</Text>
            </View>
            <ListSelect title="Diets" content={props.diets}></ListSelect>
            <View style={{marginTop: "6%"}}/>
            <ListWithoutSelect title="Allergies" content={props.allergies}></ListWithoutSelect>
            <View style={{marginTop: "3%"}}/>
            <ValidateButton title="Add Allergy" image="plus.png" colour={colors.buttonDetail} backColour={colors.buttonBackground} todo={() => console.log("Create Profile...")}/>
        </View>
    );
}

