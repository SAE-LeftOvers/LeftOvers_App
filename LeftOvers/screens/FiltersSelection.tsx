import React from 'react';
import {StyleSheet, View, Text, ScrollView, useWindowDimensions} from 'react-native';
import ProfileModification from '../components/ProfileModification';
import ValidateButton from '../components/ValidateButton';
import TopBar from '../components/TopBar';
import ListSelect from '../components/ListSelect';
import ListWithoutSelect from '../components/ListWithoutSelect';
import ProfileSelection from '../components/ProfileSelection';
import {LinearGradient} from 'expo-linear-gradient';
import {SafeAreaProvider} from 'react-native-safe-area-context';

export default function FiltersSelection(props) {
  const profiles = [
        {name: "Johnny Silverhand", avatar: "plus_small.png", isActive: "flex"},
        {name: "Panam Palmer", avatar: "plus_small.png", isActive: "none"},
        {name: "Goro Takemura", avatar: "plus_small.png", isActive: "none"},
        {name: "David Martinez", avatar: "plus_small.png", isActive: "flex"},
  ]

  let cptActive = 0
  profiles.forEach(function (value) {
    if(value.isActive=="flex"){
        cptActive=cptActive+1
    }
  })

  const die = [{value: "Dairy free"}, {value: "Gluten free"}, {value: "Porkless"}, {value: "Vegan"}, {value: "Vegetarian"}, {value: "Pescatarian"}]

  const allProfiles = [{value: "Skimmed Milk"}, {value: "Nuts"}]
  const dieProfiles = [{value: "Porkless"}, {value: "Pescatarian"}]

  function isInProfileDiets(element, index, array) {
       var retType = true
       dieProfiles.forEach(function (diets) {
          if(diets.value==element.value){
              retType = false
          }
       })
       return retType
    }
  const dieAdd = die.filter(isInProfileDiets);
  const allAdd = []

  return (
    <SafeAreaProvider style={{flex: 1}}>
        <TopBar title="Filters Selection" isVisible="true"/>
        <ScrollView>
            <LinearGradient colors={['#2680AA', '#59BDCD']} style={[styles.linearGradient, {minHeight: useWindowDimensions().height}]}>
                <View style={{marginTop: "6%"}}/>
                <View style={styles.profilesSelection}>
                    <View style={styles.filterBar}>
                        <Text style={styles.filters}>Profiles</Text>
                        <Text style={styles.nbSelected}>{cptActive} selected, 1 waiting</Text>
                    </View>
                    <View style={{marginTop: "3%"}}/>
                    <ProfileSelection listProfile={profiles} disableSelection={false}/>
                    <View style={{marginTop: "4%"}}/>
                    <ValidateButton title="Change Selected Profiles" image="update.png" colour="#59BDCD" backColour="#E3DEC9"></ValidateButton>
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
                    <ListSelect title="Diets" content={dieAdd}></ListSelect>
                    <View style={{marginTop: "3%"}}/>
                    <ListWithoutSelect title="Allergies" content={allAdd}></ListWithoutSelect>
                    <View style={{marginTop: "3%"}}/>
                    <ValidateButton title="Add Allergy" image="plus.png" colour="#59BDCD" backColour="#E3DEC9"></ValidateButton>
                </View>
                <View style={{marginTop: "6%"}}/>
                <ValidateButton title="Save Filters" image="save.png" colour="#ACA279" backColour="#F2F0E4"></ValidateButton>
                <View style={{marginTop: "20%"}}/>
            </LinearGradient>
        </ScrollView>
    </SafeAreaProvider>
  );
}

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
      backgroundColor: '#F2F0E4',
      padding: "3%",
      marginHorizontal: "3%",
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
        color: '#ACA279',
        flex: 1,
  },
  nbSelected: {
        fontSize: 11,
        color: "#3F3C42",
        textAlign: "right",
  },

  profilesSelection: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        backgroundColor: '#F2F0E4',
        marginHorizontal: "3%",
        paddingBottom: "3%",
  },
});