import React from 'react';
import { useState } from 'react';
import { StyleSheet, View, Modal, Pressable, Text, Image, ScrollView } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import ProfileDetails from '../components/ProfileDetails';
import ProfileDelete from '../components/ProfileDelete';

export default function Profiles({props, navigation}) {
  const allJohnny = [{value: "Coconut"}, {value: "Skimmed Milk"}, {value: "Nuts"}]
  const dieJohnny = [{value: "Gluten free"}, {value: "Porkless"}, {value: "Pescatarian"}]

  const allJackie = [{value: "Tomato"}, {value: "Relic"}]
  const dieJackie = [{value: "Porkless"}, {value: "Vegetarian"}]

  const allGoro = []
  const dieGoro = [{value: "Pescatarian"}]

  const allViktor = [{value: "Pasta"}, {value: "Fish"}]
  const dieViktor = [{value: "Dairy free"}, {value: "Vegan"}]

  const [visible, setVisible] = useState(false);
  const [opacity, setOpacity] = useState(1);
  const raisePopUp = () => {
        setVisible(true)
        setOpacity(0.3)
  }
  const erasePopUp = () => {
        setVisible(false)
        setOpacity(1)
  }

  return (
    <SafeAreaProvider style={{flex: 1}}>
        <ScrollView>
            <View style={{opacity: opacity, height: "100%", width: "100%", flex: 1, backgroundColor: '#3F3C42',}}>
                <LinearGradient colors={['#2680AA', '#59BDCD']} style={[styles.linearGradient, {minHeight: useWindowDimensions().height}]}>
                    <View style={styles.separator}/>
                    <ProfileDetails name="Johnny Silverhand" avatar="plus_small.png" diets={dieJohnny} allergies={allJohnny} onDeleteProfile={raisePopUp} navigation={navigation}></ProfileDetails>
                    <View style={styles.separator}/>
                    <ProfileDetails name="Jackie Welles" avatar="plus_small.png" diets={dieJackie} allergies={allJackie} onDeleteProfile={raisePopUp} navigation={navigation}></ProfileDetails>
                    <View style={styles.separator}/>
                    <ProfileDetails name="Goro Takemura" avatar="plus_small.png" diets={dieGoro} allergies={allGoro} onDeleteProfile={raisePopUp} navigation={navigation}></ProfileDetails>
                    <View style={styles.separator}/>
                    <ProfileDetails name="Viktor Vector" avatar="plus_small.png" diets={dieViktor} allergies={allViktor} onDeleteProfile={raisePopUp} navigation={navigation}></ProfileDetails>
                    <View style={styles.modal}>
                        <Modal visible={visible} onRequestClose={erasePopUp} animationType="fade" transparent={true}>
                            <View style={styles.modal}>
                                <View style={styles.viewModal}>
                                    <View style={styles.profileValidation}>
                                        <ProfileDelete name="Johnny Silverhand" avatar="plus_small.png" diets={dieJohnny} allergies={allJohnny}></ProfileDelete>
                                    </View>
                                    <View style={styles.decisionBarVertical}>
                                        <Text style={styles.validationQuestion}>Do you really want to delete this profile?</Text>
                                        <View style={styles.decisionBar}>
                                            <Pressable onPress={erasePopUp} style={{flex:0.5}}>
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
                    </View>
                    <View style={{marginBottom: "20%"}}/>
                </LinearGradient>
            </View>
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
        top: '8%',
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
          backgroundColor: "#F2F0E4",
  },
  validationQuestion: {
        fontSize: 20,
        color: '#ACA279',
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
          backgroundColor: "#59BDCD",
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