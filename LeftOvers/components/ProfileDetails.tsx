import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';

import ListWithoutSelect from './ListWithoutSelect';
import ColorContext from '../theme/ColorContext';

type ProfileProps = {
    name: string
    avatar: string
    diets: string[]
    allergies: string[]
    onModification: () => void
    onDeleteProfile: () => void
}

export default function ProfileDetails(props) {
    const { colors } = useContext(ColorContext)
    const [display, setDisplay] = useState("none")
    const changeListVisibility = () => {
        if (display == "none"){
            setDisplay("flex")
        }
        else{
            setDisplay("none")
        }
    };

    let imageSource
    if (props.avatar == ""){
        imageSource = require("../assets/images/logo.png")
    }
    else{
        imageSource = {uri: props.avatar}
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
            flex: 0.03,
        },
        text: {
            flex: 1,
            fontSize: 20,
            color: colors.cardElementBorder,
            alignItems: 'center',
            textAlign: 'left',
            marginLeft: "3%",
            padding: "2%",
            height: "100%",
        },
        modify: {
            height: "100%",
            width: "100%",
            tintColor: colors.cardElementBorder,
            resizeMode: 'contain',
            flex: 1,
        },
        delete: {
            height: "100%",
            width: "100%",
            tintColor: colors.cardElementBorder,
            resizeMode: 'contain',
            flex: 1,
        },
    
        filterBar: {
            flexDirection: "row",
            width: "85%",
            paddingTop: "3%",
            paddingBottom: "1%",
            alignItems: "flex-end",
            justifyContent: "center",
            flex: 1,
        },
        filters: {
            fontSize: 20,
            color: colors.cardElementBorder,
            flex: 1,
            padding: "2%",
            paddingLeft: 0,
            paddingBottom: 0,
        },
        nbSelected: {
            fontSize: 11,
            flex: 1,
            color: colors.cardDetail,
            textAlign: "right",
            marginRight: "3%",
        },
        arrow: {
            height: "100%",
            resizeMode: 'contain',
            tintColor: colors.cardDetail,
            flex: 0.1,
        },
    });

    return (
        <View style={styles.background}>
            <View style={styles.pseudoBar}>
                <Image source={imageSource} style={styles.avatar}></Image>
                <Text style={styles.text}>{props.name}</Text>
                <Pressable onPress={props.onModification} style={{flex: 0.1, marginRight: "1%",}}>
                    <Image source={require("../assets/images/modify.png")} style={styles.modify}></Image>
                </Pressable>
                <Pressable onPress={props.onDeleteProfile} style={{flex: 0.1, marginLeft: "1%",}}>
                    <Image source={require("../assets/images/delete.png")} style={styles.delete}></Image>
                </Pressable>
            </View>
            <Pressable onPress={changeListVisibility} style={{height: "5%", marginTop: "6%", flex: 1, marginBottom: "3%"}}>
                <View style={styles.filterBar}>
                    <Text style={styles.filters}>Filters</Text>
                    <Text style={styles.nbSelected}>{props.diets.length} diets selected</Text>
                    <Image source={require("../assets/images/arrow.png")} style={styles.arrow}></Image>
                </View>
            </Pressable>
            <View style={{display: display === 'flex' ? 'flex' : 'none', alignItems: "center", justifyContent: "center"}}>
                <ListWithoutSelect title="Diets" content={props.diets}></ListWithoutSelect>
                <View style={{marginTop: "3%"}}/>
                <ListWithoutSelect title="Allergies" content={props.allergies}></ListWithoutSelect>
                <View style={{marginTop: "3%"}}/>
            </View>
        </View>
    );
}

