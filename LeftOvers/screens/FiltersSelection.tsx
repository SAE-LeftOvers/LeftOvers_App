import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
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

  const die = [{value: "Dairy free"}, {value: "Gluten free"}, {value: "Porkless"}, {value: "Vegan"}, {value: "Vegetarian"}, {value: "Pescatarian"}]

  const allProfiles = [{value: "Skimmed Milk"}, {value: "Nuts"}]
  const dieProfiles = [{value: "Porkless"}, {value: "Pescatarian"}]

  const dieAdd = []
  const allAdd = []

  return (
    <SafeAreaProvider>
        <TopBar title="Filters Selection" isVisible="true"/>
        <View style={styles.container}>
            <LinearGradient colors={['#2680AA', '#59BDCD']} style={styles.linearGradient}>
                <View style={{marginTop: 20}}/>
                <View style={styles.profilesSelection}>
                    <View style={styles.filterBar}>
                        <Text style={styles.filters}>Filters</Text>
                        <Text style={styles.nbSelected}>2 selected, 1 waiting</Text>
                    </View>
                    <View style={{marginTop: 10}}/>
                    <ProfileSelection listProfile={profiles}/>
                    <View style={{marginTop: 20}}/>
                    <ValidateButton title="Change Selected Profiles" image="update.png" colour="#59BDCD" backColour="#E3DEC9"></ValidateButton>
                </View>
                <View style={{marginTop: 20}}/>
                <View style={styles.background}>
                    <View style={styles.filterBar}>
                        <Text style={styles.filters}>Filters from Profiles</Text>
                    </View>
                    <ListWithoutSelect title="Diets" content={dieProfiles}></ListWithoutSelect>
                    <View style={{marginTop: 10}}/>
                    <ListWithoutSelect title="Allergies" content={allProfiles}></ListWithoutSelect>
                </View>
                <View style={{marginTop: 20}}/>
                <View style={styles.background}>
                    <View style={styles.filterBar}>
                        <Text style={styles.filters}>Additional Filters</Text>
                        <Text style={styles.nbSelected}>3 selected</Text>
                    </View>
                    <ListSelect title="Diets" content={dieAdd}></ListSelect>
                    <View style={{marginTop: 10}}/>
                    <ListWithoutSelect title="Allergies" content={allAdd}></ListWithoutSelect>
                    <View style={{marginTop: 10}}/>
                    <ValidateButton title="Add Allergy" image="plus.png" colour="#59BDCD" backColour="#E3DEC9"></ValidateButton>
                </View>
                <View style={{marginTop: 20}}/>
                <ValidateButton title="Save Filters" image="save.png" colour="#ACA279" backColour="#F2F0E4"></ValidateButton>
            </LinearGradient>
        </View>
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
    padding: 10,
    paddingTop: 0,
  },

  background: {
      //maxWidth: 370,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 20,
      backgroundColor: '#F2F0E4',
      padding: 10,
      paddingBottom: 0,
      marginHorizontal: 10,
  },
  filterBar: {
        flexDirection: "row",
        width: 300,
        paddingTop: 10,
        paddingBottom: 5,
        alignItems: "flex-end",
        justifyContent: "center",
        flex: 0.2,
  },
  filters: {
        flex: 0.8,
        fontSize: 20,
        color: '#ACA279',
        flex: 1,
        padding: 5,
        paddingLeft: 0,
        paddingBottom: 0,
  },
  nbSelected: {
        fontSize: 11,
        //flex: 0.2,
        color: "#3F3C42",
        textAlign: "right",
  },

  profilesSelection: {
        //maxWidth: 370,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        backgroundColor: '#F2F0E4',
        padding: 10,
        //paddingBottom: 0,
        marginHorizontal: 10,
  },
});