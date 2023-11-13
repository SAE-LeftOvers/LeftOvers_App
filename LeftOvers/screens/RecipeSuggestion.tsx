import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, ScrollView} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Modal, Portal, PaperProvider } from 'react-native-paper';
import TopBar from '../components/TopBar';
import RecipeElement from '../components/RecipeElement';
import SelectedIngredient from '../components/SelectedIngredient';
import FoodElementText from '../components/FoodElementText';
import brochette from '../assets/images/brochette.png'; 


export default function RecipeSuggestion(props) {

  const imageList = [];
  const [visible, setVisible] = React.useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {
    backgroundColor: 'white',
    height: 350,
    width: 370,
  };
  
  const handleChildEvent = (value) => {
   setVisible(!visible)
  };

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
                        <View style={[styles.page, { justifyContent: 'space-around' }]}>
                            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                                    <View style={[styles.horizontalAlignement, { marginBottom: 10 }]}>
                                        <FoodElementText title="test" />
                                        <Image source={brochette} style={{ width: 20, height: 20 }} />
                                        <Image source={brochette} style={{ width: 20, height: 20 }} />
                                    </View>

                                    <View style={[styles.horizontalAlignement, { marginBottom: 10 }]}>
                                        <FoodElementText title="test" />
                                        <Image source={brochette} style={{ width: 20, height: 20 }} />
                                        <Image source={brochette} style={{ width: 20, height: 20 }} />
                                    </View>
                            </ScrollView>
                        </View>           
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
    transform: [{ translateX: -185 }, { translateY: -175 }], // Ajustez en fonction de la moitié de la hauteur et de la largeur
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
