import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, View, Modal, Pressable, Text, Image, ScrollView, useWindowDimensions } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import ProfileDetails from '../components/ProfileDetails';
import ProfileDelete from '../components/ProfileDelete';
import ColorContext from '../theme/ColorContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import  EventEmitter  from './EventEmitter';
import Profil from '../Models/Profil';
import { PaperProvider, Portal } from 'react-native-paper';
import ProfileService from '../Services/Profiles/ProfileService';

export default function Profiles({navigation, props}) {
    const colors = useContext(ColorContext).colors
    const profile_service = new ProfileService()

    const all = []
    const die = [{value: "Dairy free"}, {value: "Gluten free"}, {value: "Porkless"}, {value: "Vegan"}, {value: "Vegetarian"}, {value: "Pescatarian"}]

    const [visible, setVisible] = useState(false);
    const [opacity, setOpacity] = useState(1);
    const [profiles, setProfiles] = useState([]);
    const [selectedProfileIndex, setSelectedProfileIndex] = useState(null);

    const raisePopUp = (index) => {
        setSelectedProfileIndex(index)
        setVisible(true)
    }
    const erasePopUp = () => {
        setVisible(false)
    }

    const handleDeleteProfiles = async () => {
        try {
          await AsyncStorage.removeItem('profiles');
          console.log('Données supprimées avec succès !');
        } catch (error) {
          console.error('Erreur lors de la suppression des données :', error);
        }
    };

    const handleDeleteProfile = async (index) => {
        try {
            await profile_service.delProfile(profiles[index].name)
            fetchProfiles();
            setSelectedProfileIndex(index);
            erasePopUp();
        } catch (error) {
            console.error('Erreur lors de la suppression du profil :', error);
        }
    };

    const confirmDelete = () => {
        erasePopUp();
    };

    const handleGetProfiles = async () => {
        try {
            const results = await profile_service.getProfiles()
            return results
        } catch (error) {
            console.log("ça maaaaaaaaarche poaaaaaaaaaaaas");
            return [];
        }
    }

    const fetchProfiles = async () => {
        const existingProfiles = await handleGetProfiles();
        setProfiles(existingProfiles);
    };

    const subscription = EventEmitter.addListener('profileAdded', async () => {
        fetchProfiles();
    });

    useEffect(() => {
        fetchProfiles();
    }, []);

    const containerStyle = {
        height: "75%",
        width: "100%",
      };    
      const styles = StyleSheet.create({
        container: {
            height: "100%",
            width: "100%",
            flex: 1,
            backgroundColor: '#3F3C42',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 10,
        },
        linearGradient: {
            height: "100%",
            width: "100%",
            flex: 1,
            padding: 10,
            paddingTop: 0,
        },
        separator: {
            marginTop: "6%"
        },

        modal: {
            position: 'absolute',
            top: '0%',
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
        },
        viewModal: {
            flexDirection: "column",
            padding: "3%",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            flex: 1,
        },

        profileValidation: {
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "6%",
            flex: 0.7,
        },
        decisionBarVertical: {
            flexDirection: "column",
            width: "90%",
            padding: "3%",
            borderRadius: 15,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: colors.cardBackground,
            borderWidth: 1,
            borderColor: colors.blocBorder,
        },
        validationQuestion: {
            fontSize: 20,
            color: colors.cardElementBorder,
            alignItems: 'center',
            justifyContent: 'center',
            flex: 0.3,
            marginBottom: "2%",
            marginHorizontal: "2%",
        },
        decisionBar: {
            flexDirection: "row",
            flex: 0.7,
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
        },
        yesButton: {
            flexDirection: "row",
            flex: 0.5,
            padding: "2%",
            marginHorizontal: "5%",
            width: "90%",
            borderRadius: 20,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: colors.yesButton,
        },
        yesText: {
            fontSize: 20,
            color: '#3F3C42',
            alignItems: 'center',
            justifyContent: 'center',
            flex: 0.7,
            padding: "4%",
        },
        noButton: {
            flexDirection: "row",
            flex: 0.5,
            padding: "2%",
            marginHorizontal: "5%",
            width: "90%",
            borderRadius: 20,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#8A0000",
        },
        noText: {
            fontSize: 20,
            color: '#F2F0E4',
            alignItems: 'center',
            justifyContent: 'center',
            flex: 0.7,
            padding: "4%",
        },
    });

    const profileComponents = profiles.map((profile, index) => (
        <View key={index}>
          <ProfileDetails
                name={profile._name}
                avatar={profile._avatar}
                diets={profile._diets}
                allergies={profile._allergy}
                onDeleteProfile={() => raisePopUp(index)}
            />
            <Portal>
                <Modal visible={visible} onDismiss={erasePopUp} contentContainerStyle={containerStyle} style={{marginTop: 0, justifyContent: "flex-start"}}>
                    <View style={styles.modal}>
                        <View style={styles.viewModal}>
                            <View style={styles.profileValidation}>
                            {/* <ProfileDelete
                                    name={profiles[selectedProfileIndex].name}
                                    avatar={profiles[selectedProfileIndex].avatar}
                                    diets={profiles[selectedProfileIndex].diets}
                                    allergies={profiles[selectedProfileIndex].allergies}
                            /> */}
                            </View>
                            <View style={styles.decisionBarVertical}>
                                <Text style={styles.validationQuestion}>Do you really want to delete this profile?</Text>
                                <View style={styles.decisionBar}>
                                    <Pressable onPress={() => handleDeleteProfile(selectedProfileIndex)} style={{flex:0.5}}>
                                        <View style={styles.yesButton}>
                                            <Image source={require("../assets/images/validate.png")} style={{tintColor: "#2DE04A", height: "100%", flex: 0.2, margin: "5%", resizeMode: "contain"}}/>
                                            <Text style={styles.yesText}>Yes</Text>
                                        </View>
                                    </Pressable>
                                    <Pressable onPress={erasePopUp} style={{flex:0.5}}>
                                        <View style={styles.noButton}>
                                            <Image source={require("../assets/images/cross.png")} style={{tintColor: "#E02D2D", height: "100%", flex: 0.2, margin: "5%", resizeMode: "contain"}}/>
                                            <Text style={styles.noText}>No</Text>
                                        </View>
                                    </Pressable>
                                </View>
                            </View>
                        </View>
                    </View>
                </Modal>
            </Portal>
          {index < profiles.length - 1 && <View style={styles.separator} />}
        </View>
    ));



    return (
        <SafeAreaProvider style={{flex: 1}}>
        <PaperProvider>
            <ScrollView>
                <LinearGradient colors={[colors.primary, colors.primaryComplement]} style={[styles.linearGradient, {minHeight: useWindowDimensions().height}]}>
                    <View style={styles.separator}/>
                    {profileComponents}
                    <View style={{marginBottom: "20%"}}/>
                </LinearGradient>
            </ScrollView>

        </PaperProvider>
    </SafeAreaProvider>
    );
    }