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
    {name: "None", avatar: "logo.png", diets: [], allergies: [], isActive: "none", isWaiting: "none"},
  ]
  const die = [{value: "Dairy free"}, {value: "Gluten free"}, {value: "Porkless"}, {value: "Vegan"}, {value: "Vegetarian"}, {value: "Pescatarian"}]

  const [profiles, setProfiles] = useState(profilesHand);
  const [dieProfiles, setDieProfiles] = useState([])
  const [allProfiles, setAllProfiles] = useState([])
  const [dieAdd, setDieAdd] = useState([])
  const [allAdd, setAllAdd] = useState([])
  const [selectedDiets, setSelectedDiets] = useState([])
  let isProfileAdded = false, isUpdateDietsAllergies = false, isSelectedProfilesUpdated = false

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
      const existingProfiles = await handleGetProfiles()
      if(existingProfiles.length != 0){
        setProfiles(existingProfiles)
      }
      else{
        setProfiles(profilesHand)
      }
  };

  const subscriptionAddProfile = EventEmitter.addListener('profileAdded', async () => {
      fetchProfiles()
      console.log("Technique de Shinobi Anti-CodeSmell", selectedDiets)
      isProfileAdded = true
      subscriptionAddProfile.remove()
      EventEmitter.removeAllListeners('profileAdded')
      EventEmitter.removeAllListeners('updateDietsAllergies')
      EventEmitter.removeAllListeners('selectedProfilesUpdated')
  });

  const subscriptionUpdateDietsAllergies = EventEmitter.addListener('updateDietsAllergies', async() => {
    setDieAdd(die.filter(isInProfileDiets))
    setAllAdd([])
    isUpdateDietsAllergies = true
    subscriptionUpdateDietsAllergies.remove()
    subscriptionUpdateProfiles.remove();
    EventEmitter.removeAllListeners('updateDietsAllergies')
  })

  useEffect(() => {
    fetchProfiles()
  }, []);

  async function handleSaveSelectedProfiles(){
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
        fetchProfiles()
        EventEmitter.emit("selectedProfilesUpdated")
    } catch (error) {
        console.error('Error occured when updating active profiles:', error);
    }
  };

  const subscriptionUpdateProfiles = EventEmitter.addListener('selectedProfilesUpdated', async () => {
      updateDiets()
      updateAllergies()
      EventEmitter.emit("updateDietsAllergies")
      isSelectedProfilesUpdated = true
      console.log("Filters Selection: ---------------------------------------------------")
      subscriptionUpdateProfiles.remove();
      EventEmitter.removeAllListeners('profileAdded')
      EventEmitter.removeAllListeners('updateDietsAllergies')
      EventEmitter.removeAllListeners('selectedProfilesUpdated')
  });

  const updateDiets = () => {
    let dieTemp = []
    let retType = true
    profiles.forEach((profile) => {
      if(profile.isActive == "flex"){
        profile.diets.forEach((diet) => {
          retType = true
          dieTemp.forEach((val) => {
            if(val == diet){
              retType = false
            }
          })
          if(retType){
            dieTemp.push(diet)
          }
        })
      }
    })
    setDieProfiles(dieTemp)
  }

  const updateAllergies = () => {
    let allTemp = []
    let retType = true
    profiles.forEach((profile) => {
      if(profile.isActive == "flex"){
        profile.allergies.forEach((allergy) => {
          retType = true
          allTemp.forEach((val) => {
            if(val == allergy){
              retType = false
            }
          })
          if(retType){
            allTemp.push(allergy)
          }
        })
      }
    })
    setAllProfiles(allTemp)
  }

  const changeStatusWaiting = (cpt) => {
    if(profiles[cpt].isWaiting == "none"){
      profiles[cpt].isWaiting = "flex"
    }
    else{
      profiles[cpt].isWaiting = "none"
    }
    handleSaveWaiting()
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

  function isInProfileDiets(element) {
    let retType = true
    dieProfiles.forEach((diet) => {
      if(diet==element.value){
        retType = false
      }
    })
    return retType
  }

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

  if(isProfileAdded){
    //EventEmitter.removeAllListeners('profileAdded')
    //EventEmitter.removeAllListeners('updateDietsAllergies')
    //EventEmitter.removeAllListeners('selectedProfilesUpdated')
  }
  if(isUpdateDietsAllergies){
    //EventEmitter.removeAllListeners('profileAdded')
    //EventEmitter.removeAllListeners('updateDietsAllergies')
    //EventEmitter.removeAllListeners('selectedProfilesUpdated')
  }
  if(isSelectedProfilesUpdated){
    //EventEmitter.removeAllListeners('profileAdded')
    //EventEmitter.removeAllListeners('updateDietsAllergies')
    //EventEmitter.removeAllListeners('selectedProfilesUpdated')
  }

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
                    <ListSelect title="Additional Diets" content={dieAdd} setSelected={handleSelectedDiets}/>
                    <View style={{marginTop: "3%"}}/>
                    <ListWithoutSelect title="Additional Allergies" content={allAdd}></ListWithoutSelect>
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