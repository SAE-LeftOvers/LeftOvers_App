import React, { useContext, useState } from 'react';
import {StyleSheet, View, ScrollView, useWindowDimensions, TextInput, Image, Text, Pressable} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ValidateButton from '../components/ValidateButton';
import ColorContext from '../theme/ColorContext';
import ListWithoutSelect from '../components/ListWithoutSelect';
import ListSelect from '../components/ListSelect';
import AsyncStorage from '@react-native-async-storage/async-storage';
import EventEmitter from './EventEmitter';
import * as ImagePicker from 'expo-image-picker';


export default function CreateProfile(props) {
    const { colors } = useContext(ColorContext)
    const all = []
    const die = [{value: "Dairy free"}, {value: "Gluten free"}, {value: "Porkless"}, {value: "Vegan"}, {value: "Vegetarian"}, {value: "Pescatarian"}]
    const [name, onChangeName] = useState();
    const [avatar, setAvatar] = useState<string>('');
    const [selectedDiets, setSelectedDiets] = useState([]);

    const handleSelectedDiets = (selectedValues) => {
        setSelectedDiets(selectedValues);
    };

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
      
        console.log(result);
      
        if (!result.canceled) {
          setAvatar(result.assets[0].uri);
        }
      };


    let imageSource
    if (props.avatar == ""){
        imageSource = require("../assets/images/logo.png")
    }
    else{
        imageSource = {uri: avatar}
    }

    const handleCreateProfile = async () => {
        try {
          // Ton code pour récupérer les profils existants et ajouter un nouveau profil
          const newProfile = {
            name: name,
            avatar: avatar,
            diets: selectedDiets,
            allergies: all,
            isActive: "flex",
          };
      
          // Mettre à jour AsyncStorage avec le nouveau profil
          let existingProfiles = await AsyncStorage.getItem('profiles');
          existingProfiles = existingProfiles ? JSON.parse(existingProfiles) : [];
          const updatedProfiles = [...existingProfiles, newProfile];
          await AsyncStorage.setItem('profiles', JSON.stringify(updatedProfiles));
          EventEmitter.emit('profileAdded');
          console.log('Profil créé :', newProfile);
          props.navigation.goBack();
        } catch (error) {
          console.error('Erreur lors de la création du profil :', error);
        }
      };
    
    const styles = StyleSheet.create({
        linearGradient: {
            height: "100%",
            width: "100%",
            flex: 1,
            padding: "2%",
            paddingTop: 0,
        },background: {
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
            minHeight: 35,
            flex: 0.04,
        },
        textInput: {
            fontSize: 15,
            color: colors.cardTitle,
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
        nbSelected: {
            fontSize: 11,
            color: colors.cardDetail,
            textAlign: "right",
        }
    });

    return (
        <SafeAreaProvider style={{flex: 1}}>
            <ScrollView>
                <LinearGradient colors={[colors.primary, colors.primaryComplement]} style={[styles.linearGradient, {minHeight: useWindowDimensions().height}]}>
                    <View style={{marginTop: "6%"}}/>
                        <View style={styles.background}>
                            <View style={styles.pseudoBar}>
                                <Pressable onPress={pickImage}>
                                    <Image source={imageSource} style={styles.avatar}></Image>
                                </Pressable>
                                <TextInput style={styles.textInput} value={name} onChangeText={onChangeName} placeholder="Name"></TextInput>
                            </View>
                            <View style={styles.filterBar}>
                                <Text style={styles.filters}>Filters</Text>
                            </View>
                            <ListSelect title="Diets" content={die} setSelected={handleSelectedDiets}></ListSelect>
                            <View style={{marginTop: "6%"}}/>
                            <ListWithoutSelect title="Allergies" content={all}></ListWithoutSelect>
                            <View style={{marginTop: "3%"}}/>
                        </View>
                    <View style={{marginTop: "3%"}}/>
                    <ValidateButton title="Create Profile" image="plus.png" colour={colors.buttonMain} backColour={colors.cardBackground} todo={handleCreateProfile}></ValidateButton>
                    <View style={{marginTop: "20%"}}/>
                </LinearGradient>
            </ScrollView>
        </SafeAreaProvider>
    );
}

