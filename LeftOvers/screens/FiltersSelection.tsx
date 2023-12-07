import React, {useContext, useState, useEffect} from 'react';
import {StyleSheet, View, Text, ScrollView, useWindowDimensions} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import ValidateButton from '../components/ValidateButton';
import ListSelect from '../components/ListSelect';
import ListWithoutSelect from '../components/ListWithoutSelect';
import ProfileSelection from '../components/ProfileSelection';
import ColorContext from '../theme/ColorContext';
import EventEmitter from './EventEmitter';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function FiltersSelection(props) {
  const {colors} = useContext(ColorContext);
  const profilesHand = [
        {name: "None", avatar: "logo.png", isActive: "none", isWaiting: "none"},
  ]

  const [profiles, setProfiles] = useState(profilesHand);

  const handleGetProfiles = async () => {
    try {
        const existingProfiles = await AsyncStorage.getItem('profiles');
        return JSON.parse(existingProfiles) || [];
    } catch (error) {
        console.log("Error occured during GetProfiles", error);
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

  const handleSaveSelectedProfiles = async () => {
    try {
        profiles.forEach((val) => {
          if(val.isWaiting == "flex"){
            if(val.isActive == "none"){
              val.isActive = "flex"
            }
            else{
              val.isActive = "none"
            }
          }
          val.isWaiting = "none"
        })
        await AsyncStorage.setItem('profiles', JSON.stringify(profiles));
        EventEmitter.emit('selectedProfilesUpdated');
        fetchProfiles();
    } catch (error) {
        console.error('Error occured when updating active profiles:', error);
    }
  };

  const subscriptionUpdateSelectedProfiles = EventEmitter.addListener('selectedProfilesUpdated', async () => {
      fetchProfiles();
  });

  const changeStatusWaiting = (cpt) => {
    if(profiles[cpt].isWaiting == "none"){
      profiles[cpt].isWaiting = "flex"
    }
    else{
      profiles[cpt].isWaiting = "none"
    }
    handleSaveWaiting()
    EventEmitter.emit("changeSeparatorStatus")
  }

  const handleSaveWaiting = async () => {
    try {
        await AsyncStorage.setItem('profiles', JSON.stringify(profiles));
        fetchProfiles();
    } catch (error) {
        console.error('Error occured when updating waiting profiles:', error);
    }
  };

  let cptActive = 0
  const updateCptActive = () => {
    cptActive = 0
    profiles.forEach(function (value) {
    if(value.isActive=="flex"){
        cptActive=cptActive+1
    }
  })}
  let cptWaiting = 0
  const updateCptWaiting = () => {
    cptWaiting = 0
    profiles.forEach(function (value) {
    if(value.isWaiting=="flex"){
        cptWaiting=cptWaiting+1
    }
  })}
  updateCptActive()
  updateCptWaiting()

  const die = [{value: "Dairy free"}, {value: "Gluten free"}, {value: "Porkless"}, {value: "Vegan"}, {value: "Vegetarian"}, {value: "Pescatarian"}]

  const allProfiles = [{value: "Skimmed Milk"}, {value: "Nuts"}]
  const dieProfiles = [{value: "Porkless"}, {value: "Pescatarian"}]

  function isInProfileDiets(element, index, array) {
       let retType = true
       dieProfiles.forEach(function (diets) {
            if(diets.value==element.value){
                retType = false
            }
       })
       return retType
    }
  const dieAdd = die.filter(isInProfileDiets);
  const allAdd = []

    const [selectedDiets, setSelectedDiets] = useState([]);

    const handleSelectedDiets = (selectedValues) => {
        setSelectedDiets(selectedValues);
    };

  const styles = StyleSheet.create({
    container: {
      height: "100%",
      width: "100%",
      flex: 1,
      backgroundColor: '#3F3C42',
      alignItems: 'center',
      justifyContent: 'center',
    },
    linearGradient: {
      height: "100%",
      width: "100%",
      flex: 1,
      padding: "2%",
      paddingTop: 0,
    },

    background: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        backgroundColor: colors.cardBackground,
        padding: "3%",
        marginHorizontal: "3%",
        borderWidth: 1,
        borderColor: colors.blocBorder,
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
    },

    profilesSelection: {
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 20,
          backgroundColor: colors.cardBackground,
          marginHorizontal: "3%",
          paddingBottom: "3%",
          borderWidth: 1,
          borderColor: colors.blocBorder,
    },
  });

  const goBack = () => props.navigation.goBack();

  return (
    <SafeAreaProvider style={{flex: 1}}>
        <ScrollView>
            <LinearGradient colors={[colors.primary, colors.primaryComplement]} style={[styles.linearGradient, {minHeight: useWindowDimensions().height}]}>
                <View style={{marginTop: "6%"}}/>
                <View style={styles.profilesSelection}>
                    <View style={styles.filterBar}>
                        <Text style={styles.filters}>Profiles</Text>
                        <Text style={styles.nbSelected}>{cptActive} selected, {cptWaiting} waiting</Text>
                    </View>
                    <View style={{marginTop: "3%"}}/>
                    <ProfileSelection listProfile={profiles} disableSelection={false} changeStatusWaiting={changeStatusWaiting}/>
                    <View style={{marginTop: "4%"}}/>
                    <ValidateButton title="Validate Selected Profiles" image="validate.png" colour={colors.buttonDetail} backColour={colors.buttonBackground} todo={handleSaveSelectedProfiles}></ValidateButton>
                </View>
                <View style={{marginTop: "6%"}}/>
                <View style={styles.background}>
                    <View style={styles.filterBar}>
                        <Text style={styles.filters}>Filters from Profiles</Text>
                    </View>
                    <ListWithoutSelect title="Diets" content={dieProfiles}></ListWithoutSelect>
                    <View style={{marginTop: "3%"}}/>
                    <ListWithoutSelect title="Allergies" content={allProfiles}></ListWithoutSelect>
                </View>
                <View style={{marginTop: "6%"}}/>
                <View style={styles.background}>
                    <View style={styles.filterBar}>
                        <Text style={styles.filters}>Additional Filters</Text>
                        <Text style={styles.nbSelected}>{dieAdd.length} available</Text>
                    </View>
                    <ListSelect title="Diets" content={dieAdd} setSelected={handleSelectedDiets}/>
                    <View style={{marginTop: "3%"}}/>
                    <ListWithoutSelect title="Allergies" content={allAdd}></ListWithoutSelect>
                    <View style={{marginTop: "3%"}}/>
                    <ValidateButton title="Add Allergy" image="plus.png" colour={colors.buttonDetail} backColour={colors.buttonBackground} todo={() => props.navigation.navigate("IngredientSelection")}></ValidateButton>
                </View>
                <View style={{marginTop: "6%"}}/>
                <ValidateButton title="Save Filters" image="save.png" colour={colors.buttonMain} backColour={colors.cardBackground} todo={goBack}></ValidateButton>
                <View style={{marginTop: "20%"}}/>
            </LinearGradient>
        </ScrollView>
    </SafeAreaProvider>
  );
}