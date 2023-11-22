import React, { useEffect, useState } from 'react';
import {View, StyleSheet, Text, Image, Pressable, ScrollView, ActivityIndicator} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import TopBar from '../components/TopBar';
import {Searchbar} from 'react-native-paper';
import FoodElementText from '../components/FoodElementText';
import CustomButton from '../components/CustomButton';
import plus from '../assets/images/plus.png';
import moins from '../assets/images/minus.png';
import meat from '../assets/images/meat_icon.png';
import vegetable from '../assets/images/vegetable_icon.png';
import fruit from '../assets/images/fruit_icon.png';
import Ingredient from '../Models/Ingredient'


export default function IngredientSelection(props) {

  const [searchValue, setSearchValue] = useState('');
  const alphabetArray: Array<string> = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  let [isLoading, setIsLoading] = useState(true);
  let [error, setError] = useState();
  let [response, setResponse] = useState();
  let [SelectedIngredient, setSelectedIngredients] = useState([]);
  let instancesArray: Array<any> = [];
 

// Pour se connecter à l'API
  useEffect(() => {
    fetch('http://localhost:3000/ingredients')
      .then(res => res.json())
      .then(
        result => {
          setIsLoading(false);
          setResponse(result);
        },
        error => {
          setIsLoading(false);
          setError(error);
        }
      );
  }, []);

// Pour 
  const getContent = () => {
    
    if (isLoading) {
      return <ActivityIndicator size="large" />;
    }

    if (error) {
      console.log('Erreur ici' + error);
      return <Text>Ca marche Pos</Text>;
    }

    if (response) {
      try {
        instancesArray = Ingredient.convertApiResponse(JSON.stringify(response));

        return instancesArray.map((ingredient, index) => (
          <AvailableItem key={index} value={ingredient} />
        ));
      } catch (error) {
        console.error("Erreur de conversion de la réponse en instances d'Ingredient:", error);
        return <Text>Erreur lors du traitement des données</Text>;
      }
    }
  };

// Ingredients disponible
  const AvailableItem = ({ value }: { value: Ingredient }) => (
    <>
      <View style={styles.horizontalAlignement}>
        <FoodElementText title={value.name} />
        <Pressable onPress={() => SelectIngredient(value)}>
          <Image source={plus} style={{ width: 20, height: 20 }} />
        </Pressable>
      </View>
      <View style={{ height: 30 }}></View>
    </>
  );

// Ingredient choisi par l'utilisateur 
  const ChooseItem = ({ value }: { value: { id: number; name: string } }) => (
    <>
      <View style={styles.horizontalAlignement}>
        <FoodElementText title={value.name} />
        <Pressable onPress={() => RemoveIngredient(value.id)}>
          <Image source={moins} style={{ width: 20, height: 20 }} />
        </Pressable>
      </View>
      <View style={{ height: 30 }}></View>
    </>
  );

  function SelectIngredient(newIngredient: Ingredient) {
    const exists = SelectedIngredient.find(
        (ingredient) => ingredient.id === newIngredient.id
    );

    if (!exists) {
        setSelectedIngredients([...SelectedIngredient, newIngredient]);
        console.log(newIngredient);
        console.log(SelectedIngredient);
    }else{
      console.log(exists)
      console.log("cheh pas ajouté")
    }
}

function RemoveIngredient(idIngredient: Number){
  const updatedIngredients = SelectedIngredient.filter(
    (ingredient) => ingredient.id !== idIngredient
  );

  setSelectedIngredients(updatedIngredients);
}


  return (
    <SafeAreaProvider>
          <TopBar title="Ingredient selection" />
        <ScrollView contentContainerStyle={{ alignItems: 'center', height: '100%'}}>
          <View style={styles.page}>
            <View style={styles.element}>
              <View style={[styles.horizontalAlignement, {justifyContent: 'center'}]}>
                <Pressable>
                    <Image source={meat} style={{ width: 30, height: 30 }} />
                </Pressable>
                <Pressable>
                    <Image source={vegetable} style={{ width: 30, height: 30 }} />
                </Pressable>
                <Pressable>
                    <Image source={fruit} style={{ width: 30, height: 30 }} />
                </Pressable>
              </View>
              <View>
              <Searchbar
                  placeholder="Rechercher"
                  onChangeText={query => setSearchValue(query)}
                  value={searchValue}
                  style={{margin: 10, 
                    backgroundColor: '#F2F0E4', 
                    borderWidth : 1,
                    borderColor: "#ACA279", 
                    borderRadius: 15,
                    height: 50,
                    }}/> 
                  
              </View>
              <View style={{ flex: 1}} >
                <ScrollView contentContainerStyle={{ alignItems: 'center', height: 300}}>
                  {getContent()}
                </ScrollView>
              </View>
              <View style={{ height: 20 }}></View>
            </View>

            <View style={[styles.element, {marginTop:  40}]}>
                <View style={[styles.horizontalAlignement, {justifyContent: "flex-start", marginLeft: 10}]}>
                  <Text style={{fontSize: 20, color: '#ACA279'}}>Available</Text>
                </View>
                
                <View style={{ height: 5 }}></View>

                <View style={{ flex: 1}} > 
                <ScrollView contentContainerStyle={{ alignItems: 'center', height: 150}}>
                      {SelectedIngredient.map((source, index) => (
                        <ChooseItem key={index} value={source}></ChooseItem>
                      ))}
                </ScrollView>
              </View>
              <View style={{ height: 20 }}></View>
            </View>

            <View style={{ height: 15 }}></View>
            <CustomButton title="Find a recipe"/>                
            </View>
        </ScrollView>
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
    backgroundColor:'#F2F0E4', 
    borderRadius: 30,
  },
  horizontalAlignement: {
    display: 'flex',
    height: 30,
    width: 350,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 15,
  }
});
