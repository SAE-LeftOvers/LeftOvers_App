import React, { useState, useContext } from 'react';
import {View, StyleSheet, Text, Image, Pressable, useWindowDimensions, ScrollView} from 'react-native';
import {SafeAreaProvider } from 'react-native-safe-area-context';
import {Modal, Portal, PaperProvider} from 'react-native-paper';
import {LinearGradient} from 'expo-linear-gradient';
import RecipeElement from '../components/RecipeElement';
import SelectedIngredient from '../components/SelectedIngredient';
import FoodElementTextSimple from '../components/FoodElementTextSimple';
import CustomButton from '../components/CustomButton';
import ColorContext from '../theme/ColorContext';
import ParameterTopBar from '../components/ParameterTopBar';
import ListWithoutSelect from '../components/ListWithoutSelect';
import ValidateButton from '../components/ValidateButton';
import bracketLeft from '../assets/images/angle_bracket_left.png';
import bracketRight from '../assets/images/angle_bracket_right.png';
import plus from '../assets/images/plus_small.png';
import minus from '../assets/images/minus.png';


export default function RecipeSuggestion(props) {
  const {colors} = useContext(ColorContext)
  const [visible, setVisible] = React.useState(false);
  const [visibleFilters, setVisibleFilters] = React.useState(false);
  const [visibleIngredients, setVisibleIngredients] = React.useState(true);
  const [minCpt, setMinCpt] = useState(0);
  const [maxCpt, setMaxCpt] = useState(4);
  const ingredientList = [{title: "Steak"}, {title: "Sheep Ribs"}, {title: "Rabbit Thigh"}, {title: "Ham"}, {title: "Cream (Liquid)"}, {title: "Pepper Bell"}]
  const ingredientListV2 = [{title: "Smoked Salmon"}, {title: "Tomato"}, {title: "Carrot"}]
  const limitedList = ingredientList.slice(minCpt, maxCpt);
  const [colorIngredients, setColorIngredients] = useState("#59BDCD");
  const [colorFilters, setColorFilters] = useState(colors.cardDetail);

  const die = [{value: "Gluten free"}, {value: "Porkless"}, {value: "Gluten free"}, {value: "Porkless"}]
  const all = []

  const containerStyle = {
    //minHeight: useWindowDimensions().height/2,
    //width: useWindowDimensions().width,
    height: "75%",
    width: "100%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  };
  
  const handleChildEvent = () => {
    setVisible(!visible)
  }
  const handleChildEventGoFilters = () => {
    setVisibleIngredients(false);
    setVisibleFilters(true);
    setColorFilters(colors.buttonDetail)
    setColorIngredients(colors.cardDetail)
  }
  const handleChildEventGoIngredients = () => {
      setVisibleFilters(false);
      setVisibleIngredients(true);
      setColorFilters(colors.cardDetail)
      setColorIngredients(colors.buttonDetail)
  }

  const decreaseCounter = () => {
    if (minCpt > 0) {
      setMinCpt(minCpt - 4);
      setMaxCpt(maxCpt - 4)
    }
    else{
        setMaxCpt(ingredientList.length+ingredientList.length%4)
        let cpt=ingredientList.length-(ingredientList.length%4)
        setMinCpt(cpt)
    }
  }
  const increaseCounter = () => {
    if (maxCpt < ingredientList.length) {
      setMinCpt(minCpt + 4);
      setMaxCpt(maxCpt + 4)
    }
    else{
        setMinCpt(0)
        setMaxCpt(4)
    }
  }

  const styles = StyleSheet.create({
    linearGradient: {
        width: "100%",
        flex: 1,
        //padding: "2%",
        paddingTop: 0,
        alignItems: "center",
        justifyContent: "center"
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

    horizontalAlignment: {
      display: 'flex',
      height: "10%",
      width: "100%",
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },

    recipes: {
          flexDirection: "row",
          overflow: "scroll",
          alignItems: "flex-start",
          justifyContent: "center",
    },
  });

  const ingredientElements = limitedList.map((source, index) => (
    <View style={[styles.horizontalAlignment, {marginVertical: "3%"}]}>
      <FoodElementTextSimple title={source.title}/>
      <Image source={plus} style={{width: 20, resizeMode: "contain", tintColor: colors.cardDetail}}/>
      <Image source={minus} style={{width: 20, resizeMode: "contain", tintColor: colors.cardDetail}}/>
    </View>
  ));

  const goDetails = () => props.navigation.navigate("RecipeDetails")

  return (
    <SafeAreaProvider style={{flex: 1}}>
    <PaperProvider>
      <ScrollView>
        <LinearGradient colors={[colors.primary, colors.primaryComplement]} style={[styles.linearGradient, {minHeight: useWindowDimensions().height}]}>
            <View style={{marginTop: "6%"}}/>
            <SelectedIngredient
              ingredientList={ingredientList}
              onEvent={handleChildEvent}/>
            <ScrollView style={{marginTop: "6%"}} horizontal={true}>
              <View style={{marginHorizontal: 10}}/>
              <RecipeElement
                    number="63"
                    title="Meat Stick"
                    textList={ingredientList}
                    description="Delicious stick with 4 meats. Accessible for beginners. 20 min or less to cook."
                    duration="17 min"
                    navigateDetails={goDetails}/>
              <View style={{marginHorizontal: 10}}/>
              <RecipeElement
                    number="03"
                    title="Vichyssoise"
                    textList={ingredientListV2}
                    description="Cold soup of vegetables. Difficult recipe. Not advised to beginners. 1h or more."
                    duration="1h and a half"
                    navigateDetails={goDetails}/>
              <View style={{marginHorizontal: 10}}/>
            </ScrollView>
            <View style={{marginBottom: "20%"}}/>
        </LinearGradient>
      </ScrollView>
      <Portal>
            <Modal visible={visible} onDismiss={handleChildEvent} contentContainerStyle={containerStyle} style={{marginTop: 0, justifyContent: "flex-end"}}>
                <ParameterTopBar onEventFilter={handleChildEventGoFilters} onEventIngredient={handleChildEventGoIngredients} colorFilters={colorFilters} colorIngredients={colorIngredients}/>
                {visibleIngredients &&(
                    <LinearGradient colors={[colors.primary, colors.primaryComplement]} style={[styles.linearGradient, {paddingHorizontal: "3%", justifyContent: "flex-start"}]}>
                        {ingredientElements}
                        <View style={[styles.horizontalAlignment, {marginTop: "3%"}]}>
                             <Pressable onPress={decreaseCounter}>
                                  <Image source={bracketLeft} style={{width: 30, height: "100%", resizeMode: "contain", tintColor: colors.cardDetail}}/>
                             </Pressable>
                             <CustomButton title="Save"></CustomButton>
                             <Pressable onPress={increaseCounter}>
                                  <Image source={bracketRight} style={{width: 30, height: "100%", resizeMode: "contain", tintColor: colors.cardDetail}}/>
                             </Pressable>
                        </View>
                    </LinearGradient>

                )}
                {visibleFilters &&(
                    <ScrollView>
                    <LinearGradient colors={[colors.primary, colors.primaryComplement]} style={[styles.linearGradient, {paddingHorizontal: "3%"}]}>
                        <View style={{marginTop: "10%"}}/>
                        <View style={styles.background}>
                            <View style={styles.filterBar}>
                                <Text style={styles.filters}>Additional Filters</Text>
                                <Text style={styles.nbSelected}>{die.length} selected</Text>
                            </View>
                            <ListWithoutSelect title="Diets" content={die}></ListWithoutSelect>
                            <View style={{marginTop: "3%"}}/>
                            <ListWithoutSelect title="Allergies" content={all}></ListWithoutSelect>
                            <View style={{marginTop: "3%"}}/>
                            <ValidateButton title="Change Filters" image="update.png" colour={colors.buttonDetail} backColour={colors.buttonBackground} todo={() => props.navigation.navigate("FiltersSelection")}></ValidateButton>
                        </View>
                        <View style={{marginTop: "6%"}}/>
                        <View>
                            <CustomButton title="Save"></CustomButton>
                        </View>
                        <View style={{marginTop: "43%"}}/>
                    </LinearGradient>
                    </ScrollView>
                )}
            </Modal>
      </Portal>
    </PaperProvider>
    </SafeAreaProvider>
  );
}