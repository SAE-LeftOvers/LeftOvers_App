import React from 'react';
import {StyleSheet, View, Modal, Pressable, Text, Image} from 'react-native';
import ProfileDetails from '../components/ProfileDetails';
import ProfileDelete from '../components/ProfileDelete';
import TopBar from '../components/TopBar';
import {LinearGradient} from 'expo-linear-gradient';
import {SafeAreaProvider} from 'react-native-safe-area-context';

export default function ModifyProfile(props) {
  const allJohnny = [{value: "Coconut"}, {value: "Skimmed Milk"}, {value: "Nuts"}]
  const dieJohnny = [{value: "Gluten free"}, {value: "Porkless"}, {value: "Pescatarian"}]

  const allJackie = [{value: "Tomato"}, {value: "Relic"}]
  const dieJackie = [{value: "Porkless"}, {value: "Vegetarian"}]

  const allGoro = []
  const dieGoro = [{value: "Pescatarian"}]

  const allViktor = [{value: "Pasta"}, {value: "Fish"}]
  const dieViktor = [{value: "Dairy free"}, {value: "Vegan"}]

  const [visible, setVisible] = React.useState(false);
  const [opacity, setOpacity] = React.useState(1);
  const raisePopUp = () => {
        setVisible(true)
        setOpacity(0.4)
  }
  const erasePopUp = () => {
        setVisible(false)
        setOpacity(1)
  }

  return (
    <SafeAreaProvider>
        <View style={styles.container}>
            <View style={{opacity: opacity, height: "100%", width: "100%", flex: 1, backgroundColor: '#3F3C42',}}>
                <TopBar title="Profiles" isVisible="true"/>
                <LinearGradient colors={['#2680AA', '#59BDCD']} style={styles.linearGradient}>
                    <View style={{marginTop: 10}}/>
                    <ProfileDetails name="Johnny Silverhand" avatar="plus_small.png" diets={dieJohnny} allergies={allJohnny} onDeleteProfile={raisePopUp}></ProfileDetails>
                    <View style={{marginTop: 10}}/>
                    <ProfileDetails name="Jackie Welles" avatar="plus_small.png" diets={dieJackie} allergies={allJackie} onDeleteProfile={raisePopUp}></ProfileDetails>
                    <View style={{marginTop: 10}}/>
                    <ProfileDetails name="Goro Takemura" avatar="plus_small.png" diets={dieGoro} allergies={allGoro} onDeleteProfile={raisePopUp}></ProfileDetails>
                    <View style={{marginTop: 10}}/>
                    <ProfileDetails name="Viktor Vector" avatar="plus_small.png" diets={dieViktor} allergies={allViktor} onDeleteProfile={raisePopUp}></ProfileDetails>
                    <View style={{marginTop: 10}}/>
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
                                                    <Image source={require("../assets/images/validate.png")} style={{tintColor: "#2DE04A", height: 30, width: 30, flex: 0.2, margin: 10}}/>
                                                    <Text style={styles.yesText}>Yes</Text>
                                                </View>
                                            </Pressable>
                                            <Pressable onPress={erasePopUp} style={{flex:0.5}}>
                                                <View style={styles.noButton}>
                                                    <Image source={require("../assets/images/cross.png")} style={{tintColor: "#E02D2D", height: 30, width: 30, flex: 0.2, margin: 10}}/>
                                                    <Text style={styles.noText}>No</Text>
                                                </View>
                                            </Pressable>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </Modal>
                    </View>
                </LinearGradient>
            </View>
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
  modal: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        transform: [{ translateX: -207 }, { translateY: -140 }],
  },
  viewModal: {
        flexDirection: "column",
        padding: 10,
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: 200,
  },
  profileValidation: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: 20,
  },
  decisionBarVertical: {
          flexDirection: "column",
          width: "100%",
          padding: 10,
          height: "100%",
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
        padding: 5,
  },
  decisionBar: {
          flexDirection: "row",
          flex: 0.7,
          width: "100%",
          height: "20%",
          borderRadius: 15,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#F2F0E4",
  },
  yesButton: {
          flexDirection: "row",
          flex: 0.5,
          padding: 10,
          marginHorizontal: 10,
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
      padding: 5,
  },
  noButton: {
        flexDirection: "row",
        flex: 0.5,
        padding: 10,
        marginHorizontal: 10,
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
        padding: 5,
  },
});