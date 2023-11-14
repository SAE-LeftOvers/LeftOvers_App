import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, Pressable} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Modal, Portal, PaperProvider} from 'react-native-paper';
import TopBar from '../components/TopBar';
import RecipeElement from '../components/RecipeElement';
import SelectedIngredient from '../components/SelectedIngredient';
import FoodElementText from '../components/FoodElementText';
import brochette from '../assets/images/brochette.png'; 
import ParameterTopBar from '../components/ParameterTopBar';
import bracketLeft from '../assets/images/angle_bracket_left.png';
import bracketRight from '../assets/images/angle_bracket_right.png';


export default function RecipeSuggestion(props) {

  const imageList = [];
  const [visible, setVisible] = React.useState(false);
  const [visibleFilters, setVisibleFilters] = React.useState(false);
  const [visibleIngredients, setVisibleIngredients] = React.useState(true);
  const [minCpt, setMinCpt] = useState(0);
  const [maxCpt, setMaxCpt] = useState(4);
  const listeIngredient = props.list;
  const limitedList = listeIngredient.slice(minCpt, maxCpt);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {
    backgroundColor: 'white',
    height: 400,
    width: 380,
  };
  
  const handleChildEvent = (value) => {
   setVisible(!visible)
  };

  const handleChildEventGoFilters = (value) => {
    setVisibleIngredients(false);
    setVisibleFilters(true);
  }

  const handleChildEventGoIngredients = (value) => {
      setVisibleFilters(false);
      setVisibleIngredients(true);
      console.log("jai change pour iingredient");
  }

  const decreaseCounter = () => {
    if (minCpt > 0) {
      setMinCpt(minCpt - 4);
      setMaxCpt(maxCpt - 4)
    } 
  };

  const increaseCounter = () => {
    if (maxCpt < listeIngredient.length) {
      setMinCpt(minCpt + 4);
      setMaxCpt(maxCpt + 4)
    } 
  };

  const imageElements = limitedList.map((source, index) => (
      <View style={[styles.horizontalAlignement, { marginBottom: 10 }]}>
        <FoodElementText key={index} title={source} />
        <Image source={brochette} style={{ width: 20, height: 20 }} />
        <Image source={brochette} style={{ width: 20, height: 20 }} />
      </View>
  ));

  return (
    <SafeAreaProvider>
      <TopBar />
      <View style={styles.page}>
        <SelectedIngredient 
          listeIngredient={props.list} 
          listeImage={imageList} 
          onEvent={handleChildEvent} 
        />
        <View style={{ marginTop: 100 }}>
          <RecipeElement
            number="13"
            title="Pizza with Pineapples"
            imageList={imageList}
            textList={props.list}
            description="delicious plate that will please you"
            style={styles.element}
          />
        </View>
      </View>
      <View style={styles.modal}>
            <PaperProvider>
                <Portal>
                    <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
                        <ParameterTopBar  onEventFilter={handleChildEventGoFilters} onEventIngredient={handleChildEventGoIngredients}></ParameterTopBar>

                        {visibleIngredients && (
                        <View style={[styles.page, { justifyContent: 'space-between' }]}>   
                                    {imageElements}
                                    <View id="IngredientList" style={[styles.horizontalAlignement, {marginTop: 10}]}>
                                        <Pressable onPress={decreaseCounter} id="GoLeft" >
                                          <Image source={bracketLeft} style={{ width: 20, height: 20 }} />
                                        </Pressable>

                                        <Pressable onPress={increaseCounter} id="GoRight">
                                          <Image source={bracketRight} style={{ width: 20, height: 20 }} />
                                        </Pressable>
                                      </View>
                        </View>
                        )} 

                        {visibleFilters &&(
                           <View style={[styles.page, { justifyContent: 'space-between'}]}>
                              <Text>HEHEHEHEHEHEHE</Text>
                          </View>
                        )}


                    </Modal>
                </Portal>
            </PaperProvider>
        </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#59BDCD',
    alignItems: 'center',
    display: 'flex',
    flexWrap: 'wrap',
    padding: 20,
  },
  element: {
    marginTop: 20,
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modal :{
    position: 'absolute',
    top: '50%', // Centre verticalement
    left: '50%', // Centre horizontalement
    transform: [{ translateX: -185 }, { translateY: -120 }], // Ajustez en fonction de la moitié de la hauteur et de la largeur
  },
  horizontalAlignement: {
    display: 'flex',
    height: 30,
    width: 350,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 10,
  }
});
