import React from 'react';
import {StyleSheet, View, Text, Pressable, Image} from 'react-native';
import ProfileModification from '../components/ProfileModification';
import ValidateButton from '../components/ValidateButton';
import TopBar from '../components/TopBar';
import ListSelect from '../components/ListSelect';
import ListWithoutSelect from '../components/ListWithoutSelect';
import ProfileSelection from '../components/ProfileSelection';
import FoodElementText from '../components/FoodElementText';
import {LinearGradient} from 'expo-linear-gradient';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import bracketLeft from '../assets/images/angle_bracket_left.png';
import bracketRight from '../assets/images/angle_bracket_right.png';

export default function HomePage(props) {
  const profiles = [
        {name: "Johnny Silverhand", avatar: "plus_small.png", isActive: "flex"},
        {name: "Panam Palmer", avatar: "plus_small.png", isActive: "none"},
        {name: "Goro Takemura", avatar: "plus_small.png", isActive: "none"},
        {name: "David Martinez", avatar: "plus_small.png", isActive: "flex"},
  ]

  const ingredientList = [{title: "Carrot"}, {title: "Potato"}, {title: "Peach"}]

  const [cpt, setCpt] = React.useState(0);
  const decreaseCounter = () => {
    if (cpt > 0) {
      setCpt(cpt - 1);
    }
    else {
      setCpt(ingredientList.length - 1);
    }
  };
  const increaseCounter = () => {
    if (cpt < ingredientList.length - 1) {
      setCpt(cpt + 1);
    }
    else {
      setCpt(0);
    }
  };

  return (
    <SafeAreaProvider>
        <View style={styles.topBar}>
            <Image source={require("../assets/images/logo.png")} style={{width: 40, height: 40, flex: 0.1, marginLeft: 10}}/>
            <Text style={styles.appName}>LeftOvers</Text>
            <Image source={require("../assets/images/logo.png")} style={{width: 40, height: 40, flex: 0.1, marginRight: 10}}/>
        </View>
        <View style={styles.container}>
            <LinearGradient colors={['#2680AA', '#59BDCD']} style={styles.linearGradient}>
                <View style={{marginTop: 20}}/>
                <View style={styles.welcome}>
                    <View style={{flexDirection: "column", alignItems: "flex-start", justifyContent: "center", width: "100%"}}>
                        <View style={{flexDirection: "row"}}>
                            <Text style={styles.text}>Welcome </Text>
                            <Text style={styles.name}>Rayhân</Text>
                            <Text style={styles.text}>,</Text>
                        </View>
                        <Text style={styles.text}>Glad to see you again!</Text>
                    </View>
                </View>
                <View style={{marginTop: 20}}/>
                <View style={styles.profilesSelection}>
                    <View style={styles.filterBar}>
                        <Text style={styles.filters}>Profiles</Text>
                        <Text style={styles.nbSelected}>2 selected</Text>
                    </View>
                    <View style={{marginTop: 10}}/>
                    <ProfileSelection listProfile={profiles} disableSelection={true}/>
                    <View style={{marginTop: 20}}/>
                    <ValidateButton title="Modify Profiles" image="parameter.png" colour="#59BDCD" backColour="#E3DEC9"/>
                </View>
                <View style={{marginTop: 20}}/>
                <View style={styles.profilesSelection}>
                    <View style={styles.filterBar}>
                        <Text style={styles.filters}>Ingredient Stocks</Text>
                    </View>
                    <View style={{marginTop: 10}}/>
                    <ValidateButton title="Manage Stocks" image="warehouse.png" colour="#59BDCD" backColour="#E3DEC9"/>
                </View>
                <View style={{marginTop: 20}}/>
                <View style={styles.profilesSelection}>
                     <View style={styles.filterBar}>
                         <Text style={styles.filters}>Cooking</Text>
                     </View>
                     <View style={{marginTop: 10}}/>
                     <View style={styles.ingredientSelection}>
                         <Text style={{fontSize: 15, color: "#3F3C42"}}>Selected Ingredient</Text>
                         <View style={{flexDirection: "row", padding: 10, justifyContent: "center", alignItems: "center"}}>
                             <Pressable onPress={decreaseCounter}>
                                 <Image source={bracketLeft} style={{ width: 40, height: 40 }} />
                             </Pressable>
                             <FoodElementText title={ingredientList[cpt].title}/>
                             <Pressable onPress={increaseCounter}>
                                 <Image source={bracketRight} style={{ width: 40, height: 40 }} />
                             </Pressable>
                         </View>
                     </View>
                     <View style={{marginTop: 15}}/>
                     <ValidateButton title="Change Selected Ingredients" image="cook.png" colour="#59BDCD" backColour="#E3DEC9"/>
                     <View style={{marginTop: 10}}/>
                     <ValidateButton title="Search Recipes" image="search.png" colour="#59BDCD" backColour="#E3DEC9"/>
                </View>
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
        padding: 5,
        paddingLeft: 0,
        paddingBottom: 0,
  },
  nbSelected: {
        fontSize: 11,
        color: "#3F3C42",
        textAlign: "right",
  },

  profilesSelection: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        backgroundColor: '#F2F0E4',
        paddingTop: 5,
        marginHorizontal: 10,
  },
  welcome: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        backgroundColor: '#F2F0E4',
        paddingVertical: 10,
        paddingHorizontal: 25,
        marginHorizontal: 10,
  },
  text: {
        fontSize: 20,
        color: '#ACA279',
  },
  name: {
        fontSize: 20,
        fontWeight: "bold",
        color: '#59BDCD',
        textAlign: "left",
  },
  ingredientSelection: {
        flexDirection: 'column',
        width: "90%",
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        backgroundColor: '#E3DEC9',
        borderWidth: 2,
        borderColor: "#ACA279",
        marginHorizontal: 10,
        padding: 5
  },

  appName: {
        fontSize: 20,
        fontWeight: "bold",
        color: '#3F3C42',
        textAlign: "center",
        flex: 0.8,
  },
  topBar: {
        flexDirection: 'row',
        width: "100%",
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F2F0E4',
        padding: 5,
  },
});